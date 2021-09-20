import React, { useRef } from 'react';
import styled from 'styled-components';
import { Header, StyledLink } from './Styled';
import Card from './team/Card';
import Team from './team/Team';

const Container = styled.div`
  max-width: 1000px;
`;

const BodyDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  padding: 5px 20px 5px 20px;
`;

const H1 = styled.h1`
  margin: 0;
  font: 44px;
  color: white;
  text-align: center;
`;

const Links = styled.nav`
  align-items: center;
  color: whitesmoke;
`;

const scrollTo = (ref: React.MutableRefObject<HTMLInputElement | null>) => {
  if (ref && ref.current) {
    ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

const Body = () => {
  let whatRef = useRef<null | HTMLInputElement>(null);
  let aboutRef = useRef<null | HTMLInputElement>(null);
  let whyRef = useRef<null | HTMLInputElement>(null);
  return (
    <>
      <Header>
        <H1>Keyframe Healthtech</H1>
        <Links>
          <StyledLink onClick={() => scrollTo(whatRef)}>What we do</StyledLink>
          <StyledLink onClick={() => scrollTo(whyRef)}>Why we do</StyledLink>
          <StyledLink onClick={() => scrollTo(aboutRef)}>About us</StyledLink>
        </Links>
      </Header>
      <BodyDiv>
        <Container ref={whatRef} id='home'>
          <h1>What we do</h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id,
          repellendus. Totam nihil similique a repellat minus dolor amet quasi.
          Corporis nulla quaerat iste, sed quasi ab dolorem maxime minima animi.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id,
          repellendus. Totam nihil similique a repellat minus dolor amet quasi.
          Corporis nulla quaerat iste, sed quasi ab dolorem maxime minima animi.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id,
          repellendus. Totam nihil similique a repellat minus dolor amet quasi.
          Corporis nulla quaerat iste, sed quasi ab dolorem maxime minima animi.
        </Container>
        <Container ref={whyRef} id='about'>
          <h1>Why we do</h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id,
          repellendus. Totam nihil similique a repellat minus dolor amet quasi.
          Corporis nulla quaerat iste, sed quasi ab dolorem maxime minima animi.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id,
          repellendus. Totam nihil similique a repellat minus dolor amet quasi.
          Corporis nulla quaerat iste, sed quasi ab dolorem maxime minima animi.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id,
          repellendus. Totam nihil similique a repellat minus dolor amet quasi.
          Corporis nulla quaerat iste, sed quasi ab dolorem maxime minima animi.
        </Container>
        <Container ref={aboutRef} id='aboutus'>
          <h1>About us</h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id,
          repellendus. Totam nihil similique a repellat minus dolor amet quasi.
          Corporis nulla quaerat iste, sed quasi ab dolorem maxime minima animi.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id,
          repellendus. Totam nihil similique a repellat minus dolor amet quasi.
          Corporis nulla quaerat iste, sed quasi ab dolorem maxime minima animi.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id,
          repellendus. Totam nihil similique a repellat minus dolor amet quasi.
          Corporis nulla quaerat iste, sed quasi ab dolorem maxime minima animi.
          <Team />
        </Container>
      </BodyDiv>
    </>
  );
};

export default Body;
