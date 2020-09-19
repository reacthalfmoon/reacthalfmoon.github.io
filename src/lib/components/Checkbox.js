import React from 'react';
import PropTypes from 'prop-types';

export default function Checkbox ({id, disabled, checked, horizontal, toggle, blank, className, children, ...attributes}) {
    let classes = "custom-checkbox";
    if(horizontal) classes += " d-inline-block";
    if(className) classes += " " + className;
    const toggleState = (event) => {
        event.preventDefault();
        if(disabled===true) return;
        toggle();
    }
    return (
        <div 
            className={classes} 
            {...attributes} 
            onClick={(e)=>{toggleState(e)}}
        >
            <input type="checkbox" id={id} checked={checked} onChange={(e)=>{e.preventDefault()}} disabled={disabled} />
            <label htmlFor={id} className={blank ? "blank" : ""}>{children}</label>
        </div>
    )
}   

Checkbox.propTypes = {
    /**
     * A unique id for the checkbox.  
     * Required Attribute.
     */
    id: PropTypes.string.isRequired,
    /**
     * State of checkbox, whether it is checked or not.  
     * Required Attribute.
     */
    checked: PropTypes.bool.isRequired,
    /**
     * Toggle function to change the state of checkbox.  
     * Required Attribute. 
     */
    toggle: PropTypes.func.isRequired,
    /**
     * A label for the Checkbox.  
     */
    children: PropTypes.string,
    /**
     * Use this to disable a checkbox.
     */
    disabled: PropTypes.bool,
    /**
     * By default Checkbox is a block level component.  
     * Use `horizontal` to stack checkboxes horizontally.
     */
    horizontal: PropTypes.bool,
    /**
     * Use `blank` with `InputGroup` to render a checkbox without label
     */
    blank: PropTypes.bool,
    className: PropTypes.string,
}