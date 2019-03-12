import React from 'react';
import { Link } from 'react-router-dom';

const Card = (props) => {
    const { float, job, position, imgPath, type } = props;
    // const styles = {
    //     custom: {
    //         width: '100%',
    //         boxShadow: '0 0 10px #ccc',
    //         padding: '2rem',
    //         float: `${float}`,
    //         textAlign: 'center'
    //     },
    //     job: {
    //         fontSize: '2rem'
    //     },
    //     position: {
    //         fontSize: '15px',
    //     },
    //     period: {
    //         fontSize: '15px',
    //         color: '#ccc',
    //     },
    //     img: {
    //         width: '100%',
    //         boxShadow: '0 0 10px #ccc',
    //     },
    //     badge: {
    //         width: '5rem',
    //         backgroundColor: '#546de5',
    //         color: 'white',
    //         fontSize: '13px'
    //     }
    //  }







    return (
        <Link to="/about" className="linkdec">
            <div className="workCard">fsdfsdf</div>

            {/* <div className="card" style={styles.custom}>
                <img src={require(`../../assets/${imgPath}`)} alt="" style={styles.img} className="mx-auto" />
                <hr />
                <h5 className="p-font bold" style={styles.job}>{job}</h5>
                <p className="s-font med lightText" style={styles.position}>{position}</p>
                <span class="badge s-font med p-1 mx-auto" style={styles.badge}>{type}</span>
            </div> */}
        </Link>
    )
}


export default Card;