import React from 'react';
import PropTypes from 'prop-types';

export default function InputGroupPrepend ({className, ...attributes}) {
    let classes = "input-group-prepend";
    if(className) classes += " " + className;
    return <div {...attributes} className={classes} />
}

InputGroupPrepend.propTypes = {
    className: PropTypes.string,
}