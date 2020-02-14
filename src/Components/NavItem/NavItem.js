import React from 'react';
import classes from './NavItem.module.scss';

export const NavItem = props => {
  return <p className={classes.NavItem}>{props.label}</p>;
};
