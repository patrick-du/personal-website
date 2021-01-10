import React from 'react';
import Fade from 'react-reveal/Fade';
import PageTitle from '../../components/PageTitle';
import FooterLink from '../../components/FooterLink';
import posts from '../../data/about';

const cards = posts.map(({ path, title, subtitle, disabled = false }) => {
  const props = {
    path,
    title,
    subtitle,
    disabled,
  };
  return <FooterLink exact {...props} />;
});

const About = () => {
  return (
    <div className="container-fluid projectContainer mx-auto px-0">
      <PageTitle
        title="About Me"
        subtitle="A small introduction..."
        img="bitmoji4"
      />
      <hr className="my-3" />
      <Fade big>
        <p className="mt-3">
          I&rsquo;m a 3rd year student at the University of Waterloo studying
          Kinesiology with a minor in Computer Science.
          <br />
          <br />
          Currently, I&rsquo;m interning as a software developer at{' '}
          <a
            className="hvr-underline"
            href="https://www.d2l.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            D2L
          </a>
          . In the past, I&rsquo;ve interned at companies such as ApplyBoard,
          Oculys Health Informatics, and FGF Brands.
          <br />
          <br />
          In my spare time, I enjoy powerlifting, playing team-oriented sports
          such as volleyball and basketball, discovering music, and building
          technology for social good at{' '}
          <a
            className="hvr-underline"
            href="https://uwblueprint.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            UW Blueprint
          </a>
          .
        </p>
        {cards}
      </Fade>
    </div>
  );
};

export default About;
