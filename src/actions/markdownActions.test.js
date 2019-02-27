import { updateMarkdownTitle, UPDATE_MARKDOWN_TITLE } from './markdownActions';

describe('markdown action creators', () => {
  it('can update a markdown title', () => {
    const action = updateMarkdownTitle('# banana');

    expect(action).toEqual({
      type: UPDATE_MARKDOWN_TITLE,
      payload: '# banana' 
    });
  });
});
