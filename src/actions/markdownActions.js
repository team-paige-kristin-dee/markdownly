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
