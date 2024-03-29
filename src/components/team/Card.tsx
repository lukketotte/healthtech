import React from 'react';
import styled from 'styled-components';
import Button from './LinkButton';
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from 'react-icons/ai';
import { TeamProps } from './Teamlist';

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

const A = styled.a`
  list-style: none;
  display: inline-block;
  margin: 0px 2px 0px 2px;
`;

const Card: React.FC<TeamProps> = ({ name, img, position, github, linkedin, email }) => {
  return (
    <Container>
      <Img src={img} alt={name} />
      <H5>{name}</H5>
      <H6>{position} - Founder</H6>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          width: '110px',
        }}
      >
        {linkedin && (
          <A href={linkedin}>
            <Button Icon={AiFillLinkedin} />
          </A>
        )}
        <A href={`mailto: ${email}`}>
          <Button Icon={AiOutlineMail} />
        </A>
        {github && (
          <A href={github}>
            <Button Icon={AiFillGithub} />
          </A>
        )}
      </div>
    </Container>
  );
};

export default Card;
