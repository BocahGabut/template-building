import React, { Component } from "react";

import '../scss/modal-image.scss'

class Modal extends Component {
    constructor(props){
        super(props)

        this.title = props.title

    }

    render(){
        return(
            <>
                <div className="modal-cst-container show">
                    <div className="modal-cst-dialog">
                        <div className="modal-cst-dialog-header">
                            <div className="title">Modal</div>
                            <div onClick={() => this.closeModal()} className="modal-close">x</div>
                        </div>
                        <div className="modal-cst-dialog-content">
                            <div className="row">
                                <div className="col-md-12">
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Modal