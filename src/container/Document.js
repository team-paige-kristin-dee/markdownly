import React from 'react';
import { connect } from 'react-redux';
import { getMarkdownTitle, getMarkdownBody } from '../selectors/markdownCreate';
import { getMarkdowns, getSelectedMarkdown } from '../selectors/markdowns';
import { updateMarkdownTitle, updateMarkdownBody, createMarkdown, loadMarkdown } from '../actions/markdownActions';
import DocumentView from '../components/markdown/DocumentView';
import PropTypes from 'prop-types';

class Document extends React.PureComponent {
  static propTypes = {
    selectedMarkdown: PropTypes.string,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    markdowns: PropTypes.array.isRequired,
    onChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired
  };

  componentDidMount() {
    loadMarkdown(this.props.selectedMarkdown);
  }

  render() {
    return (
      <DocumentView 
        selectedMarkdown={this.props.selectedMarkdown}
        title={this.props.title}
        body={this.props.body}
        markdowns={this.props.markdowns}
        onChange={this.props.onChange}
        onSubmit={this.props.onSubmit}
      />
    );
  }
}

const mapStateToProps = (state, props) => ({
  title: getMarkdownTitle(state),
  body: getMarkdownBody(state),
  selectedMarkdown: getSelectedMarkdown(state, props.match.params.title),
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
  onSubmit(title, body, markdowns, event) {
    event.preventDefault();
    markdowns.map(markdown => {
      if(markdown.title === title) {
        return alert('Must be a unique title!');
      }
    });
    dispatch(createMarkdown({ title, body }));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Document);
