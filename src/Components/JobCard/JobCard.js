import React from 'react';
import classes from './JobCard.module.scss';
import trueCaller from '../../assets/yt_icon_rgb.png';
import { GoLocation } from 'react-icons/go';
import { AiOutlineClockCircle } from 'react-icons/ai';

export const JobCard = props => {
  return (
    <div className={classes.JobCard}>
      <div className={classes.JobCardHeader}>
        <h2>{props.label}</h2>
        <div className={classes.JobCardHeaderTextSmall}>
          <div className={classes.JobCardHeaderTextSmallLocation}>
            <GoLocation />
            <p>copenhagen</p>
          </div>
          <div className={classes.JobCardHeaderTextSmallTime}>
            <AiOutlineClockCircle />
            <p>full time</p>
          </div>
        </div>
      </div>
      <div className={classes.Border}></div>
      <div className={classes.JobCardLogo}>
        <div className={classes.JobCardLogoLogo}>
          <img src={trueCaller} alt="logo" />
          <p>youtube</p>
        </div>
        <p
          style={{
            color: '#b6b3b3',
            fontSize: '1.4rem'
          }}
        >
          5 days ago
        </p>
      </div>
    </div>
  );
};
