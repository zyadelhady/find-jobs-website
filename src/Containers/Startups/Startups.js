import React from 'react';
import classes from './Startups.module.scss';
import { StartupsHeader } from '../../Components/StartupsHeader/StartupsHeader';
import { StartupsCard } from '../../Components/StartupsCard/StartupsCard';
import Container from '../../hoc/Container/Container';

export const Startups = () => {
  return (
    <div className={classes.StartupsSection}>
      <Container>
        <div className={classes.Startups}>
          <div className={classes.StartupsHeader}>
            <StartupsHeader />
          </div>
          <div className={classes.StartupsCards}>
            <StartupsCard />
            <StartupsCard color={true} />
            <StartupsCard />
            <StartupsCard />
          </div>
        </div>
      </Container>
    </div>
  );
};
