import React, { Component } from 'react';

class AboutBox extends Component {
    render(props) {
        const { title, subtitle, paragraph1, paragraph2, paragraph3 } = this.props
        return (
            <div className="aboutBox my-5 p-3">
                <p className="title-font med no-y-space">{title}</p>
                <h3 className="p-font med ">{subtitle}</h3>
                <p className="s-font reg">{paragraph1}</p>
                <p className="s-font reg">{paragraph2}</p>
                <p className="s-font reg">{paragraph3}</p>
            </div>
        );
    }
}

export default AboutBox;
