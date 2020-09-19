import React from 'react';
import PropTypes from 'prop-types';

export default function Pagination ({rounded, size, className, ...attributes}) {
    let classes = "pagination";
    if(rounded) classes += " pagination-rounded";
    if(size) classes += " pagination-" + size;
    if(className) classes += " " + className;
    return <ul {...attributes} className={classes} />
}

Pagination.propTypes = {
    className: PropTypes.string,
    rounded: PropTypes.bool,
    size: PropTypes.oneOf(["sm", "lg"])
}