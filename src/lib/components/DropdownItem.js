import React from 'react';
import PropTypes from 'prop-types';

export default function DropdownItem ({href, className, children, ...attributes}) {
    let classes = "dropdown-item";
    if(className) classes += " " + className;
    if(href) return <a href={href} className={classes} {...attributes}  children={children} />
    return <div {...attributes} className={classes} children={children} />
}

DropdownItem.propTypes = {
    className: PropTypes.string,
    href: PropTypes.string,
}