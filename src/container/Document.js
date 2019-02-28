import React, { PureComponent } from 'react';
import Preview from '../components/markdown/Preview';
import Editor from '../components/markdown/Editor';
import styles from './Document.css';
import store from '../store';
import { getMarkdownTitle, getMarkdownBody } from '../selectors/markdownCreate';
import { getMarkdowns } from '../selectors/markdowns';
import { updateMarkdownTitle, updateMarkdownBody, createMarkdown } from '../actions/markdownActions';
import Form from '../components/markdown/Form';

export default class Document extends PureComponent {
  state = {
    title: '',
    body: '',
    markdowns: []
  };

  addMarkdown = markdown => {
    this.setState(state => ({
      markdowns: [...state.markdowns, markdown]
    }));
  };

  handleChange = ({ target }) => {
    const factoryMethod = {
      title: updateMarkdownTitle,
      body: updateMarkdownBody
    };
    store.dispatch(factoryMethod[target.name](target.value));
  };

  handleSubmit = event => {
    event.preventDefault();
    const { title, body } = this.state;
    store.dispatch(createMarkdown({ title, body }));
  };

  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      const state = store.getState();
      const title = getMarkdownTitle(state);
      const body = getMarkdownBody(state);
      const markdowns = getMarkdowns(state);
      this.setState({ title, body, markdowns });
    });
  }

  componentWillUnmount() {
    if(this.unsubscribe) {
      console.log('component will unmount');
      this.unsubscribe();
    }
  }

  render() {
    const { title, body } = this.state;
    return (
      <>
      <Form title={title} onChange={this.handleChange} onSubmit={this.handleSubmit} />
      <div className={styles.Document}>
        <Editor body={body} updateMarkdown={this.handleChange} />
        <Preview body={body} />
      </div>
      </>
    );
  }
}
