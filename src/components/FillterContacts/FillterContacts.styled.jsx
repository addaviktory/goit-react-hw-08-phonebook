import styled from '@emotion/styled';

export const SearchLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  padding-bottom: 15px;
  width: 60%;
`;

export const SearchTitle = styled.h2`
  color: white;
  font-size: 20px;

  @media screen and (min-width: 768px) {
    font-size: 25px;
  }
`;

export const SearchInput = styled.input`
  background-color: #f5f5f53b;
  width: 100%;
  outline: none;
  border: none;
  border-bottom: 1px solid white;
  font-size: 28px;
  color: #ffffff;
  border-radius: 10px;
  transition: 500ms;
  padding: 6px;
  padding-left: 20px;
  &:hover {
    font-size: 32px;
    box-shadow: 2px 3px 12px #b7b6b6;
    transition: 500ms;
  }
`;