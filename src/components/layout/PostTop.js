import React from 'react';
import { Link } from 'react-router-dom';

const PostTop = (props) => {
    const { subtitle, title, previous, next } = props
    return (
        <React.Fragment>
            <p className="subSectionSubtitle">{subtitle}</p>
            <p className="subSectionTitle">{title}</p>
        </React.Fragment >
    )
}

export default PostTop;