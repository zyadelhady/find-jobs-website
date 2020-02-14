import React from 'react';
import classes from './ExploreHeader.module.scss';
import { HeaderText } from '../HeaderText/HeaderText';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

export const ExploreHeader = () => {
  return (
    <div className={classes.ExploreHeader}>
      <div className={classes.ExploreHeaderHeading}>
        <HeaderText
          label="Explore by category"
          size="6rem"
          width="55%"
          color="#443f44"
        />
      </div>
      <div className={classes.ExploreHeaderDrag}>
        <MdKeyboardArrowLeft />
        <div className={classes.ExploreHeaderDragCircle}>
          <span>Drag</span>
        </div>
        <MdKeyboardArrowRight />
      </div>
    </div>
  );
};
