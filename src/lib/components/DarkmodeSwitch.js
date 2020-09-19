import React from 'react';
import PropTypes from 'prop-types';
import Switch from './Switch';
import toggleDarkmode from './toggleDarkmode';

export default function DarkmodeSwitch ({checked, toggle, className}) {
    let classes = "";
    if(className) classes += " " + className;
    const toggleMode = () => {
        toggleDarkmode();
        toggle();
    }
    return <Switch id="halfmoon-darkmode-switch" checked={checked} toggle={toggleMode} className={classes}>Darkmode</Switch>
}

DarkmodeSwitch.propTypes = {
    /**
     * Maintains the state of dark mode.
     */
    checked: PropTypes.bool.isRequired,
    /**
     * Function to toggle the state of dark mode.
     */
    toggle: PropTypes.func.isRequired,
    className: PropTypes.string,
}