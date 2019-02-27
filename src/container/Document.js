import React, { PureComponent } from 'react';
import Preview from '../components/markdown/Preview';
import Editor from '../components/markdown/Editor';
import styles from './Document.css';
import store from '../store';
import { getMarkdown } from '../selectors/markdownCreate';
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

  updateState = () => {
    const currentReduxState = store.getState();
    const { title, body } = getMarkdown(currentReduxState);
    this.setState({ title, body });
  };

  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      const title = 
      const body = 
      const state = store.getState();
      this.setState({ title, body });
    });
  }

  componentWillUnmount() {
    if(this.unsubscribe) {
      this.unsubscribe();
    }
  }

  render() {
    const { markdown } = this.state;
    return (
      <>
      <Form />
      <div className={styles.Document}>
        <Editor markdown={markdown} updateMarkdown={this.updateMarkdown} />
        <Preview markdown={markdown} />
      </div>
      </>
    );
  }
}
