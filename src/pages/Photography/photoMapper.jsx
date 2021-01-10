import React from 'react';
import PhotoWrapper from '../../components/PhotoWrapper';

const photoMapper = (collection) => {
  return collection.map(({ img, desc }) => {
    const props = {
      img,
      desc,
    };
    return <PhotoWrapper exact {...props} />;
  });
};

export default photoMapper;
