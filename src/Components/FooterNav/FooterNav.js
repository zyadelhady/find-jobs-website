import React from 'react';
import classes from './FooterNav.module.scss';
import { NavItem } from '../NavItem/NavItem';

export const FooterNav = () => {
  return (
    <div className={classes.FooterNav}>
      <div className={classes.FooterNavLogo}>
        <p>hub</p>
      </div>
      <div className={classes.FooterNavItems}>
        <NavItem label="About" />
        <NavItem label="Privacy & Legal" />
        <NavItem label="Partners" />
        <NavItem label="Contact" />
      </div>
    </div>
  );
};
