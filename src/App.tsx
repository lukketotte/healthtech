import React, { Fragment } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './constants/theme';
import { GlobalStyles } from './constants/global';
import Body from './components/Body';

function App() {
  return (
    <Fragment>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <div className='App'>
          <Body />
        </div>
      </ThemeProvider>
    </Fragment>
  );
}

export default App;
