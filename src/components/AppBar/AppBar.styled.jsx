import styled from '@emotion/styled';

export const AppBarContainer = styled.div`
  padding: 10px 15px 10px 15px;
  display: flex;
  justify-content: space-around;

  align-items: center;
  background-image: linear-gradient(0deg, #000000, #ff9898);
  box-shadow: 0px 3px 20px 5px black;

  @media screen and (min-width: 768px) {
    justify-content: space-around;
    padding: 15px 30px 15px 30px;
  }
`;