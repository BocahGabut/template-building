import React,{Component} from 'react'
import '../scss/modal-image.scss'

import { updateState } from "../store";

import { connect } from "react-redux";

class ModalIcons extends Component{

    closeModal = () => {
        let modal = document.querySelectorAll('.modal-image-container.show')

        for(let i = 0;i < modal.length;i++){
            modal[i].classList.remove('show')
        }

    }

    render(){
        return(
            <>
                <div className="modal-icons-container show">
                    <div className="modal-icons-dialog">
                        <div className="modal-icons-dialog-header">
                            <div className="title">Storage Image</div>
                            <div onClick={() => this.closeModal()} className="modal-close">x</div>
                        </div>
                        <div className="modal-icons-dialog-content">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

const dispacthToState = (dispact) => {
    return {
        hanldeDispact: (image,name,index,tab) => dispact(updateState({[name]:image,name,index,tab: tab}))
    }
}

export default connect(null,dispacthToState)(ModalIcons)