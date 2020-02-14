import React from 'react';
import classes from './Header.module.scss';
import { NavBar } from '../../Components/NavBar/NavBar';
import Container from '../../hoc/Container/Container';
import { Heading } from '../../Components/Heading/Heading';
import { InputBar } from '../../Components/InputBar/InputBar';

export const Header = () => {
  return (
    <header className={classes.TheHeader}>
      <Container>
        <div className={classes.Header}>
          <div className={classes.HeaderNav}>
            <NavBar />
          </div>
          <div className={classes.HeaderHeading}>
            <Heading />
          </div>
          <div className={classes.HeaderInput}>
            <InputBar />
          </div>
        </div>
      </Container>
    </header>
  );
};
