import React from 'react';
import PostTop from '../../../components/PostTop';
import PhotoWrapper from '../../../components/PhotoWrapper';
import Fade from 'react-reveal/Fade';
import FooterLink from '../../../components/FooterLink';
import { StyledProjectImage } from '../../../components/styles';

const FGFBrands = () => {
  return (
    <div className="container-fluid mx-auto px-0">
      <StyledProjectImage src={require(`../../../assets/fgfB-opt.png`)} />
      <div className="projectContainer mx-auto px-0">
        <Fade big>
          <PostTop subtitle="Work Term" title="FGF Brands" />
          <hr className="my-3" />
          <p className="general-font">
            For my first coop, I spent 4 months working at FGF Brands as an
            "Innovation Driven" Web Developer in the IT department. Despite
            knowing little to nothing about web development, I learned a whole
            lot throughout the term which I'm excited to share.
          </p>
          <p className="general-font">
            Our team utilized the Agile Scrum software development methodology
            combined with an open office environment making it extremely simple
            to seek help, make friends, and collaborate on projects.
          </p>
          <p className="general-font">
            Over the course of the term, I was able to pick up on new languages,
            frameworks, and libraries such as Bootstrap, JavaScript, C#, React,
            React Native, and Node (Express)! Two main projects I worked on
            included performing a proof of concept (POC) for the FGF progressive
            web app and developing a component-based UI library for internal
            tools development.
          </p>
          <PhotoWrapper img="FGF1.png" desc="Before and After" />
          <p className="general-font">
            Working at FGF was a great first coop experience with lots of
            opportunities to grow and nuture my skills as a developer. The
            company highly values one's ability to work in a team and their work
            ethic - two skills I was able to further develop during my time at
            FGF.
          </p>
          <p className="general-font">
            I'm excited for what's to come next and can't wait for my next coop
            term!
          </p>
        </Fade>
        <FooterLink path="/work/serenity" title="Up Next" subtitle="Serenity" />
      </div>
    </div>
  );
};

export default FGFBrands;
