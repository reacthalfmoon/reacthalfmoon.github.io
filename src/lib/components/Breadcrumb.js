import React from 'react';
import PropTypes from 'prop-types';

export default function Breadcrumb ({className, ...attributes}) {
    let classes = "breadcrumb";
    if(className) classes += " " + className;
    return <ul {...attributes} className={classes} />
}

Breadcrumb.propTypes = {
    className: PropTypes.string,
}