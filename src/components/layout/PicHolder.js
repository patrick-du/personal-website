import React from 'react';

const PicHolder = (props) => {
    const { imgPath, caption } = props;
    const styles = {
        holder: {
            width: '100%'
        },
        image: {
            width: '100',
            height: 'auto'
        }
    }
    return (
        <figure class="figure text-center" style={styles.holder}>
            <img src={require(`../../assets/${imgPath}`)} className="figure-img img-fluid rounded" alt="" style={styles.image} />
            <figcaption className="figure-caption">{caption}</figcaption>
        </figure>


    );
}

export default PicHolder;