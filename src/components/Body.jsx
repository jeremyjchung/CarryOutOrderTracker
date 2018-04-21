import React from 'react';
import PropTypes from 'prop-types';

import Orders from './Orders';
import OrderInfo from './OrderInfo';

class Body extends React.Component {

  constructor(props) {
    super(props);
    this.clickHandler = this.clickHandler.bind(this);

    const example_order1 = {
      order_id: 91919,
      name: "Charles",
      phone_number: "000-000-0000",
      items: [{name: "Pizza", quantity: 1}, {name: "Hotdogs", quantity: "2"}],
      phase: "idle"
    };

    const example_order2 = {
      order_id: 19191,
      name: "Chuck",
      phone_number: "111-111-1111",
      items: [{name: "Coke", quantity: 1}, {name: "Hamburgers", quantity: "2"}],
      phase: "prep"
    };

    this.state = {
      orders: [example_order1, example_order2],
      selected_order: null
    };
  }

  clickHandler(order) {
    return (e) => {
      e.preventDefault();
      console.log(order);
      this.setState({selected_order: order});
    }
  }

  render() {
    return(
      <div style={divStyle}>
        <Orders
          orders={this.state.orders}
          selected_order={this.state.selected_order}
          onclick={this.clickHandler}
        />
        <OrderInfo order={this.state.selected_order} />
      </div>
    )
  }
}

const divStyle = {
  display: "flex",
  height: "inherit"
};

export default Body;
