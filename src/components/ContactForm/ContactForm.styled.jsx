import styled from 'styled-components';

export const Form = styled.form`
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 15px;
  padding: 15px;
  border: 2px solid #3b3b3b;
  border-radius: 5px;
`;

export const Label = styled.label`
  display: inline-flex;
  flex-direction: column;
  margin-bottom: 10px;
  text-align: left;
  font-size: 16px;
`;

export const Input = styled.input`
  width: 300px;
  margin: 10px;
  padding: 10px;
  border: 1px solid #000000;
  border-radius: 4px;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  ::placeholder {
    color: #afafaf;
  }
  &:focus {
    outline: transparent;
    border: 2px solid rgb(18, 16, 172);
  }
`;

export const Button = styled.button`
  width: 150px;
  margin: 10px;
  padding: 5px;
  border-radius: 4px;
  border: 2px solid #000000;
  font-size: 16px;
  text-transform: capitalize;
  color: #000000;
  box-shadow: 5px 5px 15px 5px #010e53;
  cursor: pointer;
  transition: all 250ms linear;
  &:hover {
    transform: scale(0.95);
    background-color: rgb(6, 34, 158);
    border-color: rgb(18, 16, 172);
    color: #ffffff;
    box-shadow: 0 0 40px rgba(0, 0, 0, 0.1) inset;
    transition: all 250ms linear;
  }
`;
