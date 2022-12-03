import React from 'react';
import styled from 'styled-components';
import Card from './Card';
import { TeamList } from './Teamlist';

const Container = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 2rem;
`;

const Team = () => {
  return (
    <Container>
      {TeamList.map((ind, idx) => (
        <Card img={ind.img} name={ind.name} email={ind.email} position={ind.position} key={idx} />
      ))}
    </Container>
  );
};

export default Team;
