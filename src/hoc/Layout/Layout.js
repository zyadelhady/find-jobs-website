import React from 'react';
import { Header } from '../../Containers/Header/Header';
import { Explore } from '../../Containers/Explore/Explore';
import { FindJob } from '../../Containers/FindJob/FindJob';
import { Startups } from '../../Containers/Startups/Startups';
import { Footer } from '../../Containers/Footer/Footer';

export const Layout = props => {
  return (
    <div>
      <Header />
      <Explore />
      <FindJob />
      <Startups />
      <Footer />
    </div>
  );
};
