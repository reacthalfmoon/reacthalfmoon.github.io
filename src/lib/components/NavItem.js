import React from 'react';
import PropTypes from 'prop-types';

export default function NavItem ({active, href, className, children, ...attributes}) {
    let classes = "nav-item";
    if(active) classes += " active";
    if(className) classes += " " + className;
    return (
        <li {...attributes} className={classes}>
            {href ? <a href={href} className="nav-link">{children}</a> : <span className="nav-link">{children}</span> }
        </li>
    ) 
}

NavItem.propTypes = {
    className: PropTypes.string,
    active: PropTypes.bool,
}