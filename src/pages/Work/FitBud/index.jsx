import React from 'react';
import Fade from 'react-reveal/Fade';
import PostTop from '../../../components/PostTop';
import PhotoWrapper from '../../../components/PhotoWrapper';
import FooterLink from '../../../components/FooterLink';
import WorkImage from '../../../components/WorkImage';

const FitBud = () => {
  return (
    <div className="container-fluid  mx-auto px-0">
      <WorkImage photo="fitbudB-opt" />
      <div className="projectContainer mx-auto px-0">
        <Fade big>
          <PostTop subtitle="uOttaHack 2019" title="Fitbud" />
          <hr className="my-3" />
          <p>
            Fitbud is an all-in-one fitness app that provides a solution to
            common issues experienced by gym-goers of every skill level.
          </p>
          <p>
            Some issues my team tackled included finding a gym partner, tracking
            progress (reps, sets, exercise), and even asking for advice at the
            gym. This app provides all the steps from planning your next visit
            to reflecting on your last workout onto the same streamlined
            platform.
          </p>
          <PhotoWrapper
            img="FitBud2.png"
            desc="Home Screen: User Info, Newsfeed, Sidebar Navigation"
          />
          <p>
            We incorporated the friend finding feature for all members of the
            gym with the main purpose being to create a friendly and safe
            environment for all gym-goers. This allows for members to make a new
            friend and feel more comfortable as a beginner. At the same time,
            for the advanced lifters, it assists them in finding other
            experienced lifters with similar training styles. The possibilities
            for applications of this feature are endless.
          </p>
          <PhotoWrapper img="FitBud4.png" desc="Discover Friends Screen" />
          <p>
            Exercise tracking is an extremely important element to success at
            the gym. Through tracking one's reps, sets, and weight, users can
            easily view their progression and take proper measures to overcome
            future plateaus. Our app provides users with the ability to create
            their own workout routine or use premade training templates.
          </p>
          <PhotoWrapper
            img="FitBud5.png"
            desc="Workout Screen: Exercise Log and Spotify Music Player"
          />
          <p>
            Lastly, we developed a built-in music player connected to the user's
            Spotify account in order to eliminate the need to switch between
            your workout routine, music, and even social media notifications.
            The main purpose was to streamline everything the user would need
            during their training session onto one platform.
          </p>
          <p>
            This app was developed with React and Node (Express). View the full
            project on{' '}
            <a
              href="https://github.com/patrick-du/FitBud"
              target="_blank"
              rel="noopener noreferrer"
              className="hvr-underline blue"
            >
              Github
            </a>
            .
          </p>
          <hr />
        </Fade>
        <FooterLink
          path="/work/oculyshealthinformatics"
          title="Up Next"
          subtitle="Oculys Health Informatics"
        />
      </div>
    </div>
  );
};

export default FitBud;
