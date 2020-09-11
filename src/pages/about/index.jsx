import React from 'react';
import PageTitle from '../../components/PageTitle';
import FooterLink from '../../components/FooterLink';
import Fade from 'react-reveal/Fade';
import posts from '../../data/about';

const About = () => {
  return (
    <div className="container-fluid projectContainer mx-auto px-0">
      <PageTitle
        title="About Me"
        subtitle="A small introduction..."
        img="bitmoji4"
      />
      <Fade big>
        <p className="general-font mt-3">
          I'm a 3rd year student at the University of Waterloo studying
          Kinesiology with a minor in Computing. <br /> <br />
          Currently, I am a project developer on{' '}
          <a
            className="hvr-underline"
            href="https://uwblueprint.org/"
            target="_blank"
          >
            UW Blueprint
          </a>
          , a group of students dedicated to building and promoting technology
          for social good. <br /> <br /> Most recently, I interned as a Software
          Engineer at{' '}
          <a
            className="hvr-underline"
            href="https://www.applyboard.com"
            target="_blank"
          >
            ApplyBoard
          </a>{' '}
          in Kitchener, Ontario. In the past, I've interned at companies such as
          Oculys Health Informatics and FGF Brands.
          <br /> <br /> In my free time, I enjoy powerlifting, playing
          team-oriented sports such as volleyball and basketball, learning
          guitar, and discovering new music on Spotify.
        </p>
        {cards}
      </Fade>
    </div>
  );
};

const cards = posts.map(({ path, title, subtitle }) => {
  const props = {
    path,
    title,
    subtitle,
  };
  return <FooterLink exact {...props} />;
});

export default About;
