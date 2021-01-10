import React from 'react';

const HyperLink = ({ link, text, underline = true }) => {
  return underline ? (
    <a
      className="hvr-underline"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      {text}
    </a>
  ) : (
    <a href={link} target="_blank" rel="noopener noreferrer">
      {text}
    </a>
  );
};

export default HyperLink;
