import React from 'react';
import { Link } from 'react-router-dom';
const DiscoverBox = (props) => {
    return (
        <div className="row ">
            <div className="col mx-0">

                <Link to="/about/story">
                    <div className="discBox gradient1">
                    </div>
                </Link>

            </div>
            <div className="col mx-0">
                <Link to="/about/career">
                    <div className="discBox gradient2 float-right">
                    </div>
                </Link>
            </div>
        </div>


    );
}


export default DiscoverBox;
