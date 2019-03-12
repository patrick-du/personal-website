import React from 'react';

const PageTitle = (props) => {
    const { pageName, descriptionTop, descriptionBottom } = props
    return (
        <React.Fragment>
            <p className="s-font no-y-space lightText">{descriptionTop}</p>
            <h1 className="p-font bold">{pageName}</h1>
            <p className="s-font no-y-space lightText">{descriptionBottom}</p>
            <hr className="my-4" />
        </React.Fragment>
    )
}


export default PageTitle;


