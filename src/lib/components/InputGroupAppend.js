import React from 'react';
import PropTypes from 'prop-types';

export default function InputGroupAppend ({className, ...attributes}) {
    let classes = "input-group-append";
    if(className) classes += " " + className;
    return <div {...attributes} className={classes} />
}

InputGroupAppend.propTypes = {
    className: PropTypes.string,
}