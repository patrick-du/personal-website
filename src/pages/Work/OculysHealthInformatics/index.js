import React from 'react';
import PostTop from '../../../components/PostTop';
import Fade from 'react-reveal/Fade';
import FooterLink from '../../../components/FooterLink';
import { StyledProjectImage } from '../../../components/styles';

const OculysHealthInformatics = () => {
  return (
    <div className="container-fluid mx-auto px-0">
      <StyledProjectImage src={require(`../../../assets/oculysA.png`)} />
      <div className="projectContainer mx-auto px-0">
        <Fade big>
          <PostTop subtitle="Work Term" title="Oculys Health Informatics" />
          <hr className="my-3" />
          <p className="general-font">
            Oculys Health Informatics strives to reduce patient management
            bottlenecks by tapping into the disconnected silos of hospital
            administration and electronic medical record systems providing a
            real-time patient management system for hospitals.
          </p>
          <hr />
          <p className="general-font">
            <b>Role: </b>Software Developer on the Core Engineering team
          </p>
          <p className="general-font">
            <b>Duration: </b>September to December 2019
          </p>
          <p className="general-font">
            <b>Technologies: </b>C#, ASP.NET MVC, Git (Bitbucket), Jira
          </p>
          <p className="general-font">
            <b>Core Contributions</b>
            <ul>
              <li>
                Developed C# console that integrates JIRA issue logs with
                Harvest timesheets automating a weekly 30 minute time-log
                process
              </li>
              <li>
                Automated internal support team tasks using ASP.NET MVC in a
                service-oriented architecture by implementing a location service
                within the client UI eliminating patient flow bottlenecks
              </li>
              <li>
                Refactored 1500+ lines of production C# into real-time patient
                activity tracking dashboards used by 10+ hospitals
              </li>
              <li>
                Implemented unit tests with NUnit to improve test coverage in
                hospital bed availability algorithm
              </li>
            </ul>
          </p>
        </Fade>
        <FooterLink
          path="/work/fgfbrands"
          title="Up Next"
          subtitle="FGF Brands"
        />
      </div>
    </div>
  );
};

export default OculysHealthInformatics;
