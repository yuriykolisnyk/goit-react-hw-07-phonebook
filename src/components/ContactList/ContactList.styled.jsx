import styled from 'styled-components';

export const Item = styled.li`
  border: 2px solid #3b3b3b;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-flow: row wrap;
`;

export const Name = styled.span`
  margin-right: 15px;
  font-weight: bold;
`;

export const Number = styled.a`
  margin-right: 15px;
  text-decoration: none;
  color: black;
  font-weight: bold;
`;

export const Button = styled.button`
  width: 70px;
  margin: 5px;
  padding: 5px;
  border-radius: 4px;
  border: 1px solid #000000;
  font-size: 12px;
  text-transform: capitalize;
  color: #000000;
  box-shadow: 1px 1px 1px 1px #010e53;
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
