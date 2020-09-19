import React, {useEffect, useRef, useCallback} from 'react';
import PropTypes from 'prop-types';
import DropdownContext from './DropdownContext';

export default function Dropdown ({arrow, isOpen, toggle, dropDirection, className, ...attributes}) {
    const nodeRef = useRef(null);
    const handleDocumentClick = useCallback((event) => {
        // ESCAPE EVENT
        if(event.type === "keyup" && event.keyCode === 27){
            toggle();
            return;
        }
        // CLICK EVENT
        const container = nodeRef.current;
        if (container.contains(event.target) && container !== event.target) return;
        toggle();
    }, [toggle]);

    const addEvents = useCallback(
        () => {
            ["click", "keyup"].forEach(event => document.addEventListener(event, handleDocumentClick, true));
        },
        [handleDocumentClick],
    )
    
    const removeEvents = useCallback(
        () => {
        ["click", "keyup"].forEach(event => document.removeEventListener(event, handleDocumentClick, true));
        }, 
        [handleDocumentClick]
    )

    useEffect(() => {
        if(isOpen) addEvents();
        else removeEvents();
        return () => {
            removeEvents();
        }
    }, [isOpen, addEvents, removeEvents]);
    
    let classes = "dropdown";
    if(isOpen) classes += " show";
    if(arrow) classes += " with-arrow";
    if(dropDirection) classes += " drop" + dropDirection;
    if(className) classes += " " + className;
    return <DropdownContext.Provider value={{isOpen: isOpen, toggle: toggle}}><div {...attributes} ref={nodeRef} className={classes} /></DropdownContext.Provider>
}

Dropdown.propTypes = {
    /**
     * Current state of the dropdown.
     */
    isOpen: PropTypes.bool.isRequired,
    /**
     * Toggle the current state of the dropdown.
     */
    toggle: PropTypes.func.isRequired,
    dropDirection: PropTypes.oneOf(["up", "left", "right"]),
    className: PropTypes.string,
}