import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e4e4e4;
  color: #838383;
  width: 100%;
  height: 50px;
  font-weight: 45;
`;

const Footer = () => {
  return <Container>@ 2022 Key Frame Healthtech AB</Container>;
};

export default Footer;
