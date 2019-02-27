import React, { PureComponent } from 'react';
import Preview from '../components/markdown/Preview';
import Editor from '../components/markdown/Editor';
import styles from './Document.css';
import store from '../store';
import { getMarkdownTitle, getMarkdownBody } from '../selectors/markdownCreate';
import { updateMarkdownTitle, updateMarkdownBody } from '../actions/markdownActions';
import Form from '../components/markdown/Form';

export default class Document extends PureComponent {
  state = {
    title: '',
    body: ''
  };

  updateMarkdown = ({ target }) => {
    const factoryMethod = {
      title: updateMarkdownTitle,
      body: updateMarkdownBody
    };
    store.dispatch(factoryMethod[target.name](target.value));
  };

  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      const state = store.getState();
      const title = getMarkdownTitle(state);
      const body = getMarkdownBody(state);
      this.setState({ title, body });
    });
  }

  componentWillUnmount() {
    if(this.unsubscribe) {
      this.unsubscribe();
    }
  }

  render() {
    const { body } = this.state;
    return (
      <>
      <Form />
      <div className={styles.Document}>
        <Editor body={body} updateMarkdown={this.updateMarkdown} />
        <Preview body={body} />
      </div>
      </>
    );
  }
}
