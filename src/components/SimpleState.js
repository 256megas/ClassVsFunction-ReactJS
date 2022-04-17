import React, { Component, useState } from "react";

class SimpleState extends Component {
  state = {
    cuenta: 0,
  };

  render() {
    return (
      <div>
        La cuenta es: {this.state.cuenta}
        <br />
        <button
          onClick={() => this.setState({ cuenta: this.state.cuenta + 1 })}
        >
          Aumentar cuenta
        </button>
      </div>
    );
  }
}

// export default SimpleState;

function SimpleStateFunction() {
  const [cuenta, setCuenta] = useState(0);
  return (
    <div>
      La cuenta es: {cuenta}
      <br />
      <button onClick={() => setCuenta(cuenta + 1)}>Aumentar cuenta</button>
    </div>
  );
}

export default SimpleStateFunction;
