import React from 'react';
import PropTypes from 'prop-types';

function Order(prop) {
  const pStyle = prop.selected ? pBoldStyle : pNormStyle;

  return(
    <button onClick={prop.onclick} style={buttonStyle}>
        <p style={pStyle}>ID: {prop.order.order_id}</p>
        <p style={pStyle}>Customer: {prop.order.name}</p>
        <p style={pStyle}>Phase: {prop.order.phase}</p>
    </button>
  )
}

Order.propTypes = {
  order: PropTypes.any.isRequired,
  onclick: PropTypes.func.isRequired
}

const pNormStyle = {
  fontSize: "13px"
};

const pBoldStyle = {
  fontSize: "13px",
  fontWeight: "bold"
};

const buttonStyle = {
  textAlign: "left",
  cursor: "pointer",
  width: "200px",
  backgroundColor: "#d1e0e0",
  outline: "0",
  borderColor: "#336699"
};

export default Order;
