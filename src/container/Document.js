import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getMarkdownTitle, getMarkdownBody } from '../selectors/markdownCreate';
import { getMarkdowns } from '../selectors/markdowns';
import { updateMarkdownTitle, updateMarkdownBody, createMarkdown } from '../actions/markdownActions';
import DocumentView from '../components/markdown/DocumentView';

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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DocumentView);
