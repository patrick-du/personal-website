import React from 'react';
import Fade from 'react-reveal/Fade';
import BorderPic from '../layout/BorderPic';
import NextPageBottom from '../layout/NextPageBottom';
import PostTop from '../layout/PostTop';
import { calgaryCollection } from '../../data/photography/photos';

const Calgary = () => {
  return (
    <div className="container-fluid mx-auto px-0">
      <div className="projectContainer mx-auto px-0">
        <Fade big>
          <PostTop subtitle="Summer 2018" title="Calgary, Alberta" />
          <hr className="my-3" />
          {photos}
        </Fade>
        <hr />
        <NextPageBottom
          route="/photography/toronto"
          title="Up Next"
          subtitle="Toronto"
        />
      </div>
    </div>
  );
};

const photos = calgaryCollection.map(({ imgPath, picDesc }) => {
  const props = {
    imgPath,
    picDesc,
  };
  return <BorderPic exact {...props} />;
});

export default Calgary;
