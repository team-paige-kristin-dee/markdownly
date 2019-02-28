import React from 'react';
import PropTypes from 'prop-types';

function Markdown({
  title
}) {
  return (
    <p>{title}</p>
  );
}

Markdown.propTypes = {
  title: PropTypes.string.isRequired
};

export default Markdown;
