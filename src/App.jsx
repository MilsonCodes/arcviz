import { Container } from '@material-ui/core';
import React from 'react';
import Header from './containers/Header'

const App = () => {
  return (
    <Container className="App">
      <Container className="App-header">
        <Header></Header>
      </Container>
    </Container>
  );
}

export default App;
