import React from 'react';
import PropTypes from 'prop-types';
import marked from 'marked';
import styles from 'github-markdown-css/github-markdown.css';

function Preview({ body }) {
  const __html = marked(body);
  return <div className={styles['markdown-body']} dangerouslySetInnerHTML={{ __html }}></div>;
}

Preview.propTypes = {
  body: PropTypes.string.isRequired
};

export default Preview;
