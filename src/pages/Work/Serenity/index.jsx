import React from 'react';
import Fade from 'react-reveal/Fade';
import PostTop from '../../../components/PostTop';
import PhotoWrapper from '../../../components/PhotoWrapper';
import FooterLink from '../../../components/FooterLink';
import WorkImage from '../../../components/WorkImage';

const Serenity = () => {
  return (
    <div className="container-fluid mx-auto px-0">
      <WorkImage photo="serenityB" />
      <div className="projectContainer mx-auto px-0">
        <Fade big>
          <PostTop subtitle="Side Project" title="Serenity" />
          <hr className="my-3" />
          <p>
            Serenity is a social wellness web platform that assess mental
            well-being through mood tracking and data visualization patterns.
          </p>
          <p>
            Users keep track of their mood through the use of a daily journal
            with simple prompts such as levels of stress, depression, anxiety
            and whether or not they exercised that day.
          </p>
          <PhotoWrapper
            img="serenityC.gif"
            desc="Journal View, Journal Creation, Journal Deletion"
          />
          <p>
            Users can also utilize popular diagnostic tools such as the Patient
            Health Questionnaire (PHQ-9) and General Anxiety Disorder 7 (GAD-7)
            for mental health disorders. These are used by health care
            professionals to objectively determine the severity of initial
            symptoms as well as monitor symptom changes and treatment effects
            over time.{' '}
          </p>
          <PhotoWrapper
            img="serenityD.gif"
            desc="Assessment Methods and Submission History"
          />
          <p>
            Rather than encouraging exercise through quantitative measures such
            as reps, sets, and weight, Serenity aims to make users aware of the
            correlation between even modest amounts of exercise and mental
            health improvements. In doing so, users will be more likely to
            utilize physical activity as an intervention when experiencing
            negative feelings. Ideally, this will improve their physical and
            mental wellbeing.
          </p>
          <PhotoWrapper img="serenityE.png" desc="Statistics and Trends" />
          <p>
            This app was developed with React, Node (Express), and MongoDB. View
            the{' '}
            <a
              href="https://github.com/patrick-du/serenity"
              target="_blank"
              rel="noopener noreferrer"
              className="hvr-underline blue"
            >
              web app
            </a>{' '}
            and{' '}
            <a
              href="https://github.com/patrick-du/serenity-api"
              target="_blank"
              rel="noopener noreferrer"
              className="hvr-underline blue"
            >
              API
            </a>{' '}
            on Github.
          </p>
        </Fade>

        <FooterLink
          path="/work/authentication"
          title="Up Next"
          subtitle="Authentication Boilerplates"
        />
      </div>
    </div>
  );
};

export default Serenity;
