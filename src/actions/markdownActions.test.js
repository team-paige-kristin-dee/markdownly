import { updateMarkdown, UPDATE_MARKDOWN } from './markdownActions';

describe('markdown action creators', () => {
  it('can update a markdown action', () => {
    const action = updateMarkdown('# banana');

    expect(action).toEqual({
      type: UPDATE_MARKDOWN,
      payload: { markdown: '# banana' }
    });
  });
});
