import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  border-radius: 10px;
  width: 50px;
  height: 100px;
  background-color: ${({ theme }) => theme.primaryBackground};
`;

const Img = styled.img`
  border-radius: 50%;
  width: 100px;
  height: 100px;
`;

interface CardProps {
  img?: string;
}

export const Card: React.FC<CardProps> = ({ img }) => {
  return (
    <Container>
      <Img src={'https://avatars.githubusercontent.com/u/19249827?v=4'} />
    </Container>
  );
};
