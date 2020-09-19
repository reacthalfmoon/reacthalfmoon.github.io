import React, {createRef} from 'react';
import PropTypes from 'prop-types';

export default function Alert ({color, filled, dismissible, className, children, ...attributes}) {
    const alertRef = createRef();
    // const dismiss = () => {alertRef.current.classList.add(".dispose")};
    let classes = "alert";
    if(color) classes += " alert-" + color;
    if(filled){
        if(filled===true) classes += " filled";
        else classes += " filled-" + filled;
    }
    if(className) classes += " " + className;
    return (
        <div {...attributes} className={classes} ref={alertRef}>
            {
                dismissible ?
                <button className="close" type="button" onClick={() => {alertRef.current.classList.add("dispose")}}>
                    <span>&times;</span>
                </button>    
                :
                ""
            }
            {children}
        </div>
    )
}

Alert.propTypes = {
    className: PropTypes.string,
    color: PropTypes.oneOf(["primary", "secondary", "success", "danger"]),
    /**
     * Alerts can be filled in light mode `lm`, dark mode `dm` or in both `true`
     */
    filled: PropTypes.oneOf([true, "lm", "dm"]),
    /**
     * Whether the alert is dismissible.
     */
    dismissible: PropTypes.bool,
}