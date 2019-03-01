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

  it('handles the update markdown body action', () => {
    const state = {
      title: '',
      body: ''
    };
    const updatedMarkdown = reducer(state, {
      type: 'UPDATE_MARKDOWN_BODY',
      payload: 'newbody'
    });

    expect(updatedMarkdown).toEqual({
      title: '', 
      body: 'newbody'
    });
  });

  it('handles the load markdown action', () => {
    const state = {
      title: '',
      body: ''
    };
    const loadedMarkdown = reducer(state, {
      type: 'LOAD_MARKDOWN',
      payload: 'body'
    });

    expect(loadedMarkdown).toEqual({
      body: 'body'
    });
  });
});
