import React from 'react';
import PropTypes from 'prop-types';

export default function Input ({size, invalid, className, ...attributes}) {
    let classes = "form-control";
    if(size) classes += " form-control-" + size;
    if(invalid) classes += " is-invalid";
    if(attributes.children) delete attributes["children"];
    if(className) classes += " " + className;
    return <input {...attributes} className={classes} />
}

Input.propTypes = {
    className: PropTypes.string,
    size: PropTypes.oneOf(["sm", "lg"]),
    invalid: PropTypes.bool
}