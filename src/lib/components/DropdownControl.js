import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import DropdownContext from './DropdownContext';

export default function DropdownControl ({onClick, className, ...attributes}) {
    const {isOpen, toggle} = useContext(DropdownContext);
    let classes = "";
    if(isOpen) classes += " active";
    if(className) classes += " " + className;
    return <span {...attributes} className={classes} onClick={toggle} />
}

DropdownControl.propTypes = {
    className: PropTypes.string
}