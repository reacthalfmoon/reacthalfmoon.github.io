import React from 'react';
import PropTypes from 'prop-types';

export default function SidebarDivider ({className, ...attributes}) {
    let classes = "sidebar-divider";
    if(className) classes += " " + className;
    if(attributes.children) delete attributes["children"];
    return <div {...attributes} className={classes} />
}

SidebarDivider.propTypes = {
    className: PropTypes.string,
}