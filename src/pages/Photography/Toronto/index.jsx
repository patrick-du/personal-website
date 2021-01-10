import React from 'react';
import Fade from 'react-reveal/Fade';
import PostTop from '../../../components/PostTop';
import photoMapper from '../photoMapper';
import FooterLink from '../../../components/FooterLink';
import { torontoCollection } from '../../../data/photography/photos';

const Toronto = () => {
  return (
    <div className="container-fluid projectContainer mx-auto px-0">
      <Fade big>
        <PostTop subtitle="Summer 2018" title="Toronto, Ontario" />
        <hr className="my-3" />
        {photoMapper(torontoCollection)}
      </Fade>
      <FooterLink
        path="/photography/losangeles"
        title="Up Next"
        subtitle="Los Angeles"
      />
    </div>
  );
};

export default Toronto;
