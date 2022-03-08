import React, { memo } from 'react'
import {NavbarBuilder,SidebarBuilder} from '../component/navbar-builder'
import ModalImage from "../component/modal-image";
import { AddLocalStorage } from '../main';
import Theme200219 from '../editable/theme-2';

import Modal from '../component/modal';

const Builder = memo(function Builder(){
    
    const setEditable = () => {
        AddLocalStorage('editableContent',true)
    }

    setEditable()

    // const getIframe = () => {
    //     const myIframe = document.getElementById('frame-preview')
    //     setTimeout(() => {
    //         const iframeWindow = myIframe.contentWindow
    //         console.log(iframeWindow.postMessage)
    //     }, 3500);
    // }

    // getIframe()

    return(
        <>
            <NavbarBuilder />
            <SidebarBuilder />
            <ModalImage />
            <div className="builder ">
                <div className="builder-container" id='builder-container'>
                    {/* <iframe className="responsive-iframe" id='frame-preview' title='invitation'>
                        <Theme200219/>
                    </iframe> */}
                    {/* <Iframe url="http://localhost:3000/theme2-edit" className="responsive-iframe"/> */}
                    <div className="responsive-iframe">
                        <Theme200219 />
                    </div>
                    {/* <FrameApp /> */}
                    {/* <iframe className="responsive-iframe" id='frame-preview' title='invitation' src="http://localhost:3000/theme2-edit"></iframe> */}
                    {/* <Frame
                        className="responsive-iframe"
                        initialContent='<!DOCTYPE html><html><head></head><body><div id="iframe"></div></body></html>'
                        mountTarget='#iframe'>
                        <Theme200219 />
                    </Frame> */}
                </div>
            </div>
        </>
    )
})

export default Builder