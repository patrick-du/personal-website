import React from 'react';

const PostTop = (props) => {
    const { subtitle, title} = props
    return (
        <React.Fragment>
            <p className="subSectionSubtitle">{subtitle}</p>
            <p className="subSectionTitle">{title}</p>
        </React.Fragment >
    )
}

export default PostTop;