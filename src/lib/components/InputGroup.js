import React from 'react';
import PropTypes from 'prop-types';

export default function InputGroup ({size, className, ...attributes}) {
    let classes = "input-group";
    if(size) classes += " input-group-" + size;
    if(className) classes += " " + className;
    return <div {...attributes} className={classes} />
}

InputGroup.propTypes = {
    className: PropTypes.string,
    size: PropTypes.oneOf(["sm", "lg"])
}