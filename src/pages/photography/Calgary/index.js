import React from 'react';
import Fade from 'react-reveal/Fade';
import PhotoWrapper from '../../../components/PhotoWrapper';
import FooterLink from '../../../components/FooterLink';
import PostTop from '../../../components/PostTop';
import { calgaryCollection } from '../../../data/photography/photos';

const Calgary = () => {
  return (
    <div className="container-fluid mx-auto px-0">
      <div className="projectContainer mx-auto px-0">
        <Fade big>
          <PostTop subtitle="Summer 2018" title="Calgary, Alberta" />
          <hr className="my-3" />
          {photos}
        </Fade>
        <FooterLink
          path="/photography/toronto"
          title="Up Next"
          subtitle="Toronto"
        />
      </div>
    </div>
  );
};

const photos = calgaryCollection.map(({ img, desc }) => {
  const props = {
    img,
    desc,
  };
  return <PhotoWrapper exact {...props} />;
});

export default Calgary;
