import React from 'react';
import PropTypes from 'prop-types';

export default function Select ({displaySize, invalid, className, ...attributes}) {
    let classes = "form-control";
    if(displaySize) classes += " form-control-" + displaySize;
    if(invalid) classes += " is-invalid";
    if(className) classes += " " + className;
    return <select {...attributes} className={classes} />
}

Select.propTypes = {
    className: PropTypes.string,
    displaySize: PropTypes.oneOf(["sm", "lg"]),
    invalid: PropTypes.bool
}