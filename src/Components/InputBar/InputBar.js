import React from 'react';
import classes from './InputBar.module.scss';
import logo1 from '../../assets/danske_bank-1.png';
import { SearchInput } from '../SearchInput/SearchInput';
import { Select } from '../Select/Select';
import { Button } from '../Button/Button';

export const InputBar = () => {
  return (
    <div className={classes.InputBar}>
      <div className={classes.InputBarLogos}>
        <img src={logo1} alt="logo" />
        <img src={logo1} alt="logo" />
      </div>
      <div className={classes.InputBarSearch}>
        <SearchInput bgColor="#fff" />
        <Select />
        <div>
          <Button class={classes.InputBarSearchButton} label="Search" />
        </div>
      </div>
    </div>
  );
};
