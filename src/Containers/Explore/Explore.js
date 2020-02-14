import React from 'react';
import classes from './Explore.module.scss';
import { ExploreHeader } from '../../Components/ExploreHeader/ExploreHeader';
import Container from '../../hoc/Container/Container';
import { ExploreSlider } from '../../Components/Slider/Slider';
export const Explore = () => {
  return (
    <div className={classes.Explore}>
      <Container>
        <ExploreHeader />
        <ExploreSlider />
      </Container>
    </div>
  );
};
