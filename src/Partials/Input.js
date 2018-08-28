import React from "react";

class InputComponent extends React.Component {
  state = {};
  render() {
    const { component: Component, ...rest } = this.props;
    return Component ? <Component {...rest} /> : <input {...rest} />;
  }
}

export default InputComponent;
