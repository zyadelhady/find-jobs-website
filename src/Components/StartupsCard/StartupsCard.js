import React from 'react';
import classes from './StartupsCard.module.scss';
import messenger from '../../assets/Messenger_Logo_Color_RGB.png';
import { GoLocation } from 'react-icons/go';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { FiBriefcase } from 'react-icons/fi';
import { HeaderText } from '../HeaderText/HeaderText';

export const StartupsCard = props => {
  return (
    <div className={classes.StartupsCard}>
      <div className={classes.StartupsCardImage}>
        <img src={messenger} alt="messeger" />
      </div>
      <div className={classes.StartupsCardInfo}>
        <div className={classes.StartupsCardInfoLabel}>
          <HeaderText label="Messenger" size="2.5rem" color="#443f44" />
        </div>
        <div className={classes.StartupsCardInfoText}>
          <HeaderText
            label="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            aut quos itaque, fugit accusamus, exercitationem animi sit amet consectetur"
            size="1.4rem"
            color="#322C34"
          />
        </div>
        <div className={classes.StartupsCardInfoIcons}>
          <div className={classes.StartupsCardInfoIconsIcon}>
            <GoLocation />
            <p>Oslo,Norway</p>
          </div>
          <div className={classes.StartupsCardInfoIconsIcon}>
            <AiOutlineClockCircle />
            <p>Full Time</p>
          </div>
          <div className={classes.StartupsCardInfoIconsIcon}>
            <FiBriefcase />
            <p>4 jobs</p>
          </div>
        </div>
      </div>
    </div>
  );
};
