import React from 'react';
import PageTitle from '../layout/PageTitle';
import NextPageBottom from '../layout/NextPageBottom';
import photography from '../../data/photography';

const Photography = () => {
  return (
    <div className="container-fluid projectContainer mx-auto px-0">
      <PageTitle
        pageName="Collections"
        descriptionBottom="Sometimes I take photos"
        picture="bitmoji5"
      />
      {cards}
    </div>
  );
};

const cards = photography.map(({ route, title, subtitle }) => {
  const props = {
    route,
    title,
    subtitle,
  };
  return <NextPageBottom {...props} />;
});

export default Photography;
