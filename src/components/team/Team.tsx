import React from 'react';
import styled from 'styled-components';
import Card from './Card';
import { TeamList } from './Teamlist';

const Container = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 2rem;
  padding: 10px 0px 20px 0px;
`;

const Team = () => {
  return (
    <Container>
      {TeamList.map((ind, idx) => (
        <Card
          img={ind.img}
          name={ind.name}
          email={ind.email}
          position={ind.position}
          github={ind.github}
          linkedin={ind.linkedin}
          key={idx}
        />
      ))}
    </Container>
  );
};

export default Team;
