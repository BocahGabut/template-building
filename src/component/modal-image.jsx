import React,{Component} from 'react'
import '../scss/modal-image.scss'
import Dropzone from 'react-dropzone';

import { ref,uploadBytesResumable,getDownloadURL,deleteObject } from '@firebase/storage'
import { storage } from '../firebase';
import axios from 'axios'
import { updateState } from "../store";

import { connect } from "react-redux";

var uniqId = new Date().getTime() + Math.random();

class ModalImage extends Component{
    constructor(props){
        super(props)

        this.state = {
            imageList : [],
            upload: false,
            uploadBar: 0,
            storage: []
        }
        
    }

    async componentDidMount() {
        this.getAlldata()
    }

    getAlldata = () => {
        axios.get('http://localhost/api.rumahakad/api/storage?Api-Keys-Rumah-akad=6be41184cdca86ebbc56da4433f303ae')
        .then((response) => {
            this.setState({
                storage : response.data.data
            })
        })
    }


    onDrop = (acceptedFiles) =>{
        acceptedFiles.map(async (file,index) => {

            try{
                const storageRef = ref(storage, `/files/${uniqId}-${index}`)
                const uploadTask = uploadBytesResumable(storageRef,file)
                
                if(this.state.upload === true) {return}
                uploadTask.on("state_changed", (snapShot) => {
                    const prog = Math.round((snapShot.bytesTransferred / snapShot.totalBytes) * 100)

                    this.setState({
                        upload: true,
                        uploadBar: prog
                    })

                    },
                        (err) => console.log(err),
                        () => {
                            getDownloadURL(uploadTask.snapshot.ref)
                            .then((url) => {
                                var qs = require('qs')
                                var data = qs.stringify({
                                    url : url
                                })

                                axios({
                                    method: 'POST',
                                    url : 'http://localhost/api.rumahakad/api/storage',
                                    data : data,
                                    headers: {
                                        'Api-Keys-Rumah-akad' :  '6be41184cdca86ebbc56da4433f303ae',
                                    }
                                })
                                .then((response) => {
                                    this.getAlldata()
                                })
                                this.setState({
                                    upload: false,
                                    uploadBar: 0
                                })
                                this.getAlldata()
                            })   
                        }
                    )

            }catch{

            }
        })
    }

    handleDelete = (image,id) => {
        const desertRef = ref(storage, image);

        deleteObject(desertRef)
        .then(() => {
            var config = {
                method: 'GET',
                url: `http://localhost/api.rumahakad/api/storage?Api-Keys-Rumah-akad=6be41184cdca86ebbc56da4433f303ae&delete=${id}`,
            }
            axios(config)
            .then((response) => {
                this.getAlldata()
            })
        })
    }

    closeModal = () => {
        let modal = document.querySelectorAll('.modal-image-container.show')

        for(let i = 0;i < modal.length;i++){
            modal[i].classList.remove('show')
        }

    }
    
    handleSetImage = (image) => {
        var getTarget = document.querySelectorAll('.modal-image-container')[0]
        
        this.props.hanldeDispact(image,getTarget.getAttribute('data-name'),getTarget.getAttribute('data-index'),getTarget.getAttribute('data-target'))
    }

    render(){
        return(
            <>
                <div className="modal-image-container">
                    <div className="modal-image-dialog">
                        <div className="modal-image-dialog-header">
                            <div className="title">Storage Image</div>
                            <div onClick={() => this.closeModal()} className="modal-close">x</div>
                        </div>
                        <div className="modal-image-dialog-content">
                            <div className="row">
                                <div className="col-6 d-flex flex-column justify-content-between pb-2">
                                    <Dropzone 
                                    onDrop={this.onDrop}
                                    accept={'image/*'}>
                                        {({getRootProps, getInputProps}) => (
                                        <section className="container-dropzone">
                                            <div {...getRootProps({className: 'dropzone'})}>
                                                <input {...getInputProps()} />
                                                <p>Drop files here or click to upload</p>
                                            </div>
                                        </section>
                                        )}
                                    </Dropzone>
                                    {
                                        (this.state.upload === true)
                                        ?
                                        <div className="progress">
                                            <span className="progress-bar" style={{width: `${this.state.uploadBar}%` }}></span>
                                        </div>
                                        : ''
                                    }
                                </div>
                                <div className="col-6" style={{backgroundColor:'rgb(63,52,54)',height:400}}>
                                    <div className="row">
                                        {/* <div className="col-md-12">
                                            <div className="container-path">
                                                <input type="text" id='url-image' placeholder='https://url-website/image.jpg' />
                                                <div onClick={() => this.handleUrlConvert()} className="button-add-image">
                                                    Add image
                                                </div>
                                            </div>
                                        </div> */}
                                        <div className="col-md-12">
                                            <div className="image-container">
                                                <div className="image-list" id='image-list'>
                                                    {
                                                        (this.state.storage.map((items,index) => {
                                                                return(
                                                                    <div onClick={() => this.handleSetImage(items.path)} className="image-items" key={index}>
                                                                        <img src={items.path} alt="" />
                                                                        <div onClick={() => this.handleDelete(items.path,items.id_storage)} className="del">x</div>
                                                                    </div>
                                                                )
                                                        }))
                                                    }
                                                </div>
                                            </div>
                                        </div>
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

export default connect(null,dispacthToState)(ModalImage)