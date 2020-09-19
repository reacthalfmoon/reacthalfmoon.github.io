import React from 'react';
import PropTypes from 'prop-types';

export default function Card ({className, ...attributes}) {
    let classes = "card";
    
    if(className) classes += " " + className;
    return <div {...attributes} className={classes} />
}

Card.propTypes = {
    className: PropTypes.string,
}