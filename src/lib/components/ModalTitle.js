import React from 'react';
import PropTypes from 'prop-types';

export default function ModalTitle ({className, children, ...attributes}) {
    let classes = "modal-title";
    if(className) classes += " " + className;
    return <h5 {...attributes} className={classes} children={children} />
}

ModalTitle.propTypes = {
    children: PropTypes.string.isRequired,
    className: PropTypes.string,
}