import { getMarkdownTitle, getMarkdownBody } from './markdownCreate';

describe('markdown selectors', () => {
  it('selects a markdown title', () => {
    const state = {
      markdownReducers: 
      { title: '#SPOT',
        body: '' },
      markdowns: []
    };

    const selectedMarkdown = getMarkdownTitle(state);
    expect(selectedMarkdown).toEqual('#SPOT');
  });

  it('selects a markdown body', () => {
    const state = {
      markdownReducers: 
      { title: '',
        body: 'Spot is the greatest dog ever' },
      markdowns: []
    };
      
    const selectedMarkdown = getMarkdownBody(state);
    expect(selectedMarkdown).toEqual('Spot is the greatest dog ever');
  });
});
