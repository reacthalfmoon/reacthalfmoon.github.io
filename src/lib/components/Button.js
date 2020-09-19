import React from 'react';
import PropTypes from 'prop-types';

// export default function Button({color, size, block, disabled, active, classNames, children}){
export default function Button({color, size, block, disabled, active, className, children, ...attributes}){
    let classes = "btn";
    if(color) classes += " btn-" + color;
    if(size) classes += " btn-" + size;
    if(block) classes += " btn-block";
    if(disabled) classes += " disabled";
    if(active) classes += " active";
    if(className) classes += " " + className;
    return (
        <button {...attributes} className={classes} type="button">{children}</button>
    )
}

Button.propTypes = {
    color: PropTypes.oneOf(["primary", "secondary", "success", "danger"]),
    size: PropTypes.oneOf(["sm", "lg"]),
    block: PropTypes.bool,
    disabled: PropTypes.bool,
    active: PropTypes.bool,
    className: PropTypes.string,
    children: PropTypes.string
}