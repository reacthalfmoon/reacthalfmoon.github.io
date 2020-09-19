import React from 'react';
import PropTypes from 'prop-types';

export default function DropdownMenu ({className, align, children, ...attributes}) {
    let classes = "dropdown-menu";
    if(align) classes += " dropdown-menu-" + align;
    if(className) classes += " " + className;
    return <div {...attributes} className={classes} children={children} />
}

DropdownMenu.propTypes = {
    className: PropTypes.string,
    children: PropTypes.any.isRequired,
    align: PropTypes.oneOf(["center", "right"]),
}