import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PostTop from '../layout/PostTop';
import Fade from 'react-reveal/Fade';
import BorderPic from '../layout/BorderPic';
import NextPageBottom from '../layout/NextPageBottom';

class Serenity extends Component {

    render() {
        return (
            <div className="container-fluid mx-auto px-0" >
                <img src={require(`../../assets/serenityA-opt.png`)} className="topProjectImage" />
                <div className="projectContainer mx-auto px-0">
                    <Fade big>
                        <PostTop subtitle="Side Project" title="Serenity"/>
                        <hr className="my-3"/>
                        <p className="general-font">Serenity is a social wellness web platform that assess mental well-being through mood tracking and data visualization patterns.</p>
                        <p className="general-font">Users keep track of their mood through the use of a daily journal with simple prompts such as  levels of stress, depression, anxiety and whether or not they exercised that day.</p>
                        <BorderPic imgPath="serenityB.gif" picDesc="Journal View, Journal Creation, Journal Deletion" />
                        <p className="general-font">Users can also utilize popular diagnostic tools such as the Patient Health Questionnaire (PHQ-9) and General Anxiety Disorder 7 (GAD-7) for mental health disorders. These are used by health care professionals to objectively determine the severity of initial symptoms as well as monitor symptom changes and treatment effects over time. </p>
                        <BorderPic imgPath="serenityC.gif" picDesc="Assessment Methods and Submission History" />
                        <p className="general-font">Rather than encouraging exercise through quantitative measures such as reps, sets, and weight, Serenity aims to make users aware of the correlation between even modest amounts of exercise and mental health improvements. In doing so, users will be more likely to utilize physical activity as an intervention when experiencing negative feelings. Ideally, this will improve their physical and mental wellbeing.</p>
                        <BorderPic imgPath="serenityD.png" picDesc="Statistics and Trends" />
                        <p className="general-font">This app was developed with React, Node (Express), and MongoDB. View the <a href="https://github.com/patrick-du/serenity" target="_blank" className="hvr-underline-from-left purple">web app</a> and <a href="https://github.com/patrick-du/serenity-api" target="_blank" className="hvr-underline-from-left purple">API</a> on Github.</p>
                        <hr />
                    </Fade>

                    <NextPageBottom route="/work/huddle" title="Up Next" subtitle="Huddle"/>

                </div>

            </div>
        )
    }

}


export default Serenity;