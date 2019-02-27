import React, { PureComponent } from 'react';
import Preview from '../components/markdown/Preview';
import Editor from '../components/markdown/Editor';
import styles from './Document.css';
import store from '../store';
import { getMarkdown } from '../selectors/markdownSelectors';
import { updateMarkdown } from '../actions/markdownActions';
import Form from '../components/markdown/Form';

export default class Document extends PureComponent {
  state = {
    markdown: '',
    unsubscribe: null
  };

  updateMarkdown = ({ target }) => {
    store.dispatch(updateMarkdown(target.value));
  };

  updateState = () => {
    const currentReduxState = store.getState();
    const markdown = getMarkdown(currentReduxState);
    this.setState({ markdown });
  };

  componentDidMount() {
    this.updateState();
    const unsubscribe = store.subscribe(() => {
      this.updateState();
    });
    this.setState({ unsubscribe });
  }

  componentWillUnmount() {
    this.state.unsubscribe();
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
