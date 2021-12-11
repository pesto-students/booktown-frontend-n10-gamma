import styled from 'styled-components';

export const SearchContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;
export const SearchInput = styled.input`
  width: 100%;
  padding: 5px;
  box-sizing: border-box;
  border-radius: 5px;
  border: none;
  outline: none;
`;
export const SearchResultsContainer = styled.div`
  width: 100%;
  max-height: 300px;
  overflow-y: scroll;
  background-color: #4f5b62;
  padding-left: 10px;
  position: relative;
  z-index: 1;
  .search-loader {
    display: flex;
    align-items: center;
  }
`;

export const SearchItem = styled.p`
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;
