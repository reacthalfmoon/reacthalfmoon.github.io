import React from 'react';
import PropTypes from 'prop-types';

export default function Badge ({color, pill, href, className, children, ...attributes}) {
    let classes = "badge";
    if(color) classes += " badge-" + color;
    if(pill) classes += " badge-pill";
    if(className) classes += " " + className;
    if(href) return <a href={href} className={classes} {...attributes} children={children} />
    return <span {...attributes} className={classes} children={children} />
}

Badge.propTypes = {
    className: PropTypes.string,
    color: PropTypes.oneOf(["primary", "secondary", "success", "danger"]),
    pill: PropTypes.bool,
    children: PropTypes.string.isRequired,
}