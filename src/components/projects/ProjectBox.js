import React from 'react';
import { Link } from 'react-router-dom';

const ProjectBox = (props) => {

    const styles = {
        row: {
            width: '100%',
            borderRadius: 0,
            padding: 0
        },

        title: {
            fontSize: '2rem',
        },

        body: {
            fontSize: '15px',
        },

        img: {
            width: '100%',
            padding: '0',
            height: '200px',
            borderRadius: '0 0 10px 10px',
            boxShadow: '0 0 10px #ccc',
        },

        icon: {
            fontSize: 30
        },
        bluecard: {
            backgroundColor: '#778beb',
        }

    }

    return (
        <React.Fragment>
            <div className="row py-2" style={styles.row}>
                <div className="col-7">
                    <div className="pr-5">
                        <h5 className="p-font bold" style={styles.title}>Huddle</h5>
                        <p className="s-font" style={styles.body}>A modern football betting mobile app connecting fans while supporting local venues.</p>
                        <p className="s-font" style={styles.body}>This app was designed and developed at <a href="https://devpost.com/software/huddle-3bi47k" target="_blank" className="hvr-underline-from-left purple">DeltaHacks V</a>. Our team decided to continue forward with this project as we saw potential in the complete app. </p>
                        <a href="https://github.com/patrick-du/Personal-Website-v2" target="_blank"><button type="button" class="btn s-font hvr-bounce-to-right btnBorder">View on Github</button></a>

                    </div>
                </div>
                <div className="col-5" style={styles.bluecard}>

                </div>
            </div>

            <hr />

            <div className="row my-3" style={styles.row}>
                <div className="col-7">
                    <div className="pr-5">
                        <h5 className="p-font bold" style={styles.title}>Portfolio Website</h5>
                        <p className="s-font" style={styles.body}>A website developed for professional and personal purposes.</p>
                        <p className="s-font" style={styles.body}>I created this website to reinforce and showcase what I had learned after completing a JavaScript course and a React Course during my coop term.</p>
                        <p className="s-font" style={styles.body}>This is the 2nd version of my portfolio website. The original can be found <a href="https://patrickdu.herokuapp.com" target="_blank" className="hvr-underline-from-left purple">here</a>.</p>
                        <a href="https://github.com/patrick-du/Personal-Website-v2" target="_blank"><button type="button" class="btn s-font hvr-bounce-to-right btnBorder">View on Github</button></a>
                    </div>
                </div>

                <div className="col-5" style={styles.bluecard}>

                </div>
            </div>

            <hr />

            <div className="row my-3" style={styles.row}>
                <div className="col-7">
                    <div className="pr-5">
                        <h5 className="p-font bold" style={styles.title}>FitBud</h5>
                        <p className="s-font" style={styles.body}>A fitness app that provides a solution to common issues experienced by the average gym-goer.</p>
                        <p className="s-font" style={styles.body}>Features include: <br />- Partner Finder: meet new people based on similar training styles <br />- Exercise Tracker: create workout routines and record exercises, sets, and reps<br />- Member Counter: keeps track of # of members currently in the gym <br />- Music Player: provides music via Spotify API </p>
                        <p className="s-font" style={styles.body}>This app was designed and developed at <a href="https://devpost.com/software/fitbud" target="_blank" className="hvr-underline-from-left purple">uOttaHacks 2019</a>.</p>
                        <a href="https://github.com/patrick-du/FitBud" target="_blank"><button type="button" class="btn s-font hvr-bounce-to-right btnBorder">View on Github</button></a>
                    </div>
                </div>

                <div className="col-5" style={styles.bluecard}>

                </div>
            </div>
        </React.Fragment >

    )





}



export default ProjectBox;

