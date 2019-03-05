import React from 'react';

const Card = (props) => {
    const { title, body, imgPath, badge1, badge2, badge3 } = props;

    return (
        <React.Fragment>
            <div className="p-font bold" style={styles.title}>{title}</div>
            <div className="s-font med" style={styles.body}>{body}</div>
            <br></br>
            <span class="badge badge-pill s-font" style={styles.badge}>{badge1}</span> &nbsp;
            <span class="badge badge-pill s-font" style={styles.badge}>{badge2}</span> &nbsp;
            <span class="badge badge-pill s-font" style={styles.badge}>{badge3}</span>


            
          {/*<img src={require(`../../assets/${imgPath}`)} />*/}  
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

    badge: {
        border: '1px solid #5368fc',
        backgroundColor: '#',
        color: '#5368fc'
    },

    img: {

    }
}


export default Card;