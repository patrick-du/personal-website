import React, { Component } from 'react';

class AboutBox extends Component {
    render(props) {
        const { title, body } = this.props
        return (
            <div className="">
                <h1 className="p-font bold">{title}</h1>
                <p className="s-font reg">{body}</p>
            </div>
        );
    }
}

export default AboutBox;
