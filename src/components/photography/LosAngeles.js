import React from 'react';
import Fade from 'react-reveal/Fade';
import PhotoWrapper from '../layout/PhotoWrapper';
import FooterLink from '../layout/FooterLink';
import PostTop from '../layout/PostTop';
import { losAngelesCollection } from '../../data/photography/photos';

const LosAngeles = () => {
  return (
    <div className="container-fluid mx-auto px-0">
      <div className="projectContainer mx-auto px-0">
        <Fade big>
          <PostTop subtitle="Summer 2019" title="Los Angeles, California" />
          <hr className="my-3" />
          {photos}
        </Fade>
        <hr />

        <FooterLink
          path="/photography/banff"
          title="Up Next"
          subtitle="Banff National Park"
        />
      </div>
    </div>
  );
};

const photos = losAngelesCollection.map(({ path, desc }) => {
  const props = {
    path,
    desc,
  };
  return <PhotoWrapper exact {...props} />;
});

export default LosAngeles;
