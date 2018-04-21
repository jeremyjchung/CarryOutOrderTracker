import React from 'react';
import PropTypes from 'prop-types';

function render_items(items) {
  return items.map((item) =>
    <li key={item.name}>{item.name} ({item.quantity})</li>
  )
}

function OrderInfo(props) {
  const info = props.order ? (
    <div>
      <h3>ID: {props.order.order_id}</h3>
      <h3>Customer: {props.order.name}</h3>
      <h3>Phone Number: {props.order.phone_number}</h3>
      <h3>Items:</h3>
      <ul>
        {render_items(props.order.items)}
      </ul>
      <h3>Phase: {props.order.phase}</h3>
    </div>
  ) : "Click on an order to view extra information.";

  return (
    <div style={divStyle}>
      {info}
    </div>
  )
}

OrderInfo.propTypes = {
  order: PropTypes.any
}


const divStyle = {
  height: "99%",
  width: "40%",
  paddingLeft:"50px",
  paddingTop: "5px",
  overflow: "auto",
  borderRight: "1px solid black"
};

export default OrderInfo;
