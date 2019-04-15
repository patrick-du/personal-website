import React from 'react';
import { Link } from 'react-router-dom';
import PostTop from '../layout/PostTop';
import BorderPic from './BorderPic'

const Huddle = () => {
    return (
        <div className="container-fluid mx-auto px-0">
            <BorderPic imgPath="huddleB.png" />

            <div className="projectContainer mx-auto px-0">


                <PostTop subtitle="Side Project" title="Huddle" previous="/projects/fgfbrands" next="/projects/weatherly" />
                <p className="s-font">A modern social media application that connects NFL fans while supporting local venues.</p>
                <p className="s-font">The primary functionalities of Huddle are to allow fans to make picks, bet, and watch live games being streamed at local venues promoted by Huddle.</p>
                <p className="s-font">As a team, we recognized that professional sports is an enormous product that can connect individuals regardless of age, gender, or race. We wanted to utilize the product of sports by coming up with a way to quantify its fan-fueled competitive aspect while selling it for what it really is, a social excitement.</p>
                <p className="s-font">Our brainstorming initially began with the concept of simply bringing fans together. However, we soon recognized that they don’t prioritize where they watch games, only who. This led us to the idea of promoting local venues. This allows them to gain more customers and profit while also helping us achieve our goal of connecting fans. To provide a competitive aspect to the app, we implemented a user rating system based on the pick accuracy. It inclines users to continue to use Huddle in order to broadcast their ability to correctly make picks. </p> 

                <p className="s-font">This app was designed and developed at <a href="https://devpost.com/software/huddle-3bi47k" target="_blank" className="hvr-underline-from-left purple">DeltaHacks V</a>. Our team decided to continue forward with this project as we saw potential in the complete app. </p>
                <a href="https://github.com/patrick-du/Personal-Website-v2" target="_blank"><button type="button" class="btn s-font hvr-bounce-to-right btnBorder">View on Github</button></a>
                <hr />
                <Link to="/projects/weatherly" className="linkdec">
                    <div className="s-font med" style={{ fontWeight: '600', fontSize: '18px' }}> Up Next
                            <i class="fas fa-arrow-right" style={{ fontSize: '18px', float: "right" }} />
                        <p style={{ fontWeight: '400', fontSize: '16px', color: '#7f8c8d' }}>Weatherly</p>
                    </div>
                </Link>
            </div>

        </div>
    )

}

const styles = {

}

export default Huddle;