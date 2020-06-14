import React from 'react';

import { ThemeProvider, CSSReset, theme, Box } from '@chakra-ui/core';

import { Carousel } from './Components/Carousel';
import { Card } from './Components/Card';

import aerialLandscape from './assets/aerial-view-of-landscape.jpg';
import landscapeRed from './assets/light-landscape-nature-red.jpg';
import seaTurtle from './assets/photo-of-a-turtle-underwater.jpg';
import rockyMountains from './assets/photo-of-rocky-mountain.jpg';
import riceTerraces from './assets/view-of-rice-terraces.jpg';

const images = [
  {
    src: aerialLandscape,
    alt: 'An aerial view of a rocky landscape',
  },
  {
    src: landscapeRed,
    alt: 'A view inside of Antelope Canyon',
  },
  {
    src: seaTurtle,
    alt: 'A sea turtle swimming in the ocean',
  },
  {
    src: rockyMountains,
    alt: 'A view of the Rocky Mountains',
  },
  {
    src: riceTerraces,
    alt: 'A view of a rice terrace',
  },
];

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CSSReset />
      <Box height='100vh'>
        <Carousel>
          {images.map((img, i) => (
            <Card key={i} photo={img} />
          ))}
        </Carousel>
      </Box>
    </ThemeProvider>
  );
}

export default App;
