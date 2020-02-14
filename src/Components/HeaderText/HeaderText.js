import React from 'react';
import classes from './HeaderText.module.scss';

export const HeaderText = props => {
  return (
    <h5
      style={{
        fontSize: props.size,
        width: props.width,
        color: props.color
      }}
      className={classes.HeaderText}
    >
      {props.label}
    </h5>
  );
};
