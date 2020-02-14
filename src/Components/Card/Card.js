import React from 'react';
import classes from './Card.module.scss';

import { HeaderText } from '../HeaderText/HeaderText';

export const Card = props => {
  return (
    <div
      className={classes.Card}
      style={{
        backgroundColor: props.bgColor,
        color: props.color
      }}
    >
      <div className={classes.CardIcon}>{props.icon}</div>
      <div className={classes.CardHeading}>
        <HeaderText label={props.label} size="2.7rem" color="#000" />
      </div>
      <div className={classes.CardText}>
        <p>{props.text}</p>
      </div>
    </div>
  );
};
