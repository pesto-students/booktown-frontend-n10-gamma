import styled from 'styled-components';

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const SearchInputContainer = styled.div`
  position: relative;
  width: 100%;
  box-sizing: border-box;
  input {
    width: 100%;
    border: none;
    border-radius: 5px;
    padding: 5px 0;
    padding-left: 25px;
    font-size: 1.2rem;
    outline: none;
  }
  .search-icon {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
  }
`;

export const SearchResultsContainer = styled.div`
  width: 100%;
`;
