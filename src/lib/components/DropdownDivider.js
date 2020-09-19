import React from 'react';
import PropTypes from 'prop-types';

export default function DropdownDivider ({className, ...attributes}) {
    let classes = "dropdown-divider";
    if(className) classes += " " + className;
    if(attributes.children) delete attributes["children"];
    return <div {...attributes} className={classes} />
}

DropdownDivider.propTypes = {
    className: PropTypes.string,
}