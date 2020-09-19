import React from 'react';
import PropTypes from 'prop-types';

export default function NavbarBrand ({href, className, children, ...attributes}) {
    let classes = "navbar-brand";
    if(className) classes += " " + className;
    if(href) return <a {...attributes} className={classes} children={children} />
    return <span {...attributes} className={classes} children={children} />
}

NavbarBrand.propTypes = {
    className: PropTypes.string,
    href: PropTypes.string
}