import React from 'react';
import PageTitle from '../layout/PageTitle';
import { Link } from 'react-router-dom';


const Photography = () => {
    const styles = {
        collection: {
            boxShadow: '0 0 10px #ccc',
            margin: '2rem 0',
        }
    }

    return (
        <div className="container-fluid projectContainer mx-auto px-0">

            <PageTitle pageName="Collections" descriptionBottom="Canon EOS Rebel T5 EF-S 18-55mm" picture="bitmoji5" />
            <Link to="/photography/calgary">
                <div style={styles.collection}></div>
            </Link>
            <br></br>
            <Link to="/photography/calgary">
                <div style={styles.collection}></div>
            </Link>
        </div>
    );

}

export default Photography;


/* http://neptunian.github.io/react-photo-gallery/ */



