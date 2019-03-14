import React from 'react';
import { Link } from 'react-router-dom';
import PostTop from '../layout/PostTop';

const FitBud = () => {
    return (
        <div className="container-fluid container-padding">
            <PostTop subtitle="All-in-one Fitness App" title="Fitbud" cancel="/projects" next="/projects/huddle" />
            <Link to="../../" className="linkdec">
                <p className="s-font text-center text-muted vert-move mt-5 mb-0">Created by Patrick Du 🎈</p>
            </Link>
        </div>

    )

}

const styles = {

}

export default FitBud;