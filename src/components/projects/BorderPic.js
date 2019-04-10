import React from 'react';


const BorderPic = (props) => {
    const { imgPath, picDesc } = props
    const styles = {
        border: {

        },
        image: {
            width: '100%',

        }
    }
    return (
        <div className="my-5">
            <img src={require(`../../assets/${imgPath}`)} alt="" style={styles.image} />
            <p className="text-center s-font mt-3" style={{ color: '#7f8c8d' }}>{picDesc}</p>
        </div>


    )
}

export default BorderPic;