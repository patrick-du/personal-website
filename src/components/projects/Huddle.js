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
                <p className="s-font" style={styles.body}>A modern football betting mobile app connecting fans while supporting local venues.</p>
                <p className="s-font" style={styles.body}>This app was designed and developed at <a href="https://devpost.com/software/huddle-3bi47k" target="_blank" className="hvr-underline-from-left purple">DeltaHacks V</a>. Our team decided to continue forward with this project as we saw potential in the complete app. </p>
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