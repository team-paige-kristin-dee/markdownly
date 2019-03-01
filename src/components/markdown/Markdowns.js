import React from 'react';
import PropTypes from 'prop-types';
import Markdown from './Markdown';
import { Link } from 'react-router-dom';
import './Markdowns.css';

function Markdowns({
  markdowns
}) {
  const listOfMarkdowns = markdowns.map((markdown, i) => {
    return (
      <li key={i}>
        <Link to={`/markdown/${markdown.title}`}>
          <Markdown title={markdown.title} />
        </Link>
      </li>
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
