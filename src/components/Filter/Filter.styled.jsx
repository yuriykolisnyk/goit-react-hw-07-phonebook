import styled from 'styled-components';

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
