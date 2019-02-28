import React from 'react';
import PropTypes from 'prop-types';

function Markdowns({
  markdowns
}) {
  const listOfMarkdowns = markdowns.map((markdown, i) => {
    return (
      <li key={i}>{markdown.title}</li>
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
