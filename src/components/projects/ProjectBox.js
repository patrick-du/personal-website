import React from 'react';
import { Link } from 'react-router-dom';

const ProjectBox = (props) => {

    const styles = {
        row: {
            width: '100%',
            height: 300,
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
        }

    }

    return (
        <React.Fragment>
        <div className="row my-2" style={styles.row}>
            <div className="col-6">
                <h5 className="p-font bold" style={styles.title}>Huddle</h5>
                <p className="s-font med" style={styles.body}>A modern football betting mobile app connecting fans while supporting local venues.</p>
                <p className="s-font med" style={styles.body}></p>
                <p className="s-font med" style= {styles.body}>Originally, this application was designed and developed at <a href="https://devpost.com/software/huddle-3bi47k" target="_blank" className="hlink">DeltaHacks V</a>. However, due to the tight time constraint we did not complete. Our team decided to continue forward with this project as we saw potential in the complete application. </p>
                <p className="s-font med" style={styles.body}></p>
                <span class="badge badge-primary">React Native</span> &nbsp;
                <span class="badge badge-primary">Node JS</span>
            </div>
            <div className="col-6 blueCard">
            
            </div>
        </div>

        <hr/>

        <div className="row my-2" style={styles.row}>
            <div className="col-6">
                <h5 className="p-font bold" style={styles.title}>Portfolio Website</h5>
                <p className="s-font med" style={styles.body}>A website developed for professional and personal purposes.</p>
                <p className="s-font med" style={styles.body}>I created this website to reinforce and showcase what I had learned after completing a JavaScript course and a React Course during my coop term.</p>
                <p className="s-font med" style={styles.body}>This is the 2nd version of my portfolio website. The original version can be found <a href="https://patrickdu.herokuapp.com" target="_blank" className="hlink">here</a>.</p>
                <span class="badge badge-primary">React</span> &nbsp;
                <span class="badge badge-primary">HTML/CSS</span>
            </div>

            <div className="col-6 blueCard">
            
            </div>
        </div>

        <hr/>

        <div className="row my-2" style={styles.row}>
            <div className="col-6 gradient2">
                
            </div>
            <div className="col-6 p-2 text-right">
                <h5 className="p-font bold" style={styles.title}>Portfolio Website</h5>
                <p className="s-font med" style={styles.body}>A website developed for professional and personal purposes.</p>
                <p className="s-font med" style={styles.body}>I created this website to reinforce and showcase what I had learned after completing a JavaScript course and a React Course during my coop term.</p>
                <p className="s-font med" style={styles.body}>This is the 2nd version of my portfolio website. The original version can be found <a href="https://patrickdu.herokuapp.com" target="_blank" className="hlink">here</a>.</p>
                <span class="badge badge-primary">React</span> &nbsp;
                <span class="badge badge-primary">HTML/CSS</span>
            </div>
        </div>

        <hr/>

        <div className="row my-2" style={styles.row}>
            <div className="col-6">
                <h5 className="p-font bold" style={styles.title}>Huddle</h5>
                <p className="s-font med" style={styles.body}>Modern sports betting connecting fans while supporting local venues.</p>

            </div>

            <div className="col-6 gradient1">
            
            </div>
        </div>
        </React.Fragment>
        
    )

    



}



export default ProjectBox;
          
