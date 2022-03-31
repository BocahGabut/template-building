import React, { Component,useState } from "react";
import '../scss/builder.scss'

import List from "../items/list";
import {isMobile} from 'react-device-detect';
import { BottomSheet } from 'react-spring-bottom-sheet'
import 'react-spring-bottom-sheet/dist/style.css'

import {saveData} from '../store'

class NavbarBuilder extends Component {
    constructor(props){
        super(props)

        this.state = {
            desktop:true,
            mobile:false,
            tablet:false,
            fullscreen:false,
        }

    }

    fullscreen = () => {
        window.moveTo(0, 0);
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
            this.setState({
                fullscreen:true,
            })
        } else {
          if (document.exitFullscreen) {
            document.exitFullscreen();
            this.setState({
                fullscreen:false,
            })
          }
        }
    }

    changeScreen = (type) => {
        var container = document.getElementById('builder-container')
        switch(type){
            case 'desktop' :
                container.style.width = '100%'
                this.setState({
                    desktop:true,
                    mobile:false,
                    tablet:false
                })
                break
            case 'tablet' :
                container.style.width = '768px'
                this.setState({
                    desktop:false,
                    mobile:false,
                    tablet:true
                })
                break
            case 'mobile' :
                container.style.width = '375px'
                this.setState({
                    desktop:false,
                    mobile:true,
                    tablet:false
                })
                break
                default : container.style.width = '100%'
        }
    }

    saveToDatabase = () => {
        saveData()
    }

    changeNavbar = (stat) => {
        if(isMobile){
            if(stat === 'nav'){
                document.querySelectorAll('.navbar-builder-top')[0].classList.add('none')
                document.querySelectorAll('.icons--')[0].classList.remove('none')
                document.querySelectorAll('.builder')[0].classList.add('top-0')
                document.querySelectorAll('.builder')[0].classList.add('w-100')
                document.querySelectorAll('.side-bottom')[0].classList.add('none')
            }else {
                document.querySelectorAll('.icons--')[0].classList.add('none')
                document.querySelectorAll('.builder')[0].classList.remove('top-0')
                document.querySelectorAll('.builder')[0].classList.remove('w-100')
                document.querySelectorAll('.navbar-builder-top')[0].classList.remove('none')
                document.querySelectorAll('.side-bottom')[0].classList.remove('none')
            }
        }else {
            if(stat === 'nav'){
                document.querySelectorAll('.navbar-builder-top')[0].classList.add('none')
                document.querySelectorAll('.sidebar-container')[0].classList.add('none')
                document.querySelectorAll('.icons--')[0].classList.remove('none')
                document.querySelectorAll('.builder')[0].classList.add('top-0')
                document.querySelectorAll('.builder')[0].classList.add('w-100')
            }else {
                document.querySelectorAll('.icons--')[0].classList.add('none')
                document.querySelectorAll('.builder')[0].classList.remove('top-0')
                document.querySelectorAll('.builder')[0].classList.remove('w-100')
                document.querySelectorAll('.navbar-builder-top')[0].classList.remove('none')
                document.querySelectorAll('.sidebar-container')[0].classList.remove('none')
            }
        }
    }

    render(){
        return(
            <>
                <div className={`navbar-builder-top ${isMobile ? 'mobile' : ''}`}>
                    <div className="navbar-top-left">
                        <ul>
                            {/* <li className={(this.state.desktop === true) ? 'active' : ''} onClick={() => this.changeScreen('desktop')}>
                                <i className="fal fa-desktop"></i>
                            </li>
                            <li className={(this.state.tablet === true) ? 'active' : ''} onClick={() => this.changeScreen('tablet')}>
                                <i className="fal fa-tablet-android"></i>
                            </li>
                            <li className={(this.state.mobile === true) ? 'active' : ''} onClick={() => this.changeScreen('mobile')}>
                                <i className="fal fa-mobile-android"></i>
                            </li> */}
                            <li data-bs-toggle="tooltip" data-bs-placement="bottom" title="Save data" onClick={this.saveToDatabase}>
                                <i className="fal fa-save"></i>
                            </li>
                        </ul>
                    </div>
                    <div className="navbar-top-center">
                        <ul>
                            <li>
                                <a href="/">
                                    <img src="/rumah-akad-logo.png" alt="" />
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="navbar-top-right">
                        <ul>
                            <li data-tip="Fullscreen" className={(this.state.fullscreen === true) ? 'active' : ''} onClick={()=> this.fullscreen()}>
                                <i className="fal fa-expand-arrows"></i>
                            </li>
                            {/* <li data-tip="Refresh" onClick={() => this.loadIframe()}>
                                <i className="fal fa-sync"></i>
                            </li> */}
                            <li data-tip="Preview" onClick={() => this.changeNavbar('nav')}>
                                <i className="fal fa-eye"></i>
                            </li>
                            {/* <li data-tip="Clear canvas">
                                <i className="fal fa-trash"></i>
                            </li> */}
                        </ul>
                    </div>
                </div>
                <div onClick={() => this.changeNavbar('00')} className="icons-- none">
                    <i className="fal fa-eye-slash"></i>
                </div>
            </>
        )
    }
}

const SidebarBuilder = () => {
    const [open, setOpen] = useState(false)
    const [content, setcontent] = useState();
    
    const onOpen = (contentValue) => {
        setOpen(true)
        setcontent(contentValue)
    }

    const onDismiss = () => {
        setOpen(false)
    }
    return(
        isMobile 
        ?
        <div className="side-bottom">
            <div className="bottom-view">
                <span>
                    <i className="fal fa-paint-brush"></i>
                </span>
                <span className={`${(content === '00327aja82') ? 'active' : ''}`} onClick={() => onOpen('00327aja82')}>
                    <i className="fal fa-th-large"></i>
                </span>
                <span>
                    <i className="fal fa-bars"></i>
                </span>
            </div>
            <BottomSheet 
                onDismiss={onDismiss}
                open={open}
                snapPoints={({ maxHeight }) => [
                    maxHeight - maxHeight / 10,
                    maxHeight / 4,
                    maxHeight * 0.6,
                ]}
                scrollLocking={true}
                blocking={false}
            >
                <div className="side-content pb-5">
                    {
                        (content === '00327aja82') ? <List className="mobile" /> : ''
                    }
                </div>
            </BottomSheet>
        </div>
        :
        <div className="sidebar-container">
            <div className="side-top">
                <span>
                    <i className="fal fa-paint-brush"></i>
                </span>
                <span className="active">
                    <i className="fal fa-th-large"></i>
                </span>
                <span>
                    <i className="fal fa-bars"></i>
                </span>
            </div>
            <div className="side-content pb-5">
                <List />
            </div>
        </div>
    )
}

export {NavbarBuilder,SidebarBuilder}