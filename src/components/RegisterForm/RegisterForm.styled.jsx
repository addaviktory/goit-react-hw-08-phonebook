import styled from '@emotion/styled';

export const RegisterFormContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const RegisterFormBox = styled.form`
display: flex;
width: 35%;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding: 10px;
    border-radius: 10px;
    background-color: #b831317a;
    font-size: 18px;
    font-weight: 700;
    color: black;
    transition: all 0.5s ease;
    box-shadow: 1px 7px 20px 0px black;
    background-image: linear-gradient(344deg, #736565, #e53030);
    padding: 45px 0;
    @media screen and (max-width: 768px) {
    width: 310px;
    }
    

`;

export const RegisterFormTitle = styled.h2`
  font-size: 22px;

  @media screen and (min-width: 768px) {
    font-size: 32px;
  }
`;

export const Label = styled.label`
display: flex;
    justify-content: space-between;
    flex-direction: column;
    gap: 5px;
    font-size: 22px;
    font-weight: 600;
    width: 80%;

  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`;

export const Input = styled.input`
background: #ffffff63;
    outline: none;
    border: none;
    font-size: 20px;
    padding: 10px;
    border-radius: 10px;

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`;

export const Button = styled.button`
background-color: #e6e0e0;
border-radius: 8px;
box-shadow: rgba(213, 217, 217, 0.5) 0 2px 5px 0;
box-sizing: border-box;
color: #0f1111;
cursor: pointer;
display: inline-block;
font-family: 'Caveat',sans-serif;
font-size: 22px;
line-height: 28px;
padding: 5px;
text-align: center;
text-decoration: none;
user-select: none;
width: 40%;
transition-duration: 500ms;
transition-property: all;
border: none;
box-shadow: 1px 10px 20px #423636;

  &:hover {
    color: white;
    background-color: #474747;
    padding: 8px;
  }
`;