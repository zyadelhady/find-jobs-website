import React from 'react';
import classes from './FindJob.module.scss';
import { FindJobHeader } from '../../Components/FindJobHeader/FindJobHeader';
import Container from '../../hoc/Container/Container';
import { JobCard } from '../../Components/JobCard/JobCard';

export const FindJob = () => {
  return (
    <div className={classes.FindJobSection}>
      <Container>
        <div className={classes.FindJob}>
          <div className={classes.FindJobHeader}>
            <FindJobHeader />
          </div>
          <div className={classes.FindJobCards}>
            <JobCard label="product manager - mobile apps team" />
            <JobCard label="junior analytical person with social skills" />
            <JobCard label="marketing intern for eciting new social app" />
            <JobCard label="quaity assurance devolper" />
            <JobCard label="influencer Agent" />
            <JobCard label="gaphic designer - brand and web design" />
          </div>
        </div>
      </Container>
    </div>
  );
};
