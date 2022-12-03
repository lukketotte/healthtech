import React, { useRef } from 'react';
import styled from 'styled-components';
import { Header, StyledLink } from './Styled';
import Card from './team/Card';
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
          <StyledLink onClick={() => scrollTo(whatRef)}>Vad vi gör</StyledLink>
          <StyledLink onClick={() => scrollTo(whyRef)}>Om oss</StyledLink>
          <StyledLink onClick={() => scrollTo(tumlyRef)}>Tumly</StyledLink>
          <StyledLink onClick={() => scrollTo(aboutRef)}>
            Vilka är vi
          </StyledLink>
        </Links>
      </Header>
      <BodyDiv>
        <Container ref={whatRef} id='home'>
          <h1>Vad vi gör</h1>
          KFHT har utvecklat en app som hjälper vem som helst att få bättre
          insikt i hur sin mage fungerar och vad det är som påverkar den. Med
          hjälp av intelligent AI kan vi hjälpa våra användare att hitta
          kopplingar mellan kost, livsstil och magens välmående. Vår app kan
          också användas som underlag för att dietister eller läkare ska kunna
          få en överblick av viktiga aspekter kring användarnas maghälsa.
        </Container>
        <Container ref={whyRef} id='about'>
          <h1>Om oss</h1>
          Känner du någon som har problem med magen ibland men som inte vet inte
          exakt vad i kosten och livsstilen som orsakar de problemen? Det här
          var en fråga som vi grundare och våra bekanta kände att sjukvården
          ofta inte kan svara på. Därför ville vi med vår breda kunskap inom
          statistik och artificiell intelligens utveckla smarta verktyg som kan
          berätta för människor vilka samband som finns mellan deras beteende
          och maghälsa. Ur denna idé skapade vi Key Frame Healthtech. Med stöd
          från djupgående marknadsundersökningar med läkare och dietister kan
          vår app samla in information som ger relevant återkoppling kring
          användarnas maghälsa och presenterar denna på ett lättförståeligt
          sätt.
        </Container>
        <Container ref={tumlyRef} id='tumly'>
          <h1>tumly</h1>
          Har du ibland, eller t.o.m. ofta problem med din mage och skulle vilja
          förstå den bättre? Med Tumly får du ett intelligent och praktiskt
          verktyg som kan hjälpa dig se samband med din livsstil och din
          maghälsa. Mer information hittar du på www.tumly.se.
        </Container>
        <Container ref={aboutRef} id='aboutus'>
          <h1>Vilka är vi</h1>
          Gemensamt för grundarna är att vi studerat vid Uppsala universitet.
          Tillsammans har vi flera examen inom statistik, ekonomi,
          civilingenjörsprogram och en pågående doktorsavhandling inom statistik
          och tillämpning av artificiell intelligens. Vår tekniska kompetens
          tillsammans med personliga erfarenheter och kontakter ger oss goda
          förutsättningar för att utveckla verktyg som erbjuder våra användare
          en helt ny typ av produkt och upplevelse.
          <Team />
        </Container>
      </BodyDiv>
    </>
  );
};

export default Body;
