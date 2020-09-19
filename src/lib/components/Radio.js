import React from 'react';
import PropTypes from 'prop-types';

export default function Radio ({id, disabled, checked, horizontal, blank, selectOption, className, children, ...attributes}) {
    let classes = "custom-radio my-5";
    if(horizontal) classes += " d-inline-block mr-5";
    if(className) classes += " " + className;
    const selectThisOption = (event) => {
        event.preventDefault();
        if(disabled===true) return;
        selectOption();
    }
    return (
        <div 
            className={classes} 
            {...attributes} 
            onClick={(e)=>{selectThisOption(e)}}
        >
            <input type="radio" id={id} checked={checked} onChange={(e)=>{e.preventDefault()}} disabled={disabled} />
            <label htmlFor={id} className={blank ? "blank" : ""}>{children}</label>
        </div>
    )
}   

Radio.propTypes = {
    /**
     * A unique id for the radio.  
     * Required Attribute.
     */
    id: PropTypes.string.isRequired,
    /**
     * State of radio, whether it is checked or not.  
     * Required Attribute.
     */
    checked: PropTypes.bool.isRequired,
    /**
     * Select Option function to select the current radio option.  
     * Required Attribute. 
     */
    selectOption: PropTypes.func.isRequired,
    /**
     * A label for the Radio.  
     */
    children: PropTypes.string,
    /**
     * Use this to disable a radio.
     */
    disabled: PropTypes.bool,
    /**
     * By default Radio is a block level component.  
     * Use `horizontal` to stack radios horizontally.
     */
    horizontal: PropTypes.bool,
    /**
     * Use `blank` with `InputGroup` to render a radio button without label.
     */
    blank: PropTypes.bool,
    className: PropTypes.string,
}