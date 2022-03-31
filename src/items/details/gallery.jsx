import React,{useState} from "react";
import Modal from 'react-bootstrap/Modal'
import Slider from "react-slick";
import { ref,uploadBytesResumable,getDownloadURL,deleteObject } from '@firebase/storage'
import axios from "axios";

import { baseUrl } from "../../component/Item";

import { updateState } from "../../store";
import { FormSelect,FormText,FormTextArea,FormSwitch } from "../../component/other";

import { storage } from "../../firebase";
import { refreshState } from "../../store";
import { useDispatch } from "react-redux";

var uniqId = new Date().getTime() + Math.random()

const GalleryType = [
    {
        display: 'Masory',
        value: 'gallery-masory'
    }
]

const ModalYoutube = (props) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        appendDots: dots => (
            <div style={{ bottom: '-5px' }}>
              <ul style={{ margin: "0px"}}> {dots} </ul>
            </div>
          ),
      }
    return(
        <>
            <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered >
                <Modal.Header closeButton>
                    <Modal.Title className="h5" id="contained-modal-title-vcenter" >
                        Embed Youtube Video
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="pb-3">
                    <Slider {...settings}>
                        <>
                            <div className="d-flex flex-column align-items-center">
                                <img src="./youtube1.3b5cf70.jpg" alt="" style={{width: '100%'}} />
                                <label className="mt-4 mb-4 font-0-11"> Buka Youtube di url <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">disini</a> dan klik tombol share.</label>
                            </div>
                        </>
                        <>
                            <div className="d-flex flex-column align-items-center">
                                <img src="./youtube2.8bae03a.jpg" alt="" style={{width: '100%'}} />
                                <label className="mt-4 mb-4 font-0-11"> Pilih/Klik Embed.</label>
                            </div>
                        </>
                        <>
                            <div className="d-flex flex-column align-items-center">
                                <img src="./youtube3.4645126.jpg" alt="" style={{width: '100%'}} />
                                <label className="mt-4 mb-4 font-0-11"> Pilih COPY. lalu masukan di form youtube url yang tersedia.</label>
                            </div>
                        </>
                    </Slider>
                </Modal.Body>
            </Modal>
        </>
    )
}

const Gallery = (props) => {
    const dispatch = useDispatch()
    const [modalShow, setmodalShow] = useState(false)
    const [upload, setupload] = useState(false);
    const [uploadBar, setuploadBar] = useState(0);
    const gallery = props.data.gallery.data[0]

    const deleteGallery = (image,id) => {
        const desertRef = ref(storage, image);

        deleteObject(desertRef)
        .then(() => {
            var config = {
                method: 'GET',
                url: `${baseUrl()}/api/gallery?Api-Keys-Rumah-akad=6be41184cdca86ebbc56da4433f303ae&delete=${id}`,
            }
            axios(config)
            .then((response) => {
                dispatch((refreshState()))
            })
        })
    }

    const uploadGallery = (e) => {
        const fileLenght = e.target.files.length
        const files = e.target.files
        if(fileLenght > 0){
            for(let i = 0; i < fileLenght;i++) {
                try {
                    const storageRef = ref(storage, `/gallery/${uniqId}-${i}`)
                    const uploadTask = uploadBytesResumable(storageRef,files[i])

                    uploadTask.on("state_changed",(snapShot) => {
                        const prog = Math.round((snapShot.bytesTransferred / snapShot.totalBytes) * 100)
                        setupload(true)
                        setuploadBar(prog)
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
                                    url : `${baseUrl()}/api/gallery`,
                                    data : data,
                                    headers: {
                                        'Api-Keys-Rumah-akad' :  '6be41184cdca86ebbc56da4433f303ae',
                                    }
                                })
                                .then((response) => {
                                    dispatch((refreshState()))
                                })
                                setupload(false)
                                setuploadBar(0)
                            })   
                        }
                    
                    )
                } catch {
                   
                }
            }
        }
    }

    const handleInput = (e,index) => {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        dispatch(updateState({[name] : value,name,index : index,tab: 'gallery'}))
        
        if(target.type === 'checkbox'){
            if(target.checked){
                dispatch(updateState({[name] : value,name,index : index,tab: 'gallery'}))
            }else {
                dispatch(updateState({[name] : value,name,index : index,tab: 'gallery'}))
            }
        }

    }

    return(
        <>
            <div className="property-container mt-1">
                <div className="property-content">
                    {/* <label>Image background</label> */}
                    <FormSwitch checked={gallery.settings.disableGallery} handleInput={(e) => handleInput(e,'settings')} name="disableGallery" label="Disabled Gallery(Hilangkan gallery)" id="0021bamn" />
                </div>
                {
                    (gallery.settings.disableGallery) ? ''
                    : 
                    <>
                        <div className="property-content mt-2">
                            <FormText handleInput={(e) => handleInput(e,'settings')} name='title' value={gallery.settings.title} title="Title Gallery"  />
                            <FormTextArea handleInput={(e) => handleInput(e,'settings')} name='description' rows={5} value={gallery.settings.description} title="Description Gallery"  />
                            <FormText handleInput={(e) => handleInput(e,'settings')} name='youtube' value={gallery.settings.youtube} placeholder={`<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/bkMjpEixNrg" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`} info="Optional" title="Embed Video (Youtube)"  />
                            <FormSelect handleInput={(e) => handleInput(e,'settings')} name="mode" data={GalleryType} value={gallery.settings.mode} title="Pilih Mode Gallery" />
                        </div>
                        <ModalYoutube show={modalShow} onHide={() => setmodalShow(false)} />
                        <div className="property-content mt-2">
                            <div className="ra-sm-property image rounded">
                                <div className="website-stat pl-0-7 pr-0-7">
                                    <label style={{margin: 0}} ><span style={{color: '#fff',opacity: 1}}><span className="text-blue" onClick={() => setmodalShow(true)}>Klik disini</span>. untuk cara mendapatkan embed video dari youtube.</span></label>
                                </div>
                            </div>
                        </div>
                        <div className="property-content mt-2">
                            <label>Gallery foto</label>
                            <div className="ra-sm-property">
                                <input type="file" className="file-gallery" accept="image/jpg,image/png,image/jpeg" multiple onChange={(file) => uploadGallery(file) } />
                            </div>
                            {
                                (upload) ? 
                                <div className="progress ml-0-1 mr-0-1 mt-1 mb-1">
                                    <span className="progress-bar" style={{width: `${uploadBar}%` }}></span>
                                </div> : ''
                            }
                            <div className="gallery-wedding-container">
                                {
                                    gallery.data.map((items,index) => {
                                        return(
                                            <div className="gallery-items" key={index}>
                                                <img src={items.path} alt="gallery foto" />
                                                <div className="overflow-gallery">
                                                    <div className="trash" onClick={() => deleteGallery(items.path,items.id_gallery)}>
                                                        <i className="fal fa-trash"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </>
                }
            </div>
        </>
    )
}

export default Gallery