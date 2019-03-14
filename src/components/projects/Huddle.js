import React from 'react';
import { Link } from 'react-router-dom';
import PostTop from '../layout/PostTop';

const Huddle = () => {
    return (
        <div className="container-fluid container-padding">
            <PostTop subtitle="A Look into the Daily Life of an Exercise Therapist" title="Huddle" cancel="/projects" next="/projects/personalwebsite" />
            <Link to="../../" className="linkdec">
                <p className="s-font text-center text-muted vert-move mt-5 mb-0">Created by Patrick Du 🎈</p>
            </Link>
        </div>

    )

}

const styles = {

}

export default Huddle;