import React, { Component } from 'react';
import Resume from '../../assets/Resume.pdf';
import Fade from 'react-reveal/Fade';

class Landing extends Component {
  render() {
    return (
      <div className="container-fluid projectContainer px-0">
        <Fade big>
          <p className="landingTitle mt-5">
            HELLO<span style={{ color: '#546de5', fontSize: '120%' }}>.</span>
          </p>
          <p className="landingDesc">
            I'm Patrick, a 3rd year student at the University of Waterloo. I
            enjoy creating delightful web experiences focused on functionality
            and minimalism.
          </p>
          <br />
          <p className="landingDesc">
            Incoming Software Engineer Intern @ ApplyBoard
          </p>
          <a
            href={Resume}
            target="_blank"
            className="linkdec landingNext mt-3 landingResume"
            style={{ color: '#7f8c8d' }}
          >
            No time? View my resume.
          </a>
          <div className="row mx-0 mt-5">
            {/* <a href={Resume} target="_blank" onClick={this.toggleActive} className="linkdec"><i class="fas fa-file-alt icon0"></i></a> */}
            <a
              href="https://github.com/patrick-du"
              target="_blank"
              onClick={this.toggleActive}
            >
              <i class="fab fa-github icon0" />
            </a>
            <a
              href="https://www.linkedin.com/in/patrick-du3/"
              target="_blank"
              onClick={this.toggleActive}
            >
              <i class="fab fa-linkedin-in icon0 " />
            </a>
            <a href="mailto:patrickduu@gmail.com" onClick={this.toggleActive}>
              <i class="fas fa-paper-plane icon0" />
            </a>
          </div>
        </Fade>
      </div>
    );
  }
}
export default Landing;
