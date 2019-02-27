import reducer from './markdownReducers';

describe('markdown reducer', () => {
  it('handles the update markdown title action', () => {
    const state = {
      title: '',
      body: ''
    };
    const updatedMarkdown = reducer(state, {
      type: 'UPDATE_MARKDOWN_TITLE',
      payload: '# new text'
    });

    expect(updatedMarkdown).toEqual({
      title: '# new text', 
      body: ''
    });
  });
});
