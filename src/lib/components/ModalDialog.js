import React from 'react';
import PropTypes from 'prop-types';

export default function ModelDialog ({className, children, ...attributes}) {
    let classes = "modal-dialog";
    if(className) classes += " " + className;
    return <div {...attributes} className={classes}>
        {children}
    </div>
}

ModelDialog.propTypes = {
    className: PropTypes.string,
}