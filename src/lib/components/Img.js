import React from 'react';
import PropTypes from 'prop-types';

export default function Img({src, alt, fluid, rounded, classNames, ...attributes}){
    let classes = "";
    if(fluid) classes += " img-fluid";
    if(rounded){
        if(rounded===true) classes += " rounded";
        else classes += " rounded-" + rounded;
    }
    if(classNames) classes += " " + classNames;
    delete attributes.children;
    return <img {...attributes} className={classes} src={src} alt={alt} />
}

Img.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    fluid: PropTypes.bool,
    rounded: PropTypes.oneOf([true, "circle", "top", "bottom", "left", "right"]),
    classNames: PropTypes.string
}