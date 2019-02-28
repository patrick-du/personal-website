import React from 'react';

const PageTitle = (props) => {
    const { pageName } = props
    return (
        <div className="text-center">
            <h1>{pageName}</h1>
        </div>
    )
}

export default PageTitle;
