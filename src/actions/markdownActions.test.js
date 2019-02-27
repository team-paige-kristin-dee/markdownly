import { 
  updateMarkdownTitle, 
  UPDATE_MARKDOWN_TITLE,
  updateMarkdownBody,
  UPDATE_MARKDOWN_BODY,
  createMarkdown,
  CREATE_MARKDOWN
} from './markdownActions';

describe('markdown action creators', () => {
  it('can update a markdown title', () => {
    const action = updateMarkdownTitle('# banana');

    expect(action).toEqual({
      type: UPDATE_MARKDOWN_TITLE,
      payload: '# banana' 
    });
  });

  it('can update a markdown body', () => {
    const action = updateMarkdownBody('hello there fam');

    expect(action).toEqual({
      type: UPDATE_MARKDOWN_BODY,
      payload: 'hello there fam'
    });
  });

  it('can create a markdown', () => {
    const action = createMarkdown({ title: 'title', body: 'this is a body' });

    expect(action).toEqual({
      type: CREATE_MARKDOWN,
      payload: { title: 'title', body: 'this is a body' }
    });
  });
});
