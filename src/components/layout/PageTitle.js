import React from 'react';

const PageTitle = (props) => {
    const { pageName, descriptionTop, descriptionBottom } = props
    return (
        <React.Fragment>
            <p className="s-font py-0 my-0 lightText" id="pageTitleDescTop">{descriptionTop}</p>
            <h1 className="p-font bold" id="pageTitlePageName">{pageName}</h1>
            <p className="s-font py-0 my-0 lightText" id="pageTitleDescBot">{descriptionBottom}</p>
            <hr className="my-3" />
        </React.Fragment>
    )
}


export default PageTitle;


