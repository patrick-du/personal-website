import React from 'react';
import Fade from 'react-reveal/Fade';
import PostTop from '../../../components/PostTop';
import photoMapper from '../photoMapper';
import FooterLink from '../../../components/FooterLink';
import { calgaryCollection } from '../../../data/photography/photos';

const Calgary = () => {
  return (
    <div className="container-fluid projectContainer mx-auto px-0">
      <Fade big>
        <PostTop subtitle="Summer 2018" title="Calgary, Alberta" />
        <hr className="my-3" />
        {photoMapper(calgaryCollection)}
      </Fade>
      <FooterLink
        path="/photography/toronto"
        title="Up Next"
        subtitle="Toronto"
      />
    </div>
  );
};

export default Calgary;
