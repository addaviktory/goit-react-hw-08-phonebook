import styled from '@emotion/styled';

export const Ol = styled.ol`
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: 20px;

  width: 90%;

  padding: 20px;
  overflow: auto;
  border-radius: 14px;
  background-color: #ffff;

  &::-webkit-scrollbar {
    width: 5px;
    background-color: #cdc5bf;
    border-radius: 9em;
  }

  /* ползунок скроллбара */
  &::-webkit-scrollbar-thumb {
    background-color: #5d534b8a;
    border-radius: 9em;
    box-shadow: inset 1px 1px 10px #f3faf7;
    transition: 0.5s ease;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: #715b4b;
  }
`;