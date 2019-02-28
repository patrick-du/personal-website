import React from 'react';
import PageTitle from '../layout/PageTitle';
import Collection from './Collection';
import { Link } from 'react-router-dom';


const Photography = () => {
    return (
        <div className="container-fluid main-px mt-5">
            <PageTitle pageName="Discover, create, edit"/>
            <Link to = "/photography/collection1">
                <button>Collection1</button>
            </Link>
            <Link to = "/photography/collection2">
                <button>Collection2</button>
            </Link>

        </div>
    );
}

export default Photography;






    