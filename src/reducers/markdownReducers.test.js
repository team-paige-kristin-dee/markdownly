import reducer from './markdownReducers';

describe('markdown reducer', () => {
  it('handles the update markdown action', () => {
    const state = {
      markdown: ''
    };
    const updatedMarkdown = reducer(state, {
      type: 'UPDATE_MARKDOWN',
      payload: '# new text'
    });

    expect(updatedMarkdown).toEqual({
      markdown: '# new text'
    });
  });
});
