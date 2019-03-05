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
            <div className="row ">
                <div className="col mx-0">

                    <Link to="/about/story">
                        <div className="gradient1" onClick={this.attack} style={styles.discBox}>
                        </div>
                    </Link>

                </div>
                <div className="col mx-0">
                    <Link to="/about/career">
                        <div className="gradient2 float-right" style={styles.discBox}>
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
        borderRadius: '15px'
    }
}

/*
        
*/

export default DiscoverBox;
