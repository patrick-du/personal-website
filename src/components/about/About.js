import React, { Component } from "react";
import PageTitle from "../layout/PageTitle";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";
import NextPageBottom from "../layout/NextPageBottom";

class About extends Component {
  render() {
    return (
      <div className="container-fluid projectContainer mx-auto px-0">
        <PageTitle
          pageName="About Me"
          descriptionBottom="A small introduction..."
          picture="bitmoji4"
        />
        <Fade big>
          <p className="general-font mt-3">
            I'm a 3rd year student at the University of Waterloo studying
            Kinesiology with a minor in Computing. <br /> <br />
            Currently, I am a project developer at{" "}
            <a
              className="hvr-underline-from-left purple"
              href="https://uwblueprint.org/"
              target="_blank"
            >
              UW Blueprint
            </a>
            , a group of students dedicated to building and promoting technology
            for social good. Previously, I interned as a software developer at
            Oculys Health Informatics in Waterloo, Ontario for my 2nd coop term.{" "}
            <br /> <br /> In my free time, I enjoy powerlifting, playing
            team-oriented sports such as volleyball and basketball, learning
            guitar, and discovering new music on{" "}
            <a
              className="hvr-underline-from-left-spotify green"
              href="https://open.spotify.com/user/pdupapaya"
              target="_blank"
            >
              Spotify
            </a>
            .
          </p>
          <hr />
          <p className="general-font mt-3">
          I am a very goal-oriented individual and constantly aim for new heights whether it be in my academic development or simply setting new PRs at the gym. For the 2020 winter term, I have three main goals I hope to achieve and I am excited to see where my strong work ethic and perseverance will take me.
          <br/><br/> Academic Goal: Explore machine learning and potential applications in the healthcare industry
          <br/><br/> Fitness Goal: Bench press 275 lbs - Deadlift 520 lbs - Squat 385 lb
          <br/><br/> Career Goal: Land a full stack developer position for my next coop term            
          </p>
          <hr />
          <NextPageBottom
            route="/about/story"
            title="How I Started Coding"
            subtitle="My Story"
          />
          <hr />
          <NextPageBottom
            route="/about/career"
            title="Plans for the Future"
            subtitle="Career Aspirations"
          />
        </Fade>
      </div>
    );
  }
}

export default About;
