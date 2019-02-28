import React, { Component } from 'react';

class AboutBox extends Component {
    render(props) {
        const { title, body } = this.props
        return (
            <div className="aboutBox my-5 p-3">
                <h3 className="p-font bold">{title}</h3>
                <p className="s-font reg">{body}</p>
            </div>
        );
    }
}

export default AboutBox;
