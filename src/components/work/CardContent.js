import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Card extends Component {

    expandToggle() {
        let extendedMessageEl = document.querySelector('.extendedMessage');

        if (extendedMessageEl.style.display === 'none') {
            extendedMessageEl.style.display = 'block';
        } else {
            console.log('not working')
            console.log(extendedMessageEl.style)
        }
    }

    render() {
        const { job, position, imgPath, time, link } = this.props;

        return (
            <div className="workCard">
                <div className="row">
                    <div id="col1">
                        <img src={require(`../../assets/${imgPath}`)} alt="" className="workCardImage" />
                    </div>
                    <div id="col2">
                        <div className="workCardText px-0">
                            <p className="p-font med card-title" id="pos">{position}</p>
                            <p className="s-font lightText card-text" id="job">{job}<div id="time">{time}</div></p>
                        </div>
                    </div>
                </div>
                <br />
                <p className="s-font lightText card-text" id="findOutMoreMessage" onClick={this.expandToggle}>Click here to find out more <i class="fas fa-plus-circle green "></i></p>
                <div className="extendedMessage">
                    asd
                </div>
            </div >
        )
    }
}



export default Card;