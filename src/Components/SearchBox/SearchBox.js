import React from 'react';
import classes from './SearchBox.module.scss';
import { HeaderText } from '../HeaderText/HeaderText';
import { InputBar } from '../InputBar/InputBar';
import { SearchInput } from '../SearchInput/SearchInput';
import { Button } from '../Button/Button';

export const SearchBox = () => {
  return (
    <div className={classes.SearchBox}>
      <div className={classes.SearchBoxHeading}>
        <HeaderText
          label="You are now seeing jobs from Denmark"
          size="5rem"
          color="#fff"
        />
      </div>
      <div className={classes.SearchBoxSearch}>
        <SearchInput bgColor="#464048" />
        <Button label="Search" class={classes.SearchBoxSearchButton} />
      </div>
    </div>
  );
};
