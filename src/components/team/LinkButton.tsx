import React, { FC } from 'react';
import styled from 'styled-components';
import { FaBeer } from 'react-icons/fa';

export const Button = styled.button`
  outline: none;
  border: 1px solid #dee2e6;
  border-radius: 50%;
  font-size: 20px;
  padding: 5px 5px 5px 5px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: ${({ theme }) => theme.primaryAccent};
    color: ${({ theme }) => theme.primaryLight};
  }
`;

interface ButtonProps {
  Icon: typeof FaBeer;
}

const LinkButton: React.FC<ButtonProps> = ({ Icon }) => {
  return (
    <Button>
      <Icon />
    </Button>
  );
};

export default LinkButton;
