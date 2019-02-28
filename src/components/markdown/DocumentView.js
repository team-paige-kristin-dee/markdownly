import React from 'react';
import Preview from './Preview';
import PropTypes from 'prop-types';
import Editor from './Editor';
import Markdowns from './Markdowns';
import Form from './Form';
import styles from './Document.css';
import { Link } from 'react-router-dom';

export default function DocumentView({ title, body, markdowns, onChange, onSubmit }) {
  return (
    <>
    <div className={styles.header}>
      <nav>
        <Link to="/">Home</Link>
      </nav>
      <h2>ADD A MARKDOWN</h2>
      <Form title={title} onChange={onChange} onSubmit={onSubmit.bind(null, title, body)} />
    </div>
      <Markdowns markdowns={markdowns} />
      <div className={styles.Document}>
        <Editor body={body} updateMarkdown={onChange} />
        <Preview body={body} />
      </div>
    </>
  );
}
DocumentView.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  markdowns: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};
