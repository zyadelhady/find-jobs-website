import React from 'react';
import classes from './FindJobHeader.module.scss';
import { HeaderText } from '../HeaderText/HeaderText';
import { Button } from '../Button/Button';

export const FindJobHeader = () => {
  return (
    <div className={classes.FindJobHeader}>
      <div className={classes.FindJobHeaderHeading}>
        <p className={classes.FindJobHeaderHeadingText}>1400+ Startup jobs</p>
        <HeaderText
          label="Find a job you love"
          color="#322C34"
          size="5.5rem"
          width="70%"
        />
      </div>
      <div className={classes.FindJobHeaderButton}>
        <Button
          label="Show al jobs"
          class={classes.FindJobHeaderButtonButton}
        />
      </div>
    </div>
  );
};
