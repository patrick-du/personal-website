import React from 'react';

const PageTitle = (props) => {
    const { pageName, descriptionTop, descriptionBottom, picture } = props
    return (
        <React.Fragment>
            <div className="row mx-0">
                <div className="col-9 px-0">
                    <p className="s-font" id="pageTitlePageDesc">{descriptionTop}</p>
                    <p className="s-font" id="pageTitlePageTitle">{pageName}</p>
                    <p className="s-font" id="pageTitlePageDesc">{descriptionBottom}</p>
                </div>

                <img className="bitmojiPageTitle ml-auto" src={require(`../../assets/${picture}.png`)} />



            </div>
            <hr className="my-3" />
        </React.Fragment>
    )
}


export default PageTitle;


