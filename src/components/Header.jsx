import React from 'react';
import PropTypes from 'prop-types';

function Header(props) {
  return (
    <header style={headerStyle}>
      <h1>{props.company} - Carryout Order Service</h1>
    </header>
  );
}

Header.propTypes = {
  company: PropTypes.string.isRequired
}

const headerStyle = {
  borderBottom: "1px solid black",
  paddingLeft: "35px",
  color: "#346697"
};

export default Header;
