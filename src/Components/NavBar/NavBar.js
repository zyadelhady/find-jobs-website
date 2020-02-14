import React from 'react';
import classes from './NavBar.module.scss';
import { NavItem } from '../NavItem/NavItem';
import { Button } from '../Button/Button';
export const NavBar = () => {
  return (
    <div className={classes.NavBar}>
      <div className={classes.NavBarLogo}>
        <p>hub</p>
      </div>
      <div className={classes.NavBarItems}>
        <NavItem label="Find jobs" />
        <NavItem label="Browse startups" />
        <Button label="For startups" class={`${classes.NavBarItemsButton}`} />
        <Button label="Sign in" class={`${classes.NavBarItemsButton}`} />
      </div>
    </div>
  );
};
