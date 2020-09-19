import React from 'react';
import PropTypes from 'prop-types';

export default function Switch ({id, disabled, checked, horizontal, blank, toggle, className, children, ...attributes}) {
    let classes = "custom-switch";
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

Switch.propTypes = {
    /**
     * A unique id for the switch.  
     * Required Attribute.
     */
    id: PropTypes.string.isRequired,
    /**
     * State of switch, whether it is checked or not.  
     * Required Attribute.
     */
    checked: PropTypes.bool.isRequired,
    /**
     * Toggle function to change the state of switch.  
     * Required Attribute. 
     */
    toggle: PropTypes.func.isRequired,
    /**
     * A label for the Switch.  
     */
    children: PropTypes.string,
    /**
     * Use this to disable a switch.
     */
    disabled: PropTypes.bool,
    /**
     * By default Switch is a block level component.  
     * Use `horizontal` to stack switches horizontally.
     */
    horizontal: PropTypes.bool,
    /**
     * Use `blank` with `InputGroup` to render a switch without label.
     */
    blank: PropTypes.bool,
    className: PropTypes.string,
}