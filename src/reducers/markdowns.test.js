import reducer from './markdowns';

describe('markdowns reducer', () => {
  it('handles the markdown array', () => {
    const state = {
      markdowns: []
    };
    const updatedMarkdowns = reducer(state, {
      type: 'CREATE_MARKDOWN',
      payload: { title: 'title', body: 'this is a body' }
    });

    expect(updatedMarkdowns).toEqual({ markdowns:[
      { title: 'title', body: 'this is a body' }
    ] });
  });
});

