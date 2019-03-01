import React from 'react';
import { Link } from 'react-router-dom';
const DiscoverBox = (props) => {
    return (
        <div className="row ">
            <div className="col mx-0">

                <Link to="/about/story">
                    <div className="discBox">
                    </div>
                </Link>

            </div>
            <div className="col mx-0">
                <Link to="/about/career">
                    <div className="discBox">
                    </div>
                </Link>
            </div>

            <div className="col mx-0">
                <div className="discBox float-right">
                    hi
                </div>
            </div>
        </div>


    );
}


export default DiscoverBox;
