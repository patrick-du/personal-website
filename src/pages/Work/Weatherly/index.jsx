import React from 'react';
import Fade from 'react-reveal/Fade';
import PostTop from '../../../components/PostTop';
import PhotoWrapper from '../../../components/PhotoWrapper';
import FooterLink from '../../../components/FooterLink';
import WorkImage from '../../../components/WorkImage';
import HyperLink from '../../../components/HyperLink';

const Weatherly = () => {
  return (
    <div className="container-fluid px-0">
      <WorkImage photo="weatherlyB" />
      <div className="projectContainer mx-auto px-0">
        <Fade big>
          <PostTop subtitle="Side Project" title="Weatherly" />
          <hr className="my-3" />
          <p>
            Weatherly is a weekly forecast progressive web app that includes
            features such as usage offline and push notifications. It fetches
            data from{' '}
            <HyperLink link="https://darksky.net" text="DarkSky API" /> which
            provides access to daily forecasts for the coming week.
          </p>
          <PhotoWrapper img="weatherly1.png" desc="Desktop Version" />
          <p>
            This project was created soon after I finished a JavaScript course
            to practice HTTP request methods and DOM manipulation. Seeing that
            progressive web apps were on the rise, I decided to implement it
            into this application.
          </p>
          <p>
            For those unfamiliar,{' '}
            <HyperLink
              link="https://developers.google.com/web/progressive-web-apps/"
              text="progressive web apps"
            />{' '}
            (PWAs) are a new class of web application that provide native app
            experiences using a browser. It utilizes modern web features such as
            push notifications and cache. Additionally, there is a web app
            install prompt making it easy for users to install the PWA on their
            mobile or desktop device.
          </p>
          <p>
            It consists of three main requirements:
            <ul>
              <li>
                HTTPS: to be a PWA, the web app must be served over a secure
                network
              </li>
              <li>
                Web App Manifest: a JSON file that gives info about the web app
                including the name, icons, orientation, display, and more{' '}
              </li>
              <li>
                Registered Service Worker: a JS script with event-driven workers
                that intercept network requests and cache information
                asynchronously to load data for offline use{' '}
              </li>
            </ul>
          </p>
          <PhotoWrapper
            img="weatherly2.png"
            desc="Mobile Version: Install Prompt, Loading Data, Native App Feel"
          />
          <p>
            Despite facing an abundance of issues whether it be with plain
            JavaScript or registering Service Workers, I am glad that I stuck
            through with the project as it was a rewarding experience.
          </p>
          <p>
            This app was developed with HTML, CSS, and JavaScript. View the full
            project on{' '}
            <HyperLink
              link="https://github.com/patrick-du/patrick-du.github.io"
              text="Github"
            />{' '}
            or{' '}
            <HyperLink
              link="https://patrickdu-weatherly.herokuapp.com"
              text="try it yourself"
            />
            .
          </p>
        </Fade>
        <FooterLink
          path="/work/uwblueprint"
          title="Up Next"
          subtitle="UW Blueprint"
        />
      </div>
    </div>
  );
};

export default Weatherly;
