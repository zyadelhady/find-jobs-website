import React, { useState } from 'react';
import classes from './StartupsHeader.module.scss';
import { HeaderText } from '../HeaderText/HeaderText';
import work1 from '../../assets/work-1.jpg';
import work2 from '../../assets/work-2.jpg';
import work3 from '../../assets/w.jpg';
import Container from '../../hoc/Container/Container';
import { Button } from '../Button/Button';

export const StartupsHeader = () => {
  return (
    <Container>
      <div className={classes.StartupsHeader}>
        <div className={classes.StartupsHeaderHeading}>
          <p>5300+ Startups</p>
          <HeaderText
            label="Find your second home"
            color="#322C34"
            size="5rem"
          />
        </div>
        <div className={classes.StartupsHeaderPhotos}>
          <img
            className={`${classes.StartupsHeaderPhotosImage} ${classes.StartupsHeaderPhotosImage1} `}
            src={work1}
            alt="startup"
          />
          <img
            className={`${classes.StartupsHeaderPhotosImage} ${classes.StartupsHeaderPhotosImage2} `}
            src={work2}
            alt="startup"
          />
          <img
            className={`${classes.StartupsHeaderPhotosImage} ${classes.StartupsHeaderPhotosImage3} `}
            src={work3}
            alt="startup"
          />
        </div>
        <div className={classes.StartupsHeaderButton}>
          <Button
            label="Show all Startups"
            class={classes.StartupsHeaderButtonButton}
          />
        </div>
      </div>
    </Container>
  );
};
