import React from 'react';
import PropTypes from 'prop-types';

export default function Col ({size, sm, md, lg, xl, auto, offset, order, className, ...attributes}){
    let classes = "col";
    if(size) classes = "col-" + size;
    if(auto) classes = "col-auto";
    if(sm){
        if(sm===true) classes += " col-sm";
        else classes += " col-sm-" + sm;
    }
    if(md){
        if(md===true) classes += " col-md";
        else classes += " col-md-" + md;
    }
    if(lg){
        if(lg===true) classes += " col-lg";
        else classes += " col-lg-" + lg;
    }
    if(xl){
        if(xl===true) classes += " col-xl";
        else classes += " col-xl-" + xl;
    }

    // OFFSET
    if(offset) {
        if(typeof offset === "number") classes += " offset-" + offset;
        else if(typeof offset === "object"){
            if(offset.size) classes += " offset-" + offset.size;
            if(offset.sm) classes += " offset-sm-" + offset.sm;
            if(offset.md) classes += " offset-md-" + offset.md;
            if(offset.lg) classes += " offset-lg-" + offset.lg;
            if(offset.xl) classes += " offset-xl-" + offset.xl;
        }
    }

    // OFFSET
    if(offset) {
        if(typeof offset === "number") classes += " offset-" + offset;
        else if(typeof offset === "object"){
            if(offset.size) classes += " offset-" + offset.size;
            if(offset.sm) classes += " offset-sm-" + offset.sm;
            if(offset.md) classes += " offset-md-" + offset.md;
            if(offset.lg) classes += " offset-lg-" + offset.lg;
            if(offset.xl) classes += " offset-xl-" + offset.xl;
        }
    }    
    
    // ORDER    
    if(order) {
        if(typeof order === "number") classes += " order-" + order;
        else if(typeof order === "object"){
            if(order.pos) classes += " order-" + order.pos;
            if(order.sm) classes += " order-sm-" + order.sm;
            if(order.md) classes += " order-md-" + order.md;
            if(order.lg) classes += " order-lg-" + order.lg;
            if(order.xl) classes += " order-xl-" + order.xl;
        }
    }
    
    if(className) classes += " " + className;
    return <div {...attributes} className={classes} />
}

const offsetType = PropTypes.shape({
    size: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]),
    sm: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]),
    md: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]),
    lg: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]),
    xl: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]),
});

const orderType = PropTypes.shape({
    pos: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
    sm: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
    md: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
    lg: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
    xl: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
});

Col.propTypes = {
    /**
     * Size of column for all breakpoints.
     */
    size: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
    /**
     * Size of column for breakpoint small and up.
     */
    sm: PropTypes.oneOf([true, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
    /**
     * Size of column for breakpoint medium and up.
     */
    md: PropTypes.oneOf([true, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
    /**
     * Size of column for breakpoint large and up.
     */
    lg: PropTypes.oneOf([true, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
    /**
     * Size of column for breakpoint extra-large and up.
     */
    xl: PropTypes.oneOf([true, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
    /**
     * Left margin equal to width of specified number of columns.
     */
    offset: PropTypes.oneOfType([PropTypes.number, offsetType]),
    /**
     * Ordering of columns based on the breakpoint.
     */
    order: PropTypes.oneOfType([PropTypes.number, orderType]),
    /**
     * Variable width column.
     */
    auto: PropTypes.bool,
}

