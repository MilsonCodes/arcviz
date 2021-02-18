import { Container, Typography, Box } from '@material-ui/core';
import React from 'react';

const App = () => {
  return (
    <Container className="App">
      <Container className="App-header">
        <Box>
          <Typography variant="h2">ArcViz!</Typography>
          <Typography variant="subtitle1">Interactive, Arcitecture Visulatization Tool</Typography>
        </Box>
      </Container>
    </Container>
  );
}

export default App;
