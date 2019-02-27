import { getMarkdown } from './markdownSelectors';

describe('markdown selectors', () => {
  it('selects a markdown', () => {
    const state = {
      markdown: '# test'
    };

    const selectedMarkdown = getMarkdown(state);
    expect(selectedMarkdown).toEqual('# test');
  });
});
