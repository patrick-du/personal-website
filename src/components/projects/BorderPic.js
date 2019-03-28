import React from 'react';


const BorderPic = (props) => {
    const { imgPath, picDesc } = props
    const styles = {
        border: {

        },
        image: {
            width: '100%',
            boxShadow: '0 0 10px #ccc',
        }
    }
    return (
        <div className="my-5">
            <img src={require(`../../assets/${imgPath}`)} alt="" style={styles.image} />
            <p className="text-center s-font lightText mt-3">{picDesc}</p>
        </div>


    )
}

export default BorderPic;