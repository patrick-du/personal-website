import React from 'react';

const Quote = (props) => {
    const {quote, person} = props
    return (
        <blockquote className="blockquote s-font med">
            <p className="mb-0">{quote}</p>
            <footer className="blockquote-footer">{person}</footer>
        </blockquote>
    )
}

export default Quote;