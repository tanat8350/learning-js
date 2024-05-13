// npm install --save prop-types

import './App.css';

import PropTypes from 'prop-types';

const RenderName = (props = { name: 'test' }) => {
  return <div>{props.name}</div>;
};

RenderName.propTypes = {
  name: PropTypes.string,
};

// vite said defaultProps will be removed soon
RenderName.defaultProps = {
  name: 'Zach',
};

export default RenderName;
