import FeatherIcon from 'feather-icons-react';
import 'firebase/compat/auth';
import React from 'react';
import { categoryAndSubCategory, language } from '../../config/appConfig';
import { useSearch } from '../../hooks';
import {
  Button,
  Footer,
  Header,
  Input,
  InputError,
  Radio,
  Select
} from '../common';
import useProductSellingContainer from './productSellingContainer';
import {
  FilePreviewWrapper,
  FileUploadContainer,
  FileUploadWrapper,
  ProductButtonContainer,
  ProductContainer,
  ProductFieldHelperText,
  ProductFieldTitle,
  ProductFieldWrapper
} from './styledComponent';

const ProductSellingComponent = (props) => {
  const {
    formState,
    handleChange,
    handleSubmit,
    handleDeleteFile,
    errors,
    disabledSubmit
  } = useProductSellingContainer();
  const searchHook = useSearch();
  return (
    <>
      <Header {...searchHook} />
      <ProductContainer>
        <ProductFieldWrapper>
          <ProductFieldTitle>Book Detail</ProductFieldTitle>
          <Input
            name="title"
            onChange={handleChange}
            value={formState.title}
            placeholder={'Enter book title'}
            width="100%"
            className="product-field-input"
            error={errors.errors.title}
          />
          <Input
            name="subTitle"
            onChange={handleChange}
            value={formState.subTitle}
            placeholder={'Enter book sub title'}
            width="100%"
            className="product-field-input"
            error={errors.errors.subTitle}
          />
          <Input
            name="publisher"
            onChange={handleChange}
            value={formState.publisher}
            placeholder={'Enter publisher'}
            width="100%"
            className="product-field-input"
            error={errors.errors.publisher}
          />
          <Input
            name="author"
            onChange={handleChange}
            value={formState.author}
            placeholder={'Enter author name'}
            width="100%"
            className="product-field-input"
            error={errors.errors.author}
          />
          <Select
            width="100%"
            placeholder={'Select Langauge'}
            className="product-field-input"
            name="language"
            onChange={handleChange}
            value={formState.language}
            options={language?.map((item) => ({
              label: item,
              value: item
            }))}
            error={errors.errors.language}
          />
          <ProductFieldHelperText>
            Enter the Book details
          </ProductFieldHelperText>
        </ProductFieldWrapper>
        <ProductFieldWrapper>
          <ProductFieldTitle>Price</ProductFieldTitle>
          <Input
            name="price"
            onChange={handleChange}
            value={formState.price}
            preFix={<span className="price-icon">$</span>}
            placeholder={'Enter book price'}
            width="100%"
            type="number"
            className="product-field-input"
            error={errors.errors.price}
          />
          <ProductFieldHelperText>Give book price</ProductFieldHelperText>
        </ProductFieldWrapper>
        <ProductFieldWrapper>
          <ProductFieldTitle>Category</ProductFieldTitle>
          <Select
            width="100%"
            placeholder={'Select category'}
            className="product-field-input"
            name="category"
            onChange={handleChange}
            value={formState.category}
            options={Object.keys(categoryAndSubCategory)?.map((key) => ({
              label: key,
              value: key
            }))}
            error={errors.errors.category}
          />
          <ProductFieldHelperText>
            Select the category of product
          </ProductFieldHelperText>
        </ProductFieldWrapper>
        <ProductFieldWrapper>
          <ProductFieldTitle>Subcategory</ProductFieldTitle>
          <Select
            width="100%"
            placeholder="Select subcategory"
            className="product-field-input"
            name="subcategory"
            onChange={handleChange}
            value={formState.subcategory}
            options={categoryAndSubCategory[formState.category]?.map(
              (subcategory) => ({
                label: subcategory,
                value: subcategory
              })
            )}
            error={errors.errors.subcategory}
          />
          <ProductFieldHelperText>
            Select the subcategory of product
          </ProductFieldHelperText>
        </ProductFieldWrapper>
        <ProductFieldWrapper>
          <ProductFieldTitle>Description</ProductFieldTitle>
          <Input
            name="description"
            onChange={handleChange}
            value={formState.description}
            placeholder={'Enter book description'}
            width="100%"
            multiline
            className="product-field-input"
            error={errors.errors.description}
          />
          <ProductFieldHelperText>
            Give some description about book
          </ProductFieldHelperText>
        </ProductFieldWrapper>
        <ProductFieldWrapper>
          <ProductFieldTitle>Condition</ProductFieldTitle>
          <Radio name="condition" onChange={handleChange} value={'Old'}>
            Old
          </Radio>
          <Radio onChange={handleChange} value={'New'} name="condition">
            New
          </Radio>
          <InputError error={errors.errors.condition} />
          <ProductFieldHelperText>Select book condition</ProductFieldHelperText>
        </ProductFieldWrapper>
        <ProductFieldWrapper>
          <ProductFieldTitle>Format</ProductFieldTitle>
          <Radio value="audio" onChange={handleChange} name="format">
            Audio
          </Radio>
          <Radio value="book" onChange={handleChange} name="format">
            Books
          </Radio>
          <Radio value="e-book" onChange={handleChange} name="format">
            E-Books
          </Radio>
          <InputError error={errors.errors.format} />
          <ProductFieldHelperText>
            Select what format of book your selling
          </ProductFieldHelperText>
        </ProductFieldWrapper>

        <ProductFieldWrapper>
          <ProductFieldTitle>Shipping Address</ProductFieldTitle>
          <Input
            name="address"
            onChange={handleChange}
            value={formState.address}
            placeholder={'Enter address'}
            width="100%"
            className="product-field-input"
            error={errors.errors.address}
          />
          <Input
            name="city"
            onChange={handleChange}
            value={formState.city}
            placeholder={'Enter city'}
            width="100%"
            className="product-field-input"
            error={errors.errors.city}
          />
          <Input
            name="state"
            onChange={handleChange}
            value={formState.state}
            placeholder={'Enter state'}
            width="100%"
            className="product-field-input"
            error={errors.errors.state}
          />
          <Input
            name="country"
            onChange={handleChange}
            value={formState.country}
            placeholder={'Enter country'}
            width="100%"
            className="product-field-input"
            error={errors.errors.country}
          />
          <Input
            name="zipCode"
            type="number"
            onChange={handleChange}
            value={formState.zipCode}
            placeholder={'Enter zip code'}
            width="100%"
            className="product-field-input"
            error={errors.errors.zipCode}
          />
          <Input
            name="shippingContact"
            onChange={handleChange}
            value={formState.shippingContact}
            placeholder={'Enter contact number'}
            width="100%"
            className="product-field-input"
            error={errors.errors.shippingContact}
          />
          <Input
            name="shippingEmail"
            onChange={handleChange}
            value={formState.shippingEmail}
            placeholder={'Enter email'}
            width="100%"
            className="product-field-input"
            error={errors.errors.shippingEmail}
          />
          <ProductFieldHelperText>Give shipping details</ProductFieldHelperText>
        </ProductFieldWrapper>

        <ProductFieldWrapper>
          <ProductFieldTitle>Files</ProductFieldTitle>
          <FileUploadContainer>
            {formState.prevFiles.map((item) => (
              <FilePreviewWrapper>
                <img src={item.dataURL} alt={item.name} />
                <div className="preview-img-overlapper">
                  <FeatherIcon
                    onClick={() => handleDeleteFile(item.id)}
                    className="img-trash-icon"
                    icon="trash-2"
                  />
                </div>
              </FilePreviewWrapper>
            ))}
            <FileUploadWrapper>
              <button>Add Files &#43;</button>
              <input onChange={handleChange} type="file" name="file" />
            </FileUploadWrapper>
          </FileUploadContainer>
          <ProductFieldHelperText>Add some product pics</ProductFieldHelperText>
        </ProductFieldWrapper>
        <ProductButtonContainer>
          <Button
            onClick={handleSubmit}
            className={'btn'}
            round={10}
            text={'Submit'}
            disabled={disabledSubmit}
          />
        </ProductButtonContainer>
      </ProductContainer>
      <Footer />
    </>
  );
};

ProductSellingComponent.propTypes = {};

export default ProductSellingComponent;
