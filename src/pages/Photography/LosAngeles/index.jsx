import React from 'react';
import Fade from 'react-reveal/Fade';
import PostTop from '../../../components/PostTop';
import photoMapper from '../photoMapper';
import FooterLink from '../../../components/FooterLink';
import { losAngelesCollection } from '../../../data/photography/photos';

const LosAngeles = () => {
  return (
    <div className="container-fluid projectContainer mx-auto px-0">
      <Fade big>
        <PostTop subtitle="Summer 2019" title="Los Angeles, California" />
        <hr className="my-3" />
        {photoMapper(losAngelesCollection)}
      </Fade>
      <FooterLink
        path="/photography/banff"
        title="Up Next"
        subtitle="Banff National Park"
      />
    </div>
  );
};

export default LosAngeles;
