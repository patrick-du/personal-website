import React from 'react';
import PageTitle from '../layout/PageTitle';
import FooterLink from '../layout/FooterLink';
import photography from '../../data/photography';

const Photography = () => {
  return (
    <div className="container-fluid projectContainer mx-auto px-0">
      <PageTitle
        title="Collections"
        subtitle="Sometimes I take photos"
        img="bitmoji5"
      />
      {cards}
    </div>
  );
};

const cards = photography.map(({ path, title, subtitle }) => {
  const props = {
    path,
    title,
    subtitle,
  };
  return <FooterLink {...props} />;
});

export default Photography;
