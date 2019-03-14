import React from 'react';
import { Link } from 'react-router-dom';
import PostTop from '../layout/PostTop';
const EPT = () => {
    return (
        <div className="container-fluid container-padding">
            <PostTop subtitle="A Look into the Daily Life of an Exercise Therapist" title="Elements Physical Therapy" cancel="/work" next="/work/FGFBrands" />


            <Link to="../../" className="linkdec">
                <p className="s-font text-center text-muted vert-move mt-5 mb-0">Created by Patrick Du 🎈</p>
            </Link>
        </div>

    )

}

const styles = {

}

export default EPT;