import React from 'react';

const PageTitle = (props) => {
    const { pageName, descriptionBottom, picture } = props
    return (
        <React.Fragment>
            <div className="row mx-0">
                <div className="col-9 p-0">
                    <p className="sectionTitle">{pageName}</p>
                    <p className="sectionSubtitle">{descriptionBottom}</p>
                </div>
                <img className="bitmoji ml-auto" src={require(`../../assets/${picture}.png`)} />
            </div>
            <hr className="my-3" />
        </React.Fragment>
    )
}


export default PageTitle;


