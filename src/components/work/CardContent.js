import React from 'react';

const Card = (props) => {
    const { title, body, imgPath } = props;

    return (
        <React.Fragment>
            <div className="row">
                    <div className="p-font bold no-pl no-pr" style={styles.title}>{title}</div>
            </div>
            <div className="s-font med" style={styles.body}>{body}</div>
            <img src={require(`../../assets/${imgPath}`)} />
        </React.Fragment>
    )
}

const styles = {
    title: {
        fontSize: '2rem'
    },

    body: {
        fontSize: '15px'
    },

    img: {

    }
}


export default Card;