import React from 'react';
import PropTypes from 'prop-types';

export default function Row ({className, ...attributes}) {
    let classes = "row";
    if(className) classes += " " + className;
    return <div {...attributes} className={classes} />
}

Row.propTypes = {
    className: PropTypes.string
}