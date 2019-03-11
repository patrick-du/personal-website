import React from 'react';
import { Link } from 'react-router-dom';
const Card = (props) => {
    const { float, job, position, imgPath, period, type } = props;
    const styles = {
        custom: {
            width: '100%',
            height: '30rem',
            boxShadow: '0 0 10px #ccc',
            padding: '2rem',
            float: `${float}`,
            textAlign: 'center'
        },
        job: {
            fontSize: '2rem'
        },
        position: {
            fontSize: '15px',
        },
        period: {
            fontSize: '15px',
            color: '#ccc',
        },
        img: {
            width: '100%',
            boxShadow: '0 0 10px #ccc',
        },
        badge: {
            width: '5rem',
            backgroundColor: '#546de5',
            color: 'white',
            fontSize: '13px'
        }






    }

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
        <Link to="/about" className="linkdec">

            <div className="card" style={styles.custom}>
                <img src={require(`../../assets/${imgPath}`)} alt="" style={styles.img} className="mx-auto" />
                <hr />
                <h5 className="p-font bold" style={styles.job}>{job}</h5>
                <p className="s-font med lightText" style={styles.position}>{position}</p>
                <span class="badge s-font med p-1 mx-auto" style={styles.badge}>{type}</span>
            </div>
        </Link>


    )
}


export default Card;