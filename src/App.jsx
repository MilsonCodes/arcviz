import { Container } from '@material-ui/core';
import React from 'react';
import Header from './containers/Header';
import Canvas from './containers/Canvas';
import Footer from './containers/Footer';

let defaultProps = {
  Canvas: {
    title: 'Intel x86'
  }
}

const App = () => {
  return (
    <Container className="App">
        <Header></Header>
        <Canvas {...defaultProps.Canvas}></Canvas>
        <Footer></Footer>
    </Container>
  );
}

export default App;
