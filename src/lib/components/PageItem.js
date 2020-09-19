import React from 'react';
import PropTypes from 'prop-types';

export default function PageItem ({active, ellipsis, href, disabled, children, className, ...attributes}) {
    let classes = "page-item";
    if(disabled) classes += " disabled";
    if(ellipsis) classes += " ellipsis";
    if(active && !ellipsis) classes += " active";
    if(className) classes += " " + className;
    return (
        <li className={classes}>
            {ellipsis ? "" : <a href={href} className="page-link" {...attributes} children={children} />}
        </li>
    )
}

PageItem.propTypes = {
    className: PropTypes.string,
    ellipsis: PropTypes.bool,
    active: PropTypes.bool,
    href: PropTypes.string,
    disabled: PropTypes.bool,
}