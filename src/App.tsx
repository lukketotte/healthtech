import React, { Fragment } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './constants/theme';
import { GlobalStyles } from './constants/global';
import Header from './components/Header';
import Body from './components/Body';

function App() {
  return (
    <Fragment>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <div className='App'>
          <Header />
          <Body />
        </div>
      </ThemeProvider>
    </Fragment>
  );
}

export default App;
