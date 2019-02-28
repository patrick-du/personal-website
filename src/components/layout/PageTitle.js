import React from 'react';

const PageTitle = (props) => {
    const { smallName, pageName } = props
    return (
        <div className="text-center">
            <p className="title-font no-y-space">{smallName}</p>
            <h1 className="bold">{pageName}</h1>
        </div>
    )
}

export default PageTitle;
