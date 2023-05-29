import styled from '@emotion/styled';

export const Button = styled.button`
background-color: #fff;
border: 1px solid #d5d9d9;
border-radius: 8px;
box-shadow: rgba(213, 217, 217, 0.5) 0 2px 5px 0;
box-sizing: border-box;
color: #0f1111;
cursor: pointer;
display: inline-block;
font-family: 'Caveat',sans-serif;
font-size: 20px;
line-height: 20px;
padding: 0 5px 0 5px;
margin-bottom: 2px;
text-align: center;
text-decoration: none;
transition-duration: 500ms;
padding: 5px;
transition-property: all;

  &:hover {
    font-size: 24px;
    padding: 8px;
    box-shadow: 0 0 10px #313131, 0 0 10px #ffffff, 0 0 15px #2d2f2f;
    color: white;
    background-color: #474747;
  }
`;

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  border-bottom: 1px solid #fff;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const NameContainer = styled.div`
  display: flex;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
`;

export const NamePrg = styled.p`
  width: 300px;
  height: 30px;
  color: white;
`;

export const NumberPrg = styled.p`
  color: white;
`;