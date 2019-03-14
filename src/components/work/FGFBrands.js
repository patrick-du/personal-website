import React from 'react';
import { Link } from 'react-router-dom';
import PostTop from '../layout/PostTop';

const FGFBrands = () => {
    return (
        <div className="container-fluid container-padding">
            <PostTop subtitle="My 1st Coop Job" title="FGF Brands" cancel="/work" next="/work/EPT" />
            <Link to="../../" className="linkdec">
                <p className="s-font text-center text-muted vert-move mt-5 mb-0">Created by Patrick Du 🎈</p>
            </Link>
        </div>

    )

}

const styles = {

}

export default FGFBrands;