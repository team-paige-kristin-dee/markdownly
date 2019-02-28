export const UPDATE_MARKDOWN_TITLE = 'UPDATE_MARKDOWN_TITLE';
export const updateMarkdownTitle = title => ({
  type: UPDATE_MARKDOWN_TITLE,
  payload: title 
});

export const UPDATE_MARKDOWN_BODY = 'UPDATE_MARKDOWN_BODY';
export const updateMarkdownBody = body => ({
  type: UPDATE_MARKDOWN_BODY,
  payload: body 
});

export const CREATE_MARKDOWN = 'CREATE_MARKDOWN';
export const createMarkdown = markdown => ({
  type: CREATE_MARKDOWN,
  payload: markdown 
});

export const DELETE_MARKDOWN = 'DELETE_MARKDOWN';
export const deleteMarkdown = markdown => ({
  type: DELETE_MARKDOWN,
  payload: markdown 
});
