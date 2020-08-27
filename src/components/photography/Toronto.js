import React from 'react';
import Fade from 'react-reveal/Fade';
import PhotoWrapper from '../layout/PhotoWrapper';
import FooterLink from '../layout/FooterLink';
import PostTop from '../layout/PostTop';
import { torontoCollection } from '../../data/photography/photos';

const Toronto = () => {
  return (
    <div className="container-fluid mx-auto px-0">
      <div className="projectContainer mx-auto px-0">
        <Fade big>
          <PostTop subtitle="Summer 2018" title="Toronto, Ontario" />
          <hr className="my-3" />
          {photos}
        </Fade>

        <hr />

        <FooterLink
          path="/photography/losangeles"
          title="Up Next"
          subtitle="Los Angeles"
        />
      </div>
    </div>
  );
};

const photos = torontoCollection.map(({ path, desc }) => {
  const props = {
    path,
    desc,
  };
  return <PhotoWrapper exact {...props} />;
});

export default Toronto;
