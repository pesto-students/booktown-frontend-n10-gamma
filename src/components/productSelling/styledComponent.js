import styled from 'styled-components';
import { CommonStyled } from '../common';

export const ProductContainer = styled(CommonStyled.Container)`
  background: ${(props) => props.theme.colors.secondary};
  width: auto;
  height: auto;
`;

export const ProductFieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 40%;
  margin: 10px 0;
  padding: 10px;
  background: white;
  /* border: 1px solid ${(props) => props.theme.colors.primary}; */
  border-radius: 5px;
  .product-field-input {
    width: 100%;
  }
  & {
    @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
      width: 98%;
    }
    @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
      width: 70%;
    }
  }
`;
export const FileUploadContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin: 5px 0;
`;

export const FilePreviewWrapper = styled.div`
  width: 100px;
  height: 100px;
  border: 1px solid ${(props) => props.theme.colors.primary};
  margin: 5px 5px;
  position: relative;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  img {
    border-radius: 5px;
    height: 98px;
    width: 98px;
  }
  .preview-img-overlapper {
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;
    background: rgba(0, 0, 0, 0.2);
    .img-trash-icon {
      color: white;
    }
  }
  &:hover .preview-img-overlapper {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const FileUploadWrapper = styled.div`
  position: relative;
  overflow: hidden;
  display: inline-block;
  width: 100px;
  height: 100px;
  margin: 5px 5px;
  button {
    cursor: pointer;
    border: 2px dashed #0087ff;
    color: gray;
    background-color: white;
    padding: 8px 20px;
    border-radius: 8px;
    font-size: 20px;
    font-weight: bold;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
  }
  input {
    font-size: 100px;
    position: absolute;
    left: 0;
    top: 0;
    opacity: 0;
    width: 100%;
    height: 100%;
  }
`;

export const ProductFieldTitle = styled.div`
  ${(props) => ({ ...props.theme.fonts.h5 })}
  font-weight: bold;
`;

export const ProductFieldHelperText = styled.div`
  font-size: 12px;
  color: ${(props) => props.theme.colors.primaryLight};
`;

export const ProductButtonContainer = styled.div`
  width: 40%;
  margin: 10px 0;
  .btn {
    width: 120px;
  }
  text-align: right;
  & {
    @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
      width: 98%;
      text-align: center;
    }
    @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
      width: 70%;
    }
  }
`;
