import React from 'react';


const BorderPic = (props) => {
    const { imgPath, picDesc } = props
    const styles = {
        border: {

        },
        image: {
            width: '100%',
            boxShadow: '0 0 5px #ccc'

        }
    }
    return (
        <div className="my-5 hvr-grow">
            <img src={require(`../../assets/${imgPath}`)} alt="" style={styles.image} />
            <p className="text-center s-font mt-1" style={{ color: '#7f8c8d' }}>{picDesc}</p>
        </div>


    )
}

export default BorderPic;