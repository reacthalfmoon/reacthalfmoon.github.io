import React from 'react';
import PropTypes from 'prop-types';

export default function CollapseContent ({className, ...attributes}) {
    let classes = "collapse-content";
    if(className) classes += " " + className;
    return <div {...attributes} className={classes} />
}

CollapseContent.propTypes = {
    className: PropTypes.string,
}