import React from 'react';
import PropTypes from 'prop-types';

export default function CardTitle ({className, children, ...attributes}) {
    let classes = "card-title";
    
    if(className) classes += " " + className;
    return <div {...attributes} className={classes}>{children}</div>
}

CardTitle.propTypes = {
    className: PropTypes.string,
    children: PropTypes.string,
}