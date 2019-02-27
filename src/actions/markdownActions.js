export const CREATE_MARKDOWN = 'CREATE_MARKDOWN';
export const createMarkdown = title => ({
  type: CREATE_MARKDOWN,
  payload: { title }
});
