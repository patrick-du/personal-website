import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';

export default class NextPageBottom extends Component {
    render() {
        return (
            <Fade bottom>
                <Link to={`${this.props.route}`} className="linkdec hvr-icon-wobble-horizontal">
                    <div className="nextPageBottomTitle-font">{this.props.title}
                    <i class="fas fa-arrow-right hvr-icon" style={{ fontSize: '18px', float: "right" }} />
                        <p className="nextPageBottomSubTitle-font">{this.props.subtitle}</p>
                    </div>
                </Link>
            </Fade>
        )
    }
}