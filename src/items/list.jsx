import React, { Component } from 'react'

import ListDetails from './list-details'

const Items = (props) => {
    return(
        <div onClick={() => props.handleClick(props.title,props.icons,props.index)} className={`list-menu ${props.className}`}>
            <i className={props.icons}></i>
            <label>{props.title}</label>
        </div>
    )
}

const ListItems = (props) => {
    return(
        <>
            <div className="list-container">
                    <div className="property-container mt-3">
                        <div className="ra-sm-property image rounded">
                            <div className="website-stat pt-1 pb-1">
                                <label className='mt-1 mb-1'>Website Undangan kamu <strong> belum aktif</strong></label>
                                <label className='row-label mt-1 mb-1'>Masa undangan anda Tersisa <strong> 1 hari, 19 jam, 45 menit, 56 detik</strong></label>
                                <a href='/' className="upgrade-website">Upgrade Paket Undangan</a>
                            </div>
                        </div>
                    </div>
                    <div className="property-container mt-2">
                        <label>Konfigurasi Tema Undangan:</label>
                        <div className="list-content mt-1">
                            <div className="row">
                                <Items handleClick={(a,b,c) => props.handleClick(a,b,c)} index="0021898317" className="col-4" icons="far fa-heading"  title="Header" />
                                {/* <Items handleClick={(a,b) => props.handleClick(a,b)} className="col-4" icons="far fa-heading" title="Header" /> */}
                            </div>
                            <hr />
                        </div>
                    </div>
                    <div className="property-container ">
                        <label>Konfigurasi Undangan:</label>
                        <div className="list-content mt-1">
                            <div className="row">
                                <Items handleClick={(a,b,c) => props.handleClick(a,b,c)} className="col-4" index="0021898318" icons="far fa-user-friends" title="Profil Pasangan" />
                                <Items handleClick={(a,b) => props.handleClick(a,b)} className="col-4" icons="far fa-ballot" title="Detail Undangan" />
                                <Items handleClick={(a,b) => props.handleClick(a,b)} className="col-4" icons="far fa-pager" title="Cover Undangan" />
                                <Items handleClick={(a,b) => props.handleClick(a,b)} className="col-4" icons="far fa-comment-dots" title="Quote" />
                                <Items handleClick={(a,b) => props.handleClick(a,b)} className="col-4" icons="far fa-photo-video" title="Gallery" />
                                <Items handleClick={(a,b) => props.handleClick(a,b)} className="col-4" icons="far fa-book" title="Buku Tamu" />
                                <Items handleClick={(a,b) => props.handleClick(a,b)} className="col-4" icons="far fa-heart-circle" title="Love Story" />
                            </div>
                            <hr />
                            <div className="row">
                                <Items handleClick={(a,b) => props.handleClick(a,b)} className="col-4" icons="far fa-camera-movie" title="Live Streaming" />
                                <Items handleClick={(a,b) => props.handleClick(a,b)} className="col-4" icons="far fa-album-collection" title="Music Background" />
                                <Items handleClick={(a,b) => props.handleClick(a,b)} className="col-4" icons="far fa-clipboard-list" title="Daftar Ucapan" />
                            </div>
                            <hr />
                            <div className="row">
                                <Items handleClick={(a,b) => props.handleClick(a,b)} className="col-4" icons="far fa-envelope" title="Amplop Digital" />
                                <Items handleClick={(a,b) => props.handleClick(a,b)} className="col-4" icons="far fa-clipboard-check" title="Konfirmasi Kehadiran" />
                                <Items handleClick={(a,b) => props.handleClick(a,b)} className="col-4" icons="far fa-share-alt" title="Share Undangan" />
                            </div>
                        </div>
                    </div>
                </div>
        </>
    )
}

class List extends Component {
    constructor(props){
        super(props)

        this.state = {
            details: false,
            index: '',
            title: '',
            icons: '',
            type: '',
        }
    }

    handleDetails = (title,icons,type) => {
        this.setState({
            details: true,
            // index: index
            title:title,
            icons: icons,
        })

        if(type){
            this.setState({
                type: type,
            })
        }

    }

    handleBack = () => {
        this.setState({
            details: false
        })
    }

    render(){
        return(
            <>
                {
                    (this.state.details === false) 
                    ? 
                    <ListItems handleClick={(a,b,c) => this.handleDetails(a,b,c)} />
                    :
                    <ListDetails title={this.state.title} icons={this.state.icons} items={this.state.type} handleClick={() => this.handleBack()} />
                }
            </>
        )
    }
}

export default List