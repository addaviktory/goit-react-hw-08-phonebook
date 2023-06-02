import styled from '@emotion/styled';
import { Form, Field } from 'formik';
import { GrClose } from 'react-icons/gr';

export const ContactsformBackdrop = styled.div`
position: fixed;
    inset: 0%;
    background-color: rgba(44, 39, 50, 0.68);
    z-index: 1;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const MainForm = styled(Form)`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding: 10px;
    border-radius: 10px;
    background-color: #ffffff;
    width: 330px;
    padding: 30px 0;
    background-image: linear-gradient(173deg, #c44242, #ffffff80);
    box-shadow: inset 0em 1em 20px 1px #aeaca4;
    @media screen and (min-width: 768px) {
      width: 500px;
    }
`;

export const CloseBox = styled(GrClose)`
  top: 10px;
  right: 10px;
  width: 22px;
  height: 22px;

  position: absolute;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    top: 20px;
    right: 20px;
    width: 30px;
    height: 30px;
  }
`;

export const FormTitle = styled.h2`
  padding-top: 30px;
`;

export const Label = styled.label`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    gap: 5px;
    font-size: 24px;
    font-weight: 600;
    width: 75%;
`;

export const Input = styled(Field)`
border-radius: 12px;
font-size: 18px;
border: none;
background: #f0eaea70;
padding: 10px;
box-shadow: 1px 2px 10px #837f7f;
`;

export const Button = styled.button`
background-color: #fff;
border: 1px solid #000;
border-radius: 8px;
box-shadow: rgba(213, 217, 217, 0.5) 0 2px 5px 0;
color: #0f1111;
cursor: pointer;
font-size: 20px;
padding: 0 10px 0 11px;
padding: 10px;
font-size: 28px;
transition: 500ms;
transition-duration: 500ms;
transition-property: all;
border: none;
box-shadow: 3px 5px 11px black;
width: 30%;

  &:hover {
    color: white;
    border: 1px solid #d5d9d9;
    padding: 8px;
    background-color: #474747;
    box-shadow: 0 0 10px #313131, 0 0 10px #ffffff, 0 0 15px #2d2f2f;
  }
`;