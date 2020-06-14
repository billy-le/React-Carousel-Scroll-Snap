import React from 'react';

import { Box, Image } from '@chakra-ui/core';

export function Card(props) {
  return (
    <Box height='100%' width='100vw'>
      <Image src={props.photo.src} alt={props.photo.alt} height='100%' width='100%' loading='lazy' />
    </Box>
  );
}
