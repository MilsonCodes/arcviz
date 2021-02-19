import { Container } from '@material-ui/core';
import React from 'react';
import Header from './containers/Header';
import Footer from './containers/Footer';

const App = () => {
  return (
    <Container className="App">
      <Container className="App-header">
        <Header></Header>
        <Container element="span"></Container>
        <Footer></Footer>
      </Container>
    </Container>
  );
}

export default App;
