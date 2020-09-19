import React from 'react';
import PropTypes from 'prop-types';

export default function FormGroup ({invalid, className, ...attributes}) {
    let classes = "form-group";
    if(invalid) classes = " is-invalid";
    if(className) classes += " " + className;
    return <div {...attributes} className={classes} />
}

FormGroup.propTypes = {
    className: PropTypes.string,
    invalid: PropTypes.bool,
}