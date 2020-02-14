import React from 'react';
import classes from './Footer.module.scss';
import { SearchBox } from '../../Components/SearchBox/SearchBox';
import Container from '../../hoc/Container/Container';
import { FooterNav } from '../../Components/FooterNav/FooterNav';

export const Footer = () => {
  return (
    <Container>
      <div>
        <SearchBox />
        <FooterNav />
      </div>
    </Container>
  );
};
