import React from 'react';
import PropTypes from 'prop-types';

export default function Content ({className, ...attributes}) {
    let classes = "content";
    if(className) classes += " " + className;
    return <div {...attributes} className={classes} />
}

Content.propTypes = {
    className: PropTypes.string,
}