import { createMarkdown, CREATE_MARKDOWN } from './markdownActions';

describe('markdown action creators', () => {
  it('can create a markdown action', () => {
    const action = createMarkdown('#banana');

    expect(action).toEqual({
      type: CREATE_MARKDOWN,
      payload: { title: '#banana' }
    });
  });
});
