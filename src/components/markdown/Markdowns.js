import React from 'react';
import PropTypes from 'prop-types';
import Markdown from './Markdown';

function Markdowns({
  markdowns
}) {
  console.log('list of markdowns', markdowns);
  const listOfMarkdowns = markdowns.map((markdown, i) => {
    return (
      <li key={i}><Markdown title={markdown.title} /></li>
    );
  });

  return (
    <ul>
      {listOfMarkdowns}
    </ul>
  );
}

Markdowns.propTypes = {
  markdowns: PropTypes.array.isRequired
};

export default Markdowns;
