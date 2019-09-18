import React from 'react';
import PropTypes from 'prop-types';

const Goodslist = props => (
  <ul>
    {props.currentRenderList.map(item => <li key={item}>{item}</li>)}
  </ul>
);

Goodslist.propTypes = {
  currentRenderList: PropTypes.arrayOf(PropTypes.string),
}.isrequaired;
export default Goodslist;
