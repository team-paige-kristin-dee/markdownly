import React from 'react';
import { connect } from 'react-redux';
import Preview from '../components/markdown/Preview';
import PropTypes from 'prop-types';
import Editor from '../components/markdown/Editor';
import Markdowns from '../components/markdown/Markdowns';
import styles from './Document.css';
import { getMarkdownTitle, getMarkdownBody } from '../selectors/markdownCreate';
import { getMarkdowns } from '../selectors/markdowns';
import { updateMarkdownTitle, updateMarkdownBody, createMarkdown } from '../actions/markdownActions';
import Form from '../components/markdown/Form';

function Document({ title, body, markdowns, onChange, onSubmit }) {
  return (
    <>
      <Form title={title} onChange={onChange} onSubmit={onSubmit.bind(null, title, body)} />
      <Markdowns markdowns={markdowns} />
      <div className={styles.Document}>
        <Editor body={body} updateMarkdown={onChange} />
        <Preview body={body} />
      </div>
    </>
  );
}

const mapStateToProps = state => ({
  title: getMarkdownTitle(state),
  body: getMarkdownBody(state),
  markdowns: getMarkdowns(state)
});

const mapDispatchToProps = dispatch => ({
  onChange({ target }) {
    const factoryMethod = {
      title: updateMarkdownTitle,
      body: updateMarkdownBody
    };
    dispatch(factoryMethod[target.name](target.value));
  },
  onSubmit(title, body, event) {
    event.preventDefault();
    dispatch(createMarkdown({ title, body }));
  }
});

Document.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  markdowns: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Document);
