import React from 'react';
import PropTypes from 'prop-types';

export default function FormRow ({equalSpacing, className, ...attributes}) {
    let classes = "form-row";
    if(equalSpacing){
        if(equalSpacing===true) classes += " row-eq-spacing";
        else classes += " row-eq-spacing-" + equalSpacing;
    }
    if(className) classes += " " + className;
    return <div {...attributes} className={classes} />
}

FormRow.propTypes = {
    className: PropTypes.string,
    equalSpacing: PropTypes.oneOf([true, "xs", "sm", "md", "lg", "xl"])
}