import React from 'react';
import PropTypes from 'prop-types';

export default function ContentTitle ({className, children, ...attributes}){
    let classes = "content-title";
    if(className) classes += " " + className;
    return <h2 {...attributes} className={classes}>{children}</h2>
}

ContentTitle.propTypes = {
    className: PropTypes.string,
    children: PropTypes.string,
}