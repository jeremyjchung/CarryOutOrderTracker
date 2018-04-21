import React from 'react';
import PropTypes from 'prop-types';

import Order from './Order';

function render_orders(props) {
  return (
    props.orders.map((order) =>
      <li key={order.order_id}>
        <Order
          selected={order==props.selected_order}
          order={order}
          onclick={props.onclick(order)}
        />
      </li>
    )
  );
}

function Orders(props) {
  const orders = render_orders(props);

  return (
    <div style={divStyle}>
      <ul style={ulStyle}>{orders}</ul>
    </div>
  );
}

Orders.propTypes = {
  orders: PropTypes.array.isRequired,
  selected_order: PropTypes.any,
  onclick: PropTypes.func.isRequired
}

const divStyle = {
  height: "100%",
  paddingRight: "50px",
  overflow: "auto",
  borderRight: "1px solid black"
};

const ulStyle = {
  listStyleType: "none",
  textAlign: "left"
};

const liStyle = {
  textAlign: "left"
};

export default Orders;
