import React from 'react';
import classes from './SearchInput.module.scss';
import { FiSearch } from 'react-icons/fi';
export const SearchInput = props => {
  return (
    <div
      style={{ backgroundColor: props.bgColor }}
      className={classes.SearchInput}
    >
      <FiSearch className={classes.SearchInputIcon} />
      <input
        style={{ backgroundColor: props.bgColor }}
        className={classes.SearchInputInput}
        type="text"
        placeholder="job title or keyword"
      />
    </div>
  );
};
