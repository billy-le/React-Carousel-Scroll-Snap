import React, { Children, useEffect, useState } from 'react';

import { Box } from '@chakra-ui/core';
import { CarouselControls } from '../CarouselControls';

import debounce from 'lodash/debounce';

import './Carousel.css';

export function Carousel(props) {
  const [items, setItems] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const items = Children.map(props.children, (child, i) => (
      <Box key={i} className={`Carousel__Item Carousel__Item__${i}`} data-item={i}>
        {child}
      </Box>
    ));

    setItems(items);
  }, [props.children]);

  function scrollItemIntoView(currentItem) {
    const item = document.querySelector(`.Carousel__Item__${currentItem}`);
    if (item) {
      item.scrollIntoView();
    }
  }

  function handleItemClick(index) {
    scrollItemIntoView(index);
  }

  function handleLeftClick() {
    let currentItem = 0;
    if (active === 0) currentItem = props.children.length - 1;
    else currentItem = active - 1;
    scrollItemIntoView(currentItem);
  }

  function handleRightClick() {
    let currentItem = 0;
    if (active !== props.children.length - 1) currentItem = active + 1;
    scrollItemIntoView(currentItem);
  }

  function handleScroll(e) {
    const { scrollLeft, offsetWidth } = e.target;
    const activePosition = Math.floor(scrollLeft / offsetWidth);
    setActive(activePosition);
  }

  const debouncedScrollHandler = debounce(handleScroll, 50);

  return (
    <>
      <Box
        className='Carousel'
        overflowX='auto'
        display='flex'
        flexWrap='nowrap'
        height='100%'
        position='relative'
        onScroll={function (e) {
          e.persist();
          debouncedScrollHandler(e);
        }}
      >
        {items}
      </Box>
      <CarouselControls
        itemCount={props.children.length}
        active={active}
        handleItemClick={handleItemClick}
        handleLeftClick={handleLeftClick}
        handleRightClick={handleRightClick}
      />
    </>
  );
}
