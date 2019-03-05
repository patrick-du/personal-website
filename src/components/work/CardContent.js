import React from 'react';

const Card = (props) => {
    const { title, body, imgPath, badge1, badge2, badge3 } = props;

    return (
        // <div style={styles.customCard}>
        //     <div className="p-font bold" style={styles.title}>{title}</div>
        //     <div className="s-font med" style={styles.body}>{body}</div>

        //     <div className="">
        //         <span class="badge badge-pill s-font" style={styles.badge}>{badge1}</span> &nbsp;
        //         <span class="badge badge-pill s-font" style={styles.badge}>{badge2}</span> &nbsp;
        //         <span class="badge badge-pill s-font" style={styles.badge}>{badge3}</span>
        //     </div>
        // </div>
            /*<img src={require(`../../assets/${imgPath}`)} />*/
            <div className="card" style={styles.custom}>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>


    )
}

const styles = {
    custom: {
        width: '80%',
        height: '500px',
        borderRadius: '15px',
        boxShadow: '0 0 10px #ccc'
    },
    title: {
        fontSize: '2rem'
    },

    body: {
        fontSize: '15px'
    },

    icon: {
        fontSize: '30px'
    },
    badge: {
        border: '1px solid #5368fc',
        backgroundColor: '#',
        color: '#5368fc'
    },

    img: {

    },
  



}


export default Card;