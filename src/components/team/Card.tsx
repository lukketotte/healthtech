import React from 'react';
import styled from 'styled-components';
import Button from './LinkButton';
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from 'react-icons/ai';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #fff;
  border: 1px solid #dee2e6;
  border-radius: 0.25rem;
  max-width: 100%;
  height: auto;
  margin-top: 10px;
  padding: 10px 0px 10px 0px;
`;

const Img = styled.img`
  border-radius: 50%;
  width: 100px;
  height: 100px;
  border: 3px solid #dee2e6;
  box-shadow: 4px 3px 8px 1px #969696;
  -webkit-box-shadow: 4px 3px 8px 1px #969696;
`;

const H5 = styled.h5`
  margin: 10px 0px 2px 0px;
  font-size: 1.2em;
`;
const H6 = styled.h5`
  margin: 2px 0px 10px 0px;
  font-size: 0.8em;
  color: #666666;
  font-weight: 300;
`;

const Li = styled.li`
  list-style: none;
  display: inline-block;
`;

interface CardProps {
  img?: string;
  gitlink?: string;
  linkedin?: string;
}

const Card: React.FC<CardProps> = ({ img }) => {
  return (
    <Container>
      <Img src={'https://avatars.githubusercontent.com/u/19249827?v=4'} />
      <H5>Lukas Arnroth</H5>
      <H6>CEO - Founder</H6>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '110px',
        }}
      >
        <Li>
          <Button Icon={AiFillGithub} />
        </Li>
        <Li>
          <Button Icon={AiFillLinkedin} />
        </Li>
        <Li>
          <Button Icon={AiOutlineMail} />
        </Li>
      </div>
    </Container>
  );
};

export default Card;
