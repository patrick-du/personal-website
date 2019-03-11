import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class DiscoverBox extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <div className="row">
                <div className="col mx-0">

                    <Link to="/about/story">
                        <div className="bg1" style={styles.discBox}>
                            <div className="p-font bold" style={styles.title}>My Story</div>
                        </div>
                    </Link>

                </div>
                <div className="col mx-0">
                    <Link to="/about/career">
                        <div className="bg2 float-right" style={styles.discBox}>
                            <div className="p-font bold" style={styles.title}>Career Aspirations</div>
                        </div>
                    </Link>
                </div>
            </div>

        );
    }
}

const styles = {
    discBox: {
        width: '90%',
        height: '200px',
        boxShadow: '0 0 10px #ccc',
    },
    title: {
        fontSize: '1.5rem',
        color: '#2c3e50',
        position: 'absolute',
        padding: '1rem',
        bottom: '0',
    }
}

/*
        
*/

export default DiscoverBox;
