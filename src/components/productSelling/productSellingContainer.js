import { useState } from 'react';
import toast from 'react-hot-toast';
import * as yup from 'yup';

const useProductSellingContainer = () => {
  const [formState, setFormState] = useState({
    name: '',
    price: '',
    description: '',
    author: '',
    files: new Map(),
    prevFiles: [],
    category: '',
    subcategory: '',
    tags: [],
    quantity: '',
    shippingAddress: '',
    shippingState: '',
    shippingCity: '',
    shippingZipCode: 0,
    shippingCountry: '',
    shippingContact: '',
    shippingEmail: '',
    condition: '',
    format: ''
  });
  const [errors, setErrors] = useState({
    isError: false,
    errors: {}
  });

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
      }
    });
  };

  const __validate = async (data) => {
    const schema = yup.object().shape({
      name: yup.string().required('Name is required'),
      price: yup
        .number()
        .required('Price is required')
        .typeError('Price is not valid'),
      description: yup.string().required('Description is required'),
      author: yup.string().required('Author is required'),
      category: yup.string().required('Category is required'),
      subcategory: yup.string().required('Sub Category is required'),
      tags: yup.array().required('Tags is required'),
      quantity: yup.number().required('Quantity is required'),
      shippingAddress: yup.string().required('Shipping Address is required'),
      shippingState: yup.string().required('Shipping State is required'),
      shippingCity: yup.string().required('Shipping City is required'),
      shippingZipCode: yup.number().required('Shipping Zip Code is required'),
      shippingCountry: yup.string().required('Shipping Country is required'),
      shippingContact: yup.string().required('Shipping Contact is required'),
      shippingEmail: yup.string().required('Shipping Email is required'),
      condition: yup.string().required('Condition is required'),
      format: yup.string().required('Format is required')
    });
    return schema
      .validate(data, { abortEarly: false })
      .then(() => {
        return { isError: false, errors: null };
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
    errors
  };
};

export default useProductSellingContainer;
