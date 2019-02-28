import React from 'react';
import PropTypes from 'prop-types';

function Form({
  title,
  onSubmit,
  onChange
}) {
  return (
    <form onSubmit={onSubmit}>
      Title: <input type="text" name="title" value={title} onChange={onChange} />
      <button>Add Markdown</button>
    </form>
  );
}

Form.propTypes = {
  title: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired
};
 
export default Form;
