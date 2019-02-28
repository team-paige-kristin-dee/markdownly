import React from 'react';
import PropTypes from 'prop-types';

function Markdown({
  title,
  handleClick
}) {
  return (
    <>
    <p>{title}</p>
    <button onClick={handleClick}>Delete</button>
    </>
  );
}

Markdown.propTypes = {
  title: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired
};

export default Markdown;
