import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import ModalContext from './ModalContext';

export default function ModalContent({media, children, className, ...attributes}) {
    const {toggle, withCloseButton} = useContext(ModalContext);
    let classes = "modal-content";
    if(media) classes += " modal-content-media";
    if(className) classes += " " + className;
    return (
        <div {...attributes} className={classes}>
            {withCloseButton ? <div onClick={toggle} className="close"><span>&times;</span></div> : "" }
            {children}
        </div>
    )
}

ModalContent.propTypes = {
    className: PropTypes.string,
    noCloseOption: PropTypes.bool,
    media: PropTypes.bool,
}