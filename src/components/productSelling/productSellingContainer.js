import { useMutation } from '@apollo/react-hooks';
import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { useHistory } from 'react-router';
import * as yup from 'yup';
import { addProduct } from '../../graphql/mutation/product';
import { PRODUCT_LISTING } from '../../router/types';

const useProductSellingContainer = () => {
  const history = useHistory();
  const [formState, setFormState] = useState({
    title: '',
    subTitle: '',
    publisher: '',
    price: '',
    description: '',
    originalPrice: Math.floor(Math.random() * 1000),
    author: '',
    files: new Map(),
    prevFiles: [],
    category: '',
    subcategory: '',
    city: '',
    state: '',
    zipCode: '',
    country: '',
    address: '',
    shippingContact: '',
    shippingEmail: '',
    condition: '',
    format: '',
    language: ''
  });
  const [errors, setErrors] = useState({
    isError: false,
    errors: {}
  });
  const [disabledSubmit, setDisabledSubmit] = useState(false);
  const [addProductMutation] = useMutation(addProduct);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'file') {
      const file = e.target.files[0];
      const newId = formState.files.size + 1;
      const filesClone = new Map(formState.files.entries());
      filesClone.set(newId, file);
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (e) => {
        const dataURL = e.target.result;
        const prevImageObj = {
          id: newId,
          fileName: file.name,
          dataURL
        };
        setFormState((prevState) => ({
          ...prevState,
          files: filesClone,
          prevFiles: [...prevState.prevFiles, prevImageObj]
        }));
      };
      return;
    }
    setFormState({
      ...formState,
      [name]: value
    });
  };
  const handleDeleteFile = (id) => {
    const filesClone = new Map(formState.files.entries());
    filesClone.delete(id);
    setFormState((prevState) => ({
      ...prevState,
      files: filesClone,
      prevFiles: prevState.prevFiles.filter(
        (prevImageObj) => prevImageObj.id !== id
      )
    }));
  };

  const handleSubmit = (e) => {
    __validate(formState).then((errors) => {
      if (errors.isError) {
        toast.error('Please fill all the required fields');
        setErrors(errors);
      } else {
        setErrors(errors);
        setDisabledSubmit(true);
        const payload = {
          title: formState.title,
          subTitle: formState.subTitle,
          publisher: formState.publisher,
          language: formState.language,
          author: formState.author,
          price: +formState.price,
          originalPrice: +formState.originalPrice,
          description: formState.description,
          category: formState.category,
          subcategory: formState.subcategory,
          format: formState.format,
          status: 'in-stock',
          condition: formState.condition,
          files: [],
          shippingAddress: {
            city: formState.city,
            state: formState.state,
            zipCode: +formState.zipCode,
            country: formState.country,
            address: formState.address
          }
        };
        uploadFiles(Array.from(formState.files.values()))
          .then((urls) => {
            payload.files = urls;
            addProductMutation({
              variables: { payload }
            })
              .then((res) => {
                console.log(res);
              })
              .catch((err) => {})
              .finally(() => {
                history.push(PRODUCT_LISTING);
                setDisabledSubmit(false);
              });
          })
          .catch(() => {});
      }
    });
  };
  const uploadFiles = async (files = []) => {
    const arrayOfPromises = [];
    files.forEach((file) => {
      const promise = new Promise((resolve, reject) => {
        const storageRef = firebase.storage().ref('/images/' + file.name);
        const uploadTask = storageRef.put(file);
        uploadTask.on(
          'state_changed',
          function (snapshot) {},
          function (error) {},
          function () {
            uploadTask.snapshot.ref
              .getDownloadURL()
              .then(function (downloadURL) {
                resolve(downloadURL);
              });
          }
        );
      });
      arrayOfPromises.push(promise);
    });
    return await toast.promise(Promise.all(arrayOfPromises), {
      loading: 'Uploading...',
      success: 'Uploaded Successfully',
      error: 'Error in Uploading'
    });
  };

  const __validate = async (data) => {
    const schema = yup.object().shape({
      title: yup.string().required('Name is required'),
      subTitle: yup.string().required('Subtitle is required'),
      publisher: yup.string().required('Publisher is required'),
      price: yup
        .number()
        .required('Price is required')
        .typeError('Price is not valid'),
      description: yup.string().required('Description is required'),
      author: yup.string().required('Author is required'),
      category: yup.string().required('Category is required'),
      subcategory: yup.string().required('Sub Category is required'),
      city: yup.string().required('City is required'),
      state: yup.string().required('State is required'),
      zipCode: yup
        .number()
        .required('Zip Code is required')
        .typeError('Zip Code is not valid'),
      country: yup.string().required('Country is required'),
      address: yup.string().required('Address is required'),
      shippingContact: yup.string().required('Shipping Contact is required'),
      shippingEmail: yup.string().required('Shipping Email is required'),
      condition: yup.string().required('Condition is required'),
      format: yup.string().required('Format is required'),
      language: yup.string().required('Language is required')
    });
    return schema
      .validate(data, { abortEarly: false })
      .then(() => {
        return { isError: false, errors: {} };
      })
      .catch((err) => {
        const validationErrors = { isError: true, errors: {} };
        err.inner.forEach((error) => {
          validationErrors.errors[error.path] = error.message;
        });
        return validationErrors;
      });
  };
  return {
    formState,
    handleChange,
    handleSubmit,
    handleDeleteFile,
    errors,
    disabledSubmit
  };
};

export default useProductSellingContainer;
