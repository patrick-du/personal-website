import React from 'react';

const PageTitle = (props) => {
    const { pageName, descriptionTop, descriptionBottom } = props
    return (
        <div>
            <p className="s-font" id="pageTitlePageDesc">{descriptionTop}</p>
            <p className="s-font" id="pageTitlePageTitle">{pageName}</p>
            <p className="s-font" id="pageTitlePageDesc">{descriptionBottom}</p>
            <hr className="my-3" />
        </div>
    )
}


export default PageTitle;


