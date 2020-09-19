import React from 'react';
import PropTypes from 'prop-types';
export default function Container({breakpoint, className, ...attributes}) {
    let classes = "container";
    if(breakpoint) classes += "-" + breakpoint;
    if(className) classes += " " + className;
    
    return <div {...attributes} className={classes} />
}

Container.propTypes = {
    breakpoint: PropTypes.oneOf(["sm", "md", "lg", "xl", "fluid"]),
    className: PropTypes.string,
}
