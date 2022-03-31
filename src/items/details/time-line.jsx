import React,{Component} from 'react'
import Modal from 'react-bootstrap/Modal'
import { FormText } from "../../component/other";

import { ref,uploadBytesResumable,getDownloadURL,deleteObject } from '@firebase/storage'
import axios from "axios";
import { storage } from "../../firebase";
import { connect } from 'react-redux'
import ReactReadMoreReadLess from "react-read-more-read-less";
import { updateState,getDataTimeline } from "../../store";

import { baseUrl,uniqID } from '../../component/Item';
var uniqId = new Date().getTime() + Math.random()

class TimeLine extends Component {
    constructor(props){
        super(props)

        // this.timelineSection = props.data.reduce.timeline.data[0]
        
        this.state = {
            modalData: [],
            modalEdit: false,
            modalShow: false,
            proggress: false
        }
        
    }
    
    addItems = () => {
        this.setState({
            modalEdit: false,
            modalShow: true
        })
    }

    onHide = () => {
        this.setState({
            modalShow: false,
            modalData: []
        })
    }

    editItems = (props) => {
        this.setState({
            modalEdit: true,
            modalShow: true,
            modalData: {...props}
        })
    }

    componentDidMount(){
        getDataTimeline()
    }

    deleteItems = (id,image) => {
        this.setState({
            proggress: true
        })
        const desertRef = ref(storage, image);
        deleteObject(desertRef)
        .then(() => {
            var config = {
                method: 'GET',
                url: `${baseUrl()}/api/story?Api-Keys-Rumah-akad=6be41184cdca86ebbc56da4433f303ae&delete=${id}`,
            }
            axios(config)
            .then((response) => {
                setTimeout(() => {
                    getDataTimeline()
                    this.setState({
                        proggress: false
                    })
                }, 350);
            })
        })
    }

    render(){
        const timelineSection = this.props.data.reduce.timeline.data[0]
     
        const handleInput = (e,index) => {
            const target = e.target;
            const value = target.type === 'checkbox' ? target.checked : target.value;
            const name = target.name;
    
            this.props.hanldeDispact(value,name,index,'timeline')
        }
        
        class ModalTimeline extends Component{

            constructor(props){
                super(props)
                
                this.state = {
                    title: '',
                    subTitle: '',
                    description: '',
                    id: '',
                    image: [],
                    upload: false,
                    uploadBar: 0,
                    oldImage: '',
                    oldUrl : ''
                }

            }
            
            async componentDidMount(){
                const setEdit = () => this.setState({
                    title: this.props.edit ? this.props.data.title : '',
                    subTitle: this.props.edit ? this.props.data.subTitle : '',
                    description: this.props.edit ? this.props.data.description : '',
                    id: this.props.edit ? this.props.data.id : '',
                    oldImage: this.props.edit ? this.props.data.image : '',
                    oldUrl: this.props.edit ? this.props.data.url : '',
                })

                await setEdit()
            }

            handleSave = e => {
                if(this.state.image.length > 0){
                    try {
                        const storageRef = ref(storage, `/timeline-file/${uniqID()}`)
                        const uploadTask = uploadBytesResumable(storageRef,this.state.image[0])
                        
                        uploadTask.on("state_changed",(snapShot) => {
                                const prog = Math.round((snapShot.bytesTransferred / snapShot.totalBytes) * 100)
                                this.setState({
                                    upload: true,
                                    uploadBar: prog,
                                })
                            }, (err) => console.log(err),
                            () => {
                                getDownloadURL(uploadTask.snapshot.ref)
                                .then((url) => {
                                    var qs = require('qs')
                                        var data = qs.stringify({
                                            title : this.state.title,
                                            sub_title : this.state.subTitle,
                                            description : this.state.description,
                                            image : url,
                                        })
        
                                        axios({
                                            method: 'POST',
                                            url : `${baseUrl()}/api/story`,
                                            data : data,
                                            headers: {
                                                'Api-Keys-Rumah-akad' :  '6be41184cdca86ebbc56da4433f303ae',
                                            }
                                        })
                                        .then((response) => {
                                            // dispatch((refreshState()))
                                            setTimeout(() => {
                                                getDataTimeline()
                                                this.setState({
                                                    upload: false,
                                                    uploadBar: 0,
                                                })
                                            }, 350);
                                        })
                                        this.props.onHide()
                                })
                            }
                        
                        )
        
                    } catch (error) {
                        console.log(error)
                    }
                }
        
                e.preventDefault();
            }
            
            handleUpdate = e => {
                if(this.state.image.length > 0){
                    const desertRef = ref(storage, this.state.oldUrl);
                    deleteObject(desertRef)
                    try {
                        const storageRef = ref(storage, `/timeline-file/${uniqID()}`)
                        const uploadTask = uploadBytesResumable(storageRef,this.state.image[0])

                        
                        uploadTask.on("state_changed",(snapShot) => {
                                const prog = Math.round((snapShot.bytesTransferred / snapShot.totalBytes) * 100)
                                this.setState({
                                    upload: true,
                                    uploadBar: prog,
                                })
                            }, (err) => console.log(err),
                            () => {
                                getDownloadURL(uploadTask.snapshot.ref)
                                .then((url) => {
                                    var qs = require('qs')
                                        var data = qs.stringify({
                                            title : this.state.title,
                                            sub_title : this.state.subTitle,
                                            description : this.state.description,
                                            image : url,
                                            id:this.state.id
                                        })
        
                                        axios({
                                            method: 'PUT',
                                            url : `${baseUrl()}/api/story`,
                                            data : data,
                                            headers: {
                                                'Api-Keys-Rumah-akad' :  '6be41184cdca86ebbc56da4433f303ae',
                                            }
                                        })
                                        .then((response) => {
                                            // dispatch((refreshState()))
                                            setTimeout(() => {
                                                getDataTimeline()
                                                this.setState({
                                                    upload: false,
                                                    uploadBar: 0,
                                                })
                                                this.props.onHide()
                                            }, 350);
                                        })
                                })
                            }
                        
                        )
        
                    } catch (error) {
                        console.log(error)
                    }
                }else{
                    var qs = require('qs')
                    var data = qs.stringify({
                        title: this.state.title, 
                        sub_title: this.state.subTitle, 
                        description: this.state.description, 
                        image: '', 
                        id: this.state.id
                    })

                    axios({
                        method: 'PUT',
                        url: `${baseUrl()}/api/story`,
                        data: data,
                        headers: {
                            'Api-Keys-Rumah-akad': '6be41184cdca86ebbc56da4433f303ae'
                        }
                    }).then((response) => {
                        // dispatch((refreshState()))
                        setTimeout(() => {
                            getDataTimeline()
                            this.props.onHide()
                        }, 350);
                    })
                }
        
                e.preventDefault();
            }
            
            setImage = e => {
                const [file] = e.target.files
                let img = document.getElementById('image_preview-9921271')
        
                if(file){
                    img.src = URL.createObjectURL(file)
                    this.setState({
                        image:e.target.files
                    })
                }
        
            }

            render(){
                return(
                    <Modal
                        {...this.props}
                        size="md"
                        aria-labelledby="contained-modal-title-vcenter"
                        centered scrollable>
                        <Modal.Header closeButton>
                            <Modal.Title className="h5" id="contained-modal-title-vcenter" >
                                {(this.props.edit) ? 'Update story' : 'Add new story'}
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body className="pb-3">
                            {
                                this.props.edit 
                                ? 
                                <form onSubmit={this.handleUpdate}>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <img id='image_preview-9921271' style={{width:'100%',height:250,objectFit:'cover'}} src={this.state.oldImage} alt="preview" />
                                        </div>
                                        <div className="col-md-12 mt-2">
                                            <div className="form-group">
                                                <label>Title</label>
                                                <input required defaultValue={this.state.title} onChange={(e) => this.setState({title:e.target.value})} maxLength="20" type="text" className="form-control" />
                                                <span className="text-muted">Maks length 20</span>
                                            </div>
                                        </div>
                                        <div className="col-md-12 mt-2">
                                            <div className="form-group">
                                                <label>Sub title</label>
                                                <input required defaultValue={this.state.subTitle} onChange={(e) => this.setState({subTitle:e.target.value})} maxLength="20" type="text" className="form-control" />
                                                <span className="text-muted">Maks length 20</span>
                                            </div>
                                        </div>
                                        <div className="col-md-12 mt-2">
                                            <div className="form-group">
                                                <label>Description</label>
                                                <textarea defaultValue={this.state.description} minLength={120} onChange={(e) => this.setState({description:e.target.value})} required rows="4" style={{resize:'none'}} className="form-control"></textarea>
                                                <span className="text-muted">Min length 120</span>
                                            </div>
                                        </div>
                                        <div className="col-md-12 mt-2">
                                            <div className="form-group">
                                                <label>Image</label>
                                                <input onChange={this.setImage} type="file" id='image_upload-9921271' className="form-control" accept="image/png, image/jpeg" />
                                            </div>
                                        </div>
                                        <div className="col-md-12 mt-3">
                                            <div className="form-group">
                                                <input type="submit" className="form-control btn btn-info pt-2 pb-2" style={{color:'#fff'}} value="Update story" />
                                            </div>
                                        </div>
                                        <div className="col-md-12 mt-3">
                                            {
                                                    (this.state.upload) ? 
                                                    <div className="progress mt-1 mb-1">
                                                        <span className="progress-bar" style={{width: `${this.state.uploadBar}%` }}></span>
                                                    </div> : ''
                                            }
                                        </div>
                                    </div>
                                </form> 
                                :
                                <form onSubmit={this.handleSave}>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <img id='image_preview-9921271' style={{width:'100%',height:250,objectFit:'cover'}} src="./no_image.jpg" alt="preview" />
                                        </div>
                                        <div className="col-md-12 mt-2">
                                            <div className="form-group">
                                                <label>Title</label>
                                                <input required onChange={(e) => this.setState({title:e.target.value})} maxLength="20" type="text" className="form-control" />
                                                <span className="text-muted">Maks length 20</span>
                                            </div>
                                        </div>
                                        <div className="col-md-12 mt-2">
                                            <div className="form-group">
                                                <label>Sub title</label>
                                                <input required onChange={(e) => this.setState({subTitle:e.target.value})} maxLength="20" type="text" className="form-control" />
                                                <span className="text-muted">Maks length 20</span>
                                            </div>
                                        </div>
                                        <div className="col-md-12 mt-2">
                                            <div className="form-group">
                                                <label>Description</label>
                                                <textarea minLength={120} onChange={(e) => this.setState({description:e.target.value})} required rows="4" style={{resize:'none'}} className="form-control"></textarea>
                                                <span className="text-muted">Min length 120</span>
                                            </div>
                                        </div>
                                        <div className="col-md-12 mt-2">
                                            <div className="form-group">
                                                <label>Image</label>
                                                <input required onChange={this.setImage} type="file" id='image_upload-9921271' className="form-control" accept="image/png, image/jpeg" />
                                            </div>
                                        </div>
                                        <div className="col-md-12 mt-3">
                                            <div className="form-group">
                                                <input type="submit" className="form-control btn btn-info pt-2 pb-2" style={{color:'#fff'}} value="Add story" />
                                            </div>
                                        </div>
                                        <div className="col-md-12 mt-3">
                                            {
                                                    (this.state.upload) ? 
                                                    <div className="progress mt-1 mb-1">
                                                        <span className="progress-bar" style={{width: `${this.state.uploadBar}%` }}></span>
                                                    </div> : ''
                                            }
                                        </div>
                                    </div>
                                </form> 
                            }
                        </Modal.Body>
                    </Modal>
                )
            }
        }

        return(
            <>
            <div className="property-container mt-1">
                <ModalTimeline data={this.state.modalData} edit={this.state.modalEdit ? true : false} show={this.state.modalShow} onHide={() => this.onHide()} />
                    <div className="property-content mb-1">
                        <FormText title="Title story" value={timelineSection.settings.title} handleInput={(e) => handleInput(e,'settings')} name="title" />
                        <div className="add-timeline" onClick={() => this.addItems()} >Add new story</div>
                    </div>
                    <label>Time line story</label>
                    <div className="property-content mt-1">
                        <div className="container-timeline-edit">
                            {
                                timelineSection.data.map((items,index) => {
                                    return(
                                        <div className={(index >= 1 ) ? `items-timeline mt-2` : `items-timeline`} key={index}>
                                            <img src={items.image} alt="timeline items" />
                                            <div className="title">{items.title}</div>
                                            <div className="sub-title">{items.sub_title}</div>
                                            <div className="description">
                                                <ReactReadMoreReadLess
                                                    charLimit={100}
                                                    readMoreText={"Read more"}
                                                    readLessText={"Read less"}>
                                                    {items.description}
                                                </ReactReadMoreReadLess>
                                            </div>
                                            <div className="button-timeline-block">
                                                <div className="button--" onClick={() => this.deleteItems(items.id_story_timeline,items.url)}>
                                                    <i className='fal fa-trash'></i>
                                                    Delete
                                                    {/* {
                                                        (this.state.proggress) ? <div className="lds-dual-ring"></div> : ''
                                                    } */}
                                                </div>
                                                <div className="button--" onClick={() => this.editItems({title:items.title,subTitle:items.sub_title,description:items.description,id:items.id_story_timeline,url:items.url,image:items.image})}>
                                                    <i className='fal fa-edit'></i>
                                                    Edit
                                                </div>
                                            </div>
                                            {
                                                this.state.proggress ? 
                                                <div className="proggress-container">
                                                    <div className="lds-dual-ring"></div>
                                                </div>
                                                : ''
                                            }
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        data : state
    }
}

const dispacthToState = (dispact) => {
    return {
        hanldeDispact: (value,name,index,tab) => dispact(updateState({[name] : value,name,index : index,tab: tab}))
    }
}


export default connect(mapStateToProps,dispacthToState)(TimeLine)