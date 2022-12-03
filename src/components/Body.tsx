import React, { useRef } from 'react';
import styled from 'styled-components';
import { Header, StyledLink } from './Styled';
import Team from './team/Team';

const Container = styled.div`
  max-width: 800px;
  line-height: 1.5;
  padding: 10px 0px 10px 0px;
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
  let tumlyRef = useRef<null | HTMLInputElement>(null);
  return (
    <>
      <Header>
        <H1>Keyframe Healthtech</H1>
        <Links>
          <StyledLink onClick={() => scrollTo(whatRef)}>What</StyledLink>
          <StyledLink onClick={() => scrollTo(whyRef)}>Why</StyledLink>
          <StyledLink onClick={() => scrollTo(tumlyRef)}>Tumly</StyledLink>
          <StyledLink onClick={() => scrollTo(aboutRef)}>About us</StyledLink>
        </Links>
      </Header>
      <BodyDiv>
        <Container ref={whatRef} id='home'>
          <h1>What We Do</h1>
          Keyframe Healthtech develops digital tools that assist people in understanding what
          affects their belly and how problems can be avoided. Using machine learning our upcoming
          platform Tumly can help users find connections between their diets, lifestyles and the
          wellbeing of their bellies. Tumly can also be used to give statistical data to dieticians
          and doctors, helping them get a more complete picture of their patients’ health state.
        </Container>
        <Container ref={whyRef} id='about'>
          <h1>Why we do it</h1>
          Do you know anyone who sometimes has tummy troubles but doesn’t know exactly what the
          underlying problem is? This is the question the founders of Keyframe Healthtech felt that
          too many people were asking. At the same time, not enough answers were given from today’s
          healthcare systems, resulting in people having to live with their problems. The founding
          of Keyframe Healthtech sprung from our will to use our wide knowledge in statistics and
          artificial intelligence to help people connect the dots between their lifestyle and how
          their belly reacts.
        </Container>
        <Container ref={tumlyRef} id='tumly'>
          <h1>Tumly</h1>
          What Is Tumly Do you ever feel that your belly bothers you and that you would like to get
          to know it better? With Tumly you get an intelligent and practical tool that can help you
          see connections between your lifestyle and your tummy’s behaviour. Tumly can also compare
          your situation to a huge database of the lifestyles and tummy troubles of other anonymous
          users. By comparing similarities and differences between you and groups of other users,
          Tumly can help you find patterns of behaviour that could be beneficial for you to either
          copy or avoid. Find more information at www.tumly.se
        </Container>
        <Container ref={aboutRef} id='aboutus'>
          <h1> Who we are</h1>
          From studies in Uppsala the founders of Keyframe Healthtech have a variety of bachelor´s
          and master’s degrees in statistics, business, economics, engineering and an ongoing Phd in
          statistics and data science. The different dynamics in our backgrounds and personalities
          have created an atmosphere where we can create innovations that help and benefit a large
          portion of the population.
          <Team />
        </Container>
      </BodyDiv>
    </>
  );
};

export default Body;
