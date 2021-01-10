import React from 'react';
import Fade from 'react-reveal/Fade';
import PostTop from '../../../components/PostTop';
import photoMapper from '../photoMapper';
import FooterLink from '../../../components/FooterLink';
import { banffCollection } from '../../../data/photography/photos';

const Banff = () => {
  return (
    <div className="container-fluid projectContainer mx-auto px-0">
      <Fade big>
        <PostTop subtitle="Summer 2018" title="Banff National Park, Alberta" />
        <hr className="my-3" />
      </Fade>
      {photoMapper(banffCollection)}
      <FooterLink
        path="/photography/calgary"
        title="Up Next"
        subtitle="Calgary"
      />
    </div>
  );
};

export default Banff;
