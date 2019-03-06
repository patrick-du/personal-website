import React from 'react';

const PageTitle = (props) => {
    const { pageName, descriptionTop, descriptionBottom } = props
    return (
        <div className="">
            <p className="s-font med no-y-space lightText">{descriptionTop}</p>
            <h1 className="p-font display-4 bold">{pageName}</h1>
            <p className="s-font med no-y-space lightText">{descriptionBottom}</p>
            <hr className="my-4"/>
        </div>
    )
}


export default PageTitle;


