import React, { Component } from 'react'
import {NavbarBuilder,SidebarBuilder} from '../component/navbar-builder'
import ModalImage from "../component/modal-image";
import Theme200219 from '../editable/theme-2';
import {isMobile} from 'react-device-detect';
import axios from 'axios';
import { connect } from 'react-redux';
import { dataGallery } from '../store';

class Builder extends Component {

    async componentDidMount() {
        const promise = axios.get('http://localhost/api.rumahakad/api/gallery?Api-Keys-Rumah-akad=6be41184cdca86ebbc56da4433f303ae')
        
        promise
        .then((result) => {
            this.props.hanldeDispact(result.data.data)
        })
        .catch(error => console.log(error))
    }

    render() {
        return(
            <>
                <NavbarBuilder />
                <SidebarBuilder />
                <ModalImage />
                <div className={`builder ${isMobile ? 'mobile' : ''}`}>
                    <div className="builder-container" id='builder-container'>
                        <div className="responsive-iframe">
                            <Theme200219 />
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

const dispacthToState = (dispact) => {
    return {
        hanldeDispact: (data) => dispact(dataGallery({data: data}))
    }
}

export default connect(null,dispacthToState)(Builder)