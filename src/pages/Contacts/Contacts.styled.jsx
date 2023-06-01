import styled from '@emotion/styled';

export const ContactsPageContainer = styled.div`
  width: 90%;
  position: relative;
`;

export const AddContactsButton = styled.button`
  position: absolute;
  top: 130px;
  width: auto;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border: 1px solid #d5d9d9;
  border-radius: 8px;
  box-shadow: rgba(213, 217, 217, 0.5) 0 2px 5px 0;
  box-sizing: border-box;
  color: #0f1111;
  cursor: pointer;
  font-family: 'Caveat', sans-serif;
  font-size: 20px;
  line-height: 29px;
  padding: 0 10px 0 11px;
  text-align: center;
  text-decoration: none;
  user-select: none;
  transition-duration: 500ms;
  transition-property: all;
  box-shadow: 8px 4px 20px black;
  background-image: linear-gradient(167deg, #726969, #f3bdbd);

  &:hover {
    background-color: #6a7576;
    box-shadow: 0 0 10px #c7d5d7, 0 0 2px #c7d7d7, 0 0 40px #1f2223;
    color: white;
    padding: 26px;
  }
  @media screen and (min-width: 768px) {
    gap: 15px;
    flex-direction: row;
  }

`;

export const ContactsPageBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding-top: 20px;

  border-radius: 5px;
  box-shadow: rgb(200 102 102) 1px 9px 20px 0px;
  background-image: linear-gradient(0deg, #ff002d1c, #000000d6);
}
`;

export const LoadingBox = styled.div`
  padding-top: 20px;
  color: white;

  font-size: 20px;
  height: 30px;
`;