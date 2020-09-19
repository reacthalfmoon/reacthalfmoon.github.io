import React from 'react';
import PropTypes from 'prop-types';

export const NavbarContext = React.createContext(null);

export default function PageWrapper ({sidebarType, isSidebarOpen, toggle, withTransitions, withNavbar, withSidebar, withStickyAlert, className, children, ...attributes}) {
    let classes = "page-wrapper";
    if(withNavbar) {
        if(withNavbar==="bottom") classes += " with-navbar-fixed-bottom";
        else classes += " with-navbar";
    }
    if(withSidebar) classes += " with-sidebar";
    if(isSidebarOpen != null) {
        console.log(isSidebarOpen)
        if(isSidebarOpen===true){
            if(attributes["data-sidebar-hidden"]) delete attributes["data-sidebar-hidden"];
        }else{
            if(!attributes["data-sidebar-hidden"]) attributes["data-sidebar-hidden"] = "hidden";
        }
    }

    if(sidebarType) attributes["data-sidebar-type"] = sidebarType;
    if(withTransitions) classes += " with-transitions";
    if(className) classes += " " + className;
    return (
        <NavbarContext.Provider value={{withNavbar: withNavbar}}>
        <div className={classes} {...attributes}>
            {sidebarType==="overlayed-all" ? <div className="sidebar-overlay" onClick={toggle} /> : ""}
            {children}
            {withStickyAlert ? <div id="halfmoon-stickyalerts-container" className="sticky-alerts"/> : ""}
        </div>
        </NavbarContext.Provider>
    )
}

PageWrapper.propTypes = {
    withNavbar: PropTypes.oneOf([true, "bottom"]),
    withSidebar: PropTypes.bool,
    isSidebarOpen: PropTypes.bool,
    toggle: PropTypes.func,
    sidebarType: PropTypes.oneOf(["full-height", "overlayed-all"]),
    withTransitions: PropTypes.bool,
    withStickyAlert: PropTypes.bool,
    className: PropTypes.string,
}