import styled from '@emotion/styled';
import { Form, Field } from 'formik';

export const MainForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 10px;
  border-radius: 10px;
`;

export const Label = styled.label`
  display: flex;
  justify-content: space-between;
`;

export const Input = styled(Field)`
font-size: 16px;
background: #ffffff;
border-radius: 8px;
height: 25px;
margin-left: 20px;
`;

export const Button = styled.button`
  transition: background-color 0.5s ease;
  outline: none;
  border: none;
  height: 34px;
  background-color: #d9d9d9;
  border-radius: 15px;

  &:hover {
    background-color: #715b4b;
  }
`;