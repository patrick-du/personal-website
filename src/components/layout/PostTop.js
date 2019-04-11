import React from 'react';
import { Link } from 'react-router-dom';

const PostTop = (props) => {
    const { subtitle, title, previous, next } = props
    return (
        <React.Fragment>
            <p className="s-font med py-0 my-0 insideProjectSubTitle">{subtitle}</p>
            <p className="s-font insideProjectTitle">{title}</p>
        </React.Fragment >
    )
}

export default PostTop;