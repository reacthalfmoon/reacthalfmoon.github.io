import React from 'react';
import PropTypes from 'prop-types';

export default function ContentWrapper ({className, ...attributes}) {
    let classes = "content-wrapper";
    if(className) classes += " " + className;
    return <div {...attributes} className={classes} />
}

ContentWrapper.propTypes = {
    className: PropTypes.string,
}