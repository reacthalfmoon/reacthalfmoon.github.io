import React from 'react';
import PropTypes from 'prop-types';

export default function CollapseGroup ({className, ...attributes}) {
    let classes = "collapse-group";
    if(className) classes += " " + className;
    return <div {...attributes} className={classes} />
}

CollapseGroup.propTypes = {
    className: PropTypes.string,
}