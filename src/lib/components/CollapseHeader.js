import React from 'react';
import PropTypes from 'prop-types';

export default function CollapseHeader ({className, ...attributes}) {
    let classes = "collapse-header";
    if(className) classes += " " + className;
    return <summary {...attributes} className={classes} />
}

CollapseHeader.propTypes = {
    className: PropTypes.string,
}