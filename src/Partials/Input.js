import React from "react";

const InputComponent = ({ Component, ...rest }) => !!Component ? <Component {...rest} /> : <input {...rest} />

export default InputComponent;
