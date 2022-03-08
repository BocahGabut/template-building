import React from "react";

const toggle = (e) => {
    document.getElementById(e).classList.toggle('sm-open')
}

const Collapse = ({title,keyId,component}) => {
    return(
        <>
            <div className="collapse-container"  id={keyId}>
                <div className="collapse-button" onClick={() => toggle(keyId)}>
                    <div className="caret">
                        <svg viewBox="0 0 24 24"><path fill="currentColor" d="M7,10L12,15L17,10H7Z"></path></svg>
                    </div>
                    <label>{title}</label>
                </div>
                <div className="collapse-content">
                    {
                        component
                    }
                </div>
            </div>
        </>
    )
}

export default Collapse