import React from "react";

export interface ButtonProperties {
    label: string;
}

const Button = (props: ButtonProperties) => {
    return <button>{props.label}</button>
}

export default Button;