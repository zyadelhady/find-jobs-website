import React from 'react';
import classes from './Select.module.scss';
import danImg from '../../assets/dane-flag.svg';
import { MdKeyboardArrowDown } from 'react-icons/md';

export const Select = () => {
  return (
    <div className={classes.Select}>
      <div className={classes.SelectText}>
        <img src={danImg} alt="" />
        <p>Denmark</p>
      </div>
      <div className={classes.SelectArrow}>
        <MdKeyboardArrowDown />
      </div>
    </div>
  );
};
