import { getMarkdownTitle, getMarkdownBody } from './markdownCreate';

describe('markdown selectors', () => {
  it('selects a markdown title', () => {
    const state = {
      title: '#SPOT',
      body: ''
    };

    const selectedMarkdown = getMarkdownTitle(state);
    expect(selectedMarkdown).toEqual('#SPOT');
  });

  it('selects a markdown body', () => {
    const state = {
      title: '',
      body: 'Spot is the greatest dog ever'
    };

    const selectedMarkdown = getMarkdownBody(state);
    expect(selectedMarkdown).toEqual('Spot is the greatest dog ever');
  });
});
