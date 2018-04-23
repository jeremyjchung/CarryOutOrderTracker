import React from 'react';
import PropTypes from 'prop-types';

import Orders from './Orders';
import OrderInfo from './OrderInfo';

class Body extends React.Component {

  constructor(props) {
    super(props);
    this.clickHandler = this.clickHandler.bind(this);
    this.tick = this.tick.bind(this)
    this.timerID = 0;

    const example_order1 = {
      order_id: 91919,
      name: "Charles",
      phone_number: "000-000-0000",
      items: [{name: "Pizza", quantity: 1}, {name: "Hotdogs", quantity: "2"}],
      phase: "idle",
      eta: {
        h: 0,
        m: 0,
        s: 0
      }
    };

    const example_order2 = {
      order_id: 19191,
      name: "Chuck",
      phone_number: "111-111-1111",
      items: [{name: "Coke", quantity: 1}, {name: "Hamburgers", quantity: "2"}],
      phase: "prep",
      eta: {
        h: 0,
        m: 5,
        s: 30
      }
    };

    this.state = {
      orders: [example_order1, example_order2],
      selected_order: null,
    };
  }

  componentDidMount() {
    this.timerID = setInterval(
      this.tick,
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    let selected = this.state.selected_order;
    const update = this.state.orders.map((order) => {
      const t = update_eta(order.eta.s, order.eta.m, order.eta.h);
      const order_ = Object.assign({}, order, {eta: t});
      if (selected == order) {
        selected = order_;
      }
      return order_;
    });
    this.setState({
      orders: update,
      selected_order: selected
    });
  }

  clickHandler(order) {
    return (e) => {
      e.preventDefault();
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

function update_eta(s, m, h) {
  if(s != 0) {
    s -= 1;
  }
  else {
    if(m != 0) {
      m -= 1;
      s = 59;
    }
    else {
      if(h != 0) {
        h -= 1;
        m = 59;
        s = 59;
      }
    }
  }
  return {h: h, m: m, s: s};
}

const divStyle = {
  display: "flex",
  height: "inherit"
};

export default Body;
