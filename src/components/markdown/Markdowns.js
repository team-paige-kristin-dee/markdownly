import React from 'react';
import PropTypes from 'prop-types';
import Markdown from './Markdown';

function Markdowns({
  markdowns,
  handleClick
}) {
  const listOfMarkdowns = markdowns.map((markdown, i) => {
    return (
      <li key={i}><Markdown title={markdown.title} handleClick={handleClick} /></li>
    );
  });

  return (
    <ul>
      {listOfMarkdowns}
    </ul>
  );
}

Markdowns.propTypes = {
  markdowns: PropTypes.array.isRequired,
  handleClick: PropTypes.func.isRequired
};

export default Markdowns;
