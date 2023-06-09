import styled from '@emotion/styled';

export const UserMenuBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;

  @media screen and (min-width: 768px) {
    gap: 15px;
    flex-direction: row;
  }
`;

export const UserPrg = styled.p`
  text-align: center;
  font-size: 100%;
  color: white;

  overflow: hidden;
  text-overflow: ellipsis;

  @media screen and (min-width: 768px) {
    font-size: 28px;
    width: auto;
  }
`;

export const UserButton = styled.button`
  background-color: #fff;
  border: 1px solid #d5d9d9;
  border-radius: 8px;
  box-shadow: rgba(213, 217, 217, 0.5) 0 2px 5px 0;
  box-sizing: border-box;
  color: #0f1111;
  cursor: pointer;
  display: inline-block;
  font-family: 'Caveat', sans-serif;
  font-size: 16px;
  line-height: 29px;
  padding: 0 10px 0 11px;
  text-align: center;
  text-decoration: none;
  user-select: none;
  width: 100px;
  transition-duration: 150ms;
  transition-property: all;

  &:hover {
    box-shadow: 0 0 10px #008296, 1px 3px 6px #1e1919, 0 0 40px #1b1818;
    color: white;
    padding: 3px;
    transition: 500ms;
    background-color: #474747;
    font-size: 18px;
}
  }
`;