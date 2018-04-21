import React from 'react';

import Body from './Body';
import Header from './Header';

function App() {
  return(
    <div style={fullDivStyle}>
      <Header company="Bob's Burgers" />
      <Body />
      <div style={botDivStyle} />
    </div>
  );
}

const fullDivStyle = {
  height: "90%"
}

const botDivStyle = {
  height: "10%",
  borderTop: "1px solid black"
}

export default App;
