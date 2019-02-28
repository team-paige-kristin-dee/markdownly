import React from 'react';
import { connect } from 'react-redux';
import { getMarkdownTitle, getMarkdownBody } from '../selectors/markdownCreate';
import { getMarkdowns } from '../selectors/markdowns';
import { updateMarkdownTitle, updateMarkdownBody, createMarkdown } from '../actions/markdownActions';
import DocumentView from '../components/markdown/DocumentView';

class Document extends React.PureComponent {
  componentDidMount() {
    this.props.loadMarkdown(this.props.selectedMarkdown);
  }
}

const mapStateToProps = (state, props) => ({
  title: getMarkdownTitle(state),
  body: getMarkdownBody(state),
  //selectedMarkdown: getSelectedMarkdown(state, props.match.params.title)
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DocumentView);
