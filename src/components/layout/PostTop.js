import React from 'react';
import { Link } from 'react-router-dom';

const PostTop = (props) => {
    const { subtitle, title, previous, next } = props
    return (
        <React.Fragment>
            <p className="s-font med py-0 my-0 lightText text-center">{subtitle}</p>
            <div className="row">
                <div className="col-2">
                    <Link to={previous}>
                        <i class="fas fa-arrow-left hvr-wobble-horizontal-2" style={{ fontSize: '25px', color: '#2c3e50' }}></i>
                    </Link>
                </div>
                <div className="col-8">
                    <h3 className="p-font bold text-center">{title}</h3>
                </div>
                <div className="col-2 text-right">
                    <Link to={next}>
                        <i class="fas fa-arrow-right hvr-wobble-horizontal-1" style={{ fontSize: '25px', color: '#2c3e50' }}></i>
                    </Link>
                </div>
            </div>
            <hr />
        </React.Fragment >
    )
}

export default PostTop;