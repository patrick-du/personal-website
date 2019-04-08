import React from 'react';
import { Link } from 'react-router-dom';
import PostTop from '../layout/PostTop';

const Huddle = () => {
    return (
        <div className="container-fluid projectContainer mx-auto px-0">
            <PostTop subtitle="Side Project" title="Huddle" previous="/projects/fgfbrands" next="/projects/weatherly" />
            <p className="s-font" style={styles.body}>A modern football betting mobile app connecting fans while supporting local venues.</p>
            <p className="s-font" style={styles.body}>This app was designed and developed at <a href="https://devpost.com/software/huddle-3bi47k" target="_blank" className="hvr-underline-from-left purple">DeltaHacks V</a>. Our team decided to continue forward with this project as we saw potential in the complete app. </p>
            <a href="https://github.com/patrick-du/Personal-Website-v2" target="_blank"><button type="button" class="btn s-font hvr-bounce-to-right btnBorder">View on Github</button></a>
            <hr />
            <div className="row">
                <div className="col-2">
                    <Link to="/projects/fgfbrands">
                        <i class="fas fa-arrow-left hvr-wobble-horizontal-2" style={{ fontSize: '25px', color: '#2c3e50' }}></i>
                    </Link>
                </div>
                <div className="col"></div>
                <div className="col-2 text-right">
                    <Link to="/projects/weatherly">
                        <i class="fas fa-arrow-right hvr-wobble-horizontal-1" style={{ fontSize: '25px', color: '#2c3e50' }}></i>
                    </Link>
                </div>
            </div>
            <Link to="../../" className="linkdec">
                <p className="s-font text-center text-muted vert-move mt-5 mb-0">Created by Patrick Du 🎈</p>
            </Link>
        </div>
    )

}

const styles = {

}

export default Huddle;