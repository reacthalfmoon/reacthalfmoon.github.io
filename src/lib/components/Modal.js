import React, {useEffect, useCallback} from 'react';
import PropTypes from 'prop-types';
import ModalContext from './ModalContext';

export default function Modal({isOpen, toggle, withCloseButton, full, className, ...attributes}) {
    // const nodeRef = useRef(null);
    const handleDocumentClick = useCallback((event) => {
        // ESCAPE EVENT
        if(event.type === "keyup" && event.keyCode === 27){
            toggle();
            return;
        }

        // CLICK EVENT
        if(event.target && event.target.classList.contains('modal-dialog')){
            toggle();
            return;
        }
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
    
    let classes = "modal";
    if(full) classes += " modal-full";
    if(isOpen) classes += " show";
    if(className) classes += " " + className;
    return <ModalContext.Provider value={{toggle: toggle, withCloseButton: withCloseButton}}><div {...attributes} className={classes} /></ModalContext.Provider>
}

Modal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    toggle: PropTypes.func.isRequired,
    full: PropTypes.bool,
    withCloseButton: PropTypes.bool,
    className: PropTypes.string,
}