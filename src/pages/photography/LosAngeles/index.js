import React from 'react';
import Fade from 'react-reveal/Fade';
import PhotoWrapper from '../../../components/PhotoWrapper';
import FooterLink from '../../../components/FooterLink';
import PostTop from '../../../components/PostTop';
import { losAngelesCollection } from '../../../data/photography/photos';

const LosAngeles = () => {
  return (
    <div className="container-fluid mx-auto px-0">
      <div className="projectContainer mx-auto px-0">
        <Fade big>
          <PostTop subtitle="Summer 2019" title="Los Angeles, California" />
          <hr className="my-3" />
          {photos}
        </Fade>
        <FooterLink
          path="/photography/banff"
          title="Up Next"
          subtitle="Banff National Park"
        />
      </div>
    </div>
  );
};

const photos = losAngelesCollection.map(({ img, desc }) => {
  const props = {
    img,
    desc,
  };
  return <PhotoWrapper exact {...props} />;
});

export default LosAngeles;
