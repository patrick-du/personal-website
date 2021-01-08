import React, { Component } from 'react';
import PostTop from '../../../components/PostTop';
import Fade from 'react-reveal/Fade';
import PhotoWrapper from '../../../components/PhotoWrapper';
import FooterLink from '../../../components/FooterLink';
import { StyledProjectImage } from '../../../components/styles';

const Huddle = () => {
  return (
    <div className="container-fluid mx-auto px-0">
      <StyledProjectImage src={require(`../../../assets/huddleB-opt.png`)} />
      <div className="projectContainer mx-auto px-0">
        <Fade big>
          <PostTop subtitle="Side Project" title="Huddle" />
          <hr className="my-3" />
          <p>
            A modern social media application that connects NFL fans while
            supporting local venues.
          </p>
          <p>
            The primary functionalities of Huddle are to allow fans to make
            picks, bet, and watch live games being streamed at local venues
            promoted by Huddle.
          </p>
          <p>
            As a team, we recognized that professional sports is an enormous
            product that can connect individuals regardless of age, gender, or
            race. We wanted to utilize the product of sports by coming up with a
            way to quantify its fan-fueled competitive aspect while selling it
            for what it really is, a social excitement.
          </p>
          <p>
            Our brainstorming initially began with the concept of simply
            bringing fans together. However, we soon recognized that fans don’t
            prioritize where they watch games, only who they watch with. This
            led us to the idea of promoting local venues, providing them with an
            opportunity to gain more customers while also helping us achieve our
            goal of connecting fans.{' '}
          </p>
          <p>
            To provide a competitive aspect to the app, we implemented a user
            rating system based on their pick accuracy. Thus, inclining users to
            continue to use Huddle in order to broadcast their ability to
            correctly make picks.{' '}
          </p>
          <PhotoWrapper
            img="Huddle1.png"
            desc="Launch Screen, Game Selection, Venue Selection"
          />

          <p>
            This app was developed with React Native, Java (Spring), Maven, and
            MySQL. View the full project on{' '}
            <a
              href="https://github.com/patrick-du/Huddle"
              target="_blank"
              className="hvr-underline blue"
            >
              Github
            </a>
            .
          </p>
        </Fade>

        <FooterLink
          path="/work/weatherly"
          title="Up Next"
          subtitle="Weatherly"
        />
      </div>
    </div>
  );
};

export default Huddle;
