import React, { Component } from 'react';

class Introduction extends Component {
    render(props) {
        const { title, subtitle, body } = this.props
        return (
            <div className="introduction my-5">
                <h5 className="title-font med no-y-space">{title}</h5>
                <h3 className="p-font bold display-4 ">{subtitle}</h3>
                <p className="s-font reg">{body}</p>
            </div>
        );
    }
}

export default Introduction;
