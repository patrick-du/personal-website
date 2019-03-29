import React from 'react';
import { Link } from 'react-router-dom';
import PostTop from '../layout/PostTop';

const ElementsPhysicalTherapy = () => {
    return (
        <div className="container-fluid container-padding fade-in-bottom-project-1">
            <PostTop subtitle="Exploring the daily lives of exercise therapists" title="Elements Physical Therapy" previous="/projects" next="/projects/huddle" />
            <p className="s-font"></p>
            <p className="s-font">At <a href="http://elementsphysicaltherapy.ca" target="_blank" className="hvr-underline-from-left purple">Elements Physical Therapy</a>, I assisted in the daily planning of patient physical activites in order to reach therapeutic goals by creating workout routines using <a href="https://www.simpleset.net" target="_blank" className="hvr-underline-from-left purple">SimpleSet</a>, a physiotherapy exercise prescription software. On top of this, I further developed my skills with Microsoft Excel to document patient charts during therapy in regards to their exercises, reps, and weights to improve the clinics efficiency and organization. Overall, the atmosphere of the physiotherapy clinic was very welcoming and helped me improve my communication skills as I was constantly working with new clients. It taught me the importance of building patient rapport and trust as it may be difficult for patients to trust a student assistant with exercise administration.</p>
            <hr />
            <Link to="../../" className="linkdec">
                <p className="s-font text-center text-muted vert-move mt-5 mb-0">Created by Patrick Du 🎈</p>
            </Link>
        </div>

    )

}

const styles = {

}

export default ElementsPhysicalTherapy;