import styled from 'styled-components';

export const StyledLink = styled.a`
  background-image: -webkit-linear-gradient(left, whitesmoke, whitesmoke);
  -webkit-background-clip: text;
  background-clip: text;
  font-weight: 500;
  color: whitesmoke;
  -webkit-text-fill-color: transparent;
  position: relative;
  padding-bottom: 2px;
  margin-left: 10px;
  &&:after {
    content: '';
    display: block;
    height: 1px;
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    background-image: -webkit-linear-gradient(left, whitesmoke, whitesmoke);
    visibility: hidden;
    -webkit-transform: scaleX(0);
    transform: scaleX(0);
    -webkit-transition: all 0.3s ease-in-out 0s;
    transition: all 0.3s ease-in-out 0s;
  }
  &&:hover:after {
    visibility: visible;
    -webkit-transform: scaleX(1);
    transform: scaleX(1);
  }
`;

export const Header = styled.header`
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100vw;
  height: 200px;
  background: linear-gradient(260deg, #2cc59e, #030889);
  animation: gradient 50s ease infinite;
  border-bottom-left-radius: 50% 10%;
  border-bottom-right-radius: 50% 10%;
  background-size: 400% 400%;

  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;
