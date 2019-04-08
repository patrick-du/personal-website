import React from 'react';
import { Link } from 'react-router-dom';

const PostTop = (props) => {
    const { subtitle, title, previous, next } = props
    return (
        <React.Fragment>
            <p className="s-font med py-0 my-0 text-center">{subtitle}</p>                
            <p className="p-font text-center" style={{ fontWeight: 500, fontSize: 30}}>{title}</p>
            <hr />
        </React.Fragment >
    )
}

export default PostTop;