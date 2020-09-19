import React from 'react';
import PropTypes from 'prop-types';

export default function Table ({noOuterPadding, striped, hoverable, bordered, responsive, className, children, ...attributes}) {
    let classes = "table";
    if(noOuterPadding) classes += " table-no-outer-padding";
    if(striped) classes += " table-striped";
    if(hoverable) classes += " table-hover";
    if(bordered){
        if(bordered===true) classes += " table-bordered";
        if(bordered==="outer") classes += " table-outer-bordered";
        if(bordered==="inner") classes += " table-inner-bordered";
    }
    if(className) classes += " " + className;
    if(responsive){
        return (
            <div className="table-responsive">
                <table {...attributes} className={classes}>{children}</table>
            </div>
        )
    }
    return <table {...attributes} className={classes} >{children}</table>
}

Table.propTypes = {
    className: PropTypes.string,
    noOuterPadding: PropTypes.bool,
    striped: PropTypes.bool,
    hoverable: PropTypes.bool,
    bordered: PropTypes.oneOf([true, "outer", "inner"]),
    responsive: PropTypes.bool,
}