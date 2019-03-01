import React from 'react';
import PropTypes from 'prop-types';
import styles from './Editor.css';

function Editor({ body, updateMarkdown }) {
  return (
    <textarea className={styles.Editor} name="body" value={body} onChange={updateMarkdown} />
  );
}

Editor.propTypes = {
  body: PropTypes.object.isRequired,
  updateMarkdown: PropTypes.func.isRequired
};

export default Editor;
