import React from 'react';
import PageTitle from '../layout/PageTitle';
import Collection from './Collection';
import { Link } from 'react-router-dom';


const Photography = () => {
    return (
        <div className="container-fluid main-px mt-5">
            <PageTitle pageName="Discover, create, edit"/>
            <Link to = "/photography/collection">
                
            </Link>

        </div>
    );
}

export default Photography;






    