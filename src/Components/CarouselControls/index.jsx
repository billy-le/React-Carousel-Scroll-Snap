import React from 'react';

import { Box, Button, IconButton, theme } from '@chakra-ui/core';

export function CarouselControls(props) {
  return (
    <Box
      display='flex'
      alignItems='center'
      justifyContent='center'
      position='absolute'
      transform='translateX(-50%)'
      zIndex='1'
      bottom={0}
      left='50%'
      pb='4rem'
    >
      <IconButton
        icon='arrow-left'
        rounded='full'
        mr={2}
        aria-label='Go to previous item'
        title='Go to previous item'
        _hover={{
          bg: theme.colors.gray[500],
        }}
        _active={{
          bg: theme.colors.gray[700],
          color: theme.colors.white,
          transform: 'translateX(-10%)',
        }}
        onClick={props.handleLeftClick}
      />
      {Array(props.itemCount)
        .fill(0)
        .map((_, index) => (
          <Button
            key={index}
            style={{
              backgroundColor: index === props.active ? theme.colors.blue[500] : null,
              color: index === props.active ? theme.colors.white : null,
            }}
            rounded='full'
            mr={2}
            aria-label={`Go to item ${index + 1}`}
            title={`Go to item ${index + 1}`}
            transition='transform .25s ease-in-out'
            _hover={{
              bg: theme.colors.gray[500],
            }}
            _active={{
              bg: theme.colors.gray[700],
              color: theme.colors.white,
              transform: 'translateY(10%)',
            }}
            onClick={() => props.handleItemClick(index)}
          >
            {index + 1}
          </Button>
        ))}
      <IconButton
        icon='arrow-right'
        rounded='full'
        aria-label='Go to next item'
        title='Go to next item'
        _hover={{
          bg: theme.colors.gray[500],
        }}
        _active={{
          bg: theme.colors.gray[700],
          color: theme.colors.white,
          transform: 'translateX(10%)',
        }}
        onClick={props.handleRightClick}
      />
    </Box>
  );
}
