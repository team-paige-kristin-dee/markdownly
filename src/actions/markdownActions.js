export const CREATE_MARKDOWN = 'CREATE_MARKDOWN';

export const createMarkdown = markdown => ({
  type: CREATE_MARKDOWN,
  payload: { markdown }
});

export const NEW_MARKDOWN_UPDATE = 'NEW_MARKDOWN_UPDATE';

export const updateNewMarkdown = markdown => ({
  type: NEW_MARKDOWN_UPDATE,
  payload: markdown 
});
