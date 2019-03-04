import React from 'react';
import CardContent from './CardContent';

const WorkBox = (props) => {
    return (
        <div className="row py-5">
            <div className="col">
                <div style ={styles.customCard}>
                    <CardContent title="Huddle" body="A modern sports betting application that connects fans while supporting local venues." imgPath="huddle.jpg" />
                </div>
            </div>
            <div className="col">
                <div className="mx-auto" style={styles.customCard}>
                    <CardContent title="Huddle" body="A modern sports betting application that connects fans while supporting local venues." imgPath="huddle.jpg" />
                </div>

            </div>
            <div className="col">
                <div className="float-right" style={styles.customCard}>
                    <CardContent title="Huddle" body="A modern sports betting application that connects fans while supporting local venues." imgPath="huddle.jpg" />
                </div>

            </div>
        </div>
    )
}

const styles = {
    customCard: {
        width: '80%',
        height: '500px',
        boxShadow: '0 0 10px #ccc',
        padding: '5rem 4rem 5rem 4rem',
        borderRadius: '15px'
    }
}

export default WorkBox;