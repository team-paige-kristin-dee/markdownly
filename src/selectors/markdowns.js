export const getMarkdowns = state => {
  return state.markdowns.markdowns;
};

export const getSelectedMarkdown = (state, title) => {
  const selectedMarkdown = state.markdowns.markdowns.find(markdown => markdown.title === title);
  return selectedMarkdown ? selectedMarkdown.body : null;
};

