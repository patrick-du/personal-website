import React from 'react';

const PicHolder = (props) => {
    const { imgPath, caption } = props;
    return (
            <figure className="figure my-4 px-5 py-3">
                <img src={require(`../../assets/${imgPath}`)} className="figure-img img-fluid rounded" alt=""/>
                    <figcaption className="figure-caption text-center">{caption}</figcaption>
            </figure>
    );
}

export default PicHolder;