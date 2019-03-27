import React from 'react';
import { Link } from 'react-router-dom';
import PostTop from '../layout/PostTop';

const FGFBrands = () => {
    return (
        <div className="container-fluid container-padding">
            <PostTop subtitle="My first co-op experience" title="FGF Brands" cancel="/projects" next="/projects/elementsphysicaltherapy" />
            <Link to="../../" className="linkdec">
                <p className="s-font text-center text-muted vert-move mt-5 mb-0">Created by Patrick Du 🎈</p>
            </Link>
        </div>

    )

}

const styles = {

}

export default FGFBrands;