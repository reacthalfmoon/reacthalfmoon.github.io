import React from 'react';
import PropTypes from 'prop-types';

export default function FormText ({className, children, ...attributes}) {
    let classes = "form-text";
    if(className) classes += " " + className;
    return <div {...attributes} className={classes}>{children}</div>
}

FormText.propTypes = {
    className: PropTypes.string,
    children: PropTypes.string.isRequired,
}