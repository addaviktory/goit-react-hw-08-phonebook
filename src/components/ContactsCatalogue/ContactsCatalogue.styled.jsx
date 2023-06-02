import styled from '@emotion/styled';

export const Button = styled.button`
background-color: #fff;
border: 1px solid #d5d9d9;
border-radius: 8px;
box-shadow: rgba(213, 217, 217, 0.5) 0 2px 5px 0;
box-sizing: border-box;
font-weight: 600;
color: #150d0d8f;
cursor: pointer;
display: inline-block;
font-size: 20px;
line-height: 20px;
padding: 0 5px 0 5px;
margin-bottom: 2px;
text-align: center;
text-decoration: none;
transition-duration: 500ms;
padding: 5px 10px;
transition-property: all;

&:last-child {
  background-color: #ff0000b8;
  color: #ffffffd6;
  
  &:hover {
    background-color: #ff0000;
  }
}

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
  position: relative;
  justify-content: space-between;
  flex-direction: column;
  border-bottom: 1px solid #fff;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const NameContainer = styled.div`
  display: flex;
  margin: 10px 0;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
  margin: 10px 0;
`;

export const NamePrg = styled.p`
  width: 300px;
  height: 30px;
  color: white;
`;

export const NumberPrg = styled.p`
  color: white;
`;
export const ContainerDelete = styled.div`
width: 80%;
text-align: center;
display: flex;
align-items: center;
position: absolute;
top: 0;
right: 50px;

background-color: #9be9cf;
border-radius: 20px;
background-image: linear-gradient(173deg, #c44242, #ffffff80);

@media screen and (min-width: 768px) {
  top: -50px;
  right: 0px;
  width: 30%;
}
`;

export const FormTitle = styled.form`
padding: 15px;
&>p{
  color: white;
  font-weight: 700;
}
`;
export const ButtonDelete = styled.button`
width: 30%;
padding: 5px;
border: none;
border-radius: 10px;
font-size: 18px;
margin-left: 10px;
margin-top: 15px;
background-color: white;
user-select: none;
transition-duration: 500ms;
transition-property: all;
cursor: pointer;
&:hover {
  font-size: 22px;
  background-image: linear-gradient(0deg, #000000, #ffbbbb);
  color: white;
  box-shadow: 0px 3px 10px 0px black;
}

`;


