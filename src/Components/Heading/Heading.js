import React from 'react';
import classes from './Heading.module.scss';
import headingImage from '../../assets/NicePng_virtual-reality-png_1912196.png';
import { HeaderText } from '../HeaderText/HeaderText';
export const Heading = () => {
  return (
    <div className={classes.Heading}>
      <div className={classes.HeadingText}>
        <HeaderText
          label="Find the most exciting startup jobs"
          size="9rem"
          width="98%"
          color="#443f44"
        />
      </div>
      <div className={classes.HeadingImage}>
        <img src={headingImage} alt="headingImage" />
        {/* <div className={classes.HeadingImageBorderBottom}></div> */}
      </div>
    </div>
  );
};
