import React from 'react';

const PageTitle = (props) => {
    const { pageName, descriptionTop, descriptionBottom } = props
    return (
        <div>
            <p className="s-font" id="pageTitlePageDesc">{descriptionTop}</p>
            <h1 className="p-font bold">{pageName}</h1>
            <p className="s-font" id="pageTitlePageDesc">{descriptionBottom}</p>
            <hr className="my-3" />
        </div>
    )
}


export default PageTitle;


