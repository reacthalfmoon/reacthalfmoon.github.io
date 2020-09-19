import React from 'react';
import PropTypes from 'prop-types';

export default function InputGroupText ({className, ...attributes}) {
    let classes = "input-group-text";
    if(className) classes += " " + className;
    return <span {...attributes} className={classes} />
}

InputGroupText.propTypes = {
    className: PropTypes.string,
}