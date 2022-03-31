import React,{Component,useEffect,useState} from 'react'

import {connect, useDispatch} from 'react-redux'

import { getDataGallery,getDataTimeline,getDataState } from '../store'

import BackgroundSlide from '../component/background-slide'
import Mempelai from '../component/mempelai'
import Gallery from '../component/gallery'
import Countdown from '../component/countdown'
import Card from '../component/card'
import Quotes from '../component/quotes'
import TimeLine from '../component/time-line'

import Gift from '../component/gift'
// import BackgroundFooter from '../component/background-footer'
import Comment from '../component/comment'
import RSVP from '../component/rsvp'

import { openGift } from '../component/other'

import { Base64 } from 'js-base64';

import { defaultState } from '../store'

import axios from 'axios'
import { baseUrl } from '../component/Item'
import jwt_decode from "jwt-decode";

// import { GetLocalStorage,addDatabase } from '../main'

// import { Theme2 } from '../component/Item'

class Theme2Component extends Component {
  constructor(props){
    super(props)

    this.state = {
      load : false,
    }
  }

  async componentDidMount(){
    const getDataState = () => {
      axios({
              method: 'GET',
              url: `${baseUrl()}/api/config`,
              headers: {
                  'Api-Keys-Rumah-akad': '6be41184cdca86ebbc56da4433f303ae'
              }
          })
          .then(result => {
                  this.props.setDefault(JSON.parse(jwt_decode(result.data)))
                  setTimeout(() => {
                    this.setState({
                      load:true,
                    })
                    getDataTimeline()
                    getDataGallery()
                  }, 750);
          })
          .catch(error => console.log(error))
    }
    getDataState()
  }
  
  render(){

    const Component = () => {

      const details = this.props.data.reduce.details.data[0],
            quotes = this.props.data.reduce.quotes.data[0],
            gallery = this.props.data.reduce.gallery.data[0],
            timeline = this.props.data.reduce.timeline.data[0]

      return(
        <>
              <BackgroundSlide theme="theme2" edit={true}/>
              <Mempelai type="00327" edit={true}/>
              
              <div className="container-celebrate">
                  <div className="bg-celebrate" style={{backgroundImage:`url(${details.settings.backgroundImage})`}}>
                      <div className="celebrate-overflow">
                          <div className="content">
                            <h4>{details.settings.title}</h4>
                            <h5>{details.settings.date}</h5>
                            <div className="d-flex flex-column">
                              <a target="_blank" rel="noopener noreferrer" href={`https://www.google.com/calendar/render?action=TEMPLATE&text=Acara Penikahan &ctz=${details.settings.zonaWaktu}&dates=${details.settings.countDown}/${details.settings.countDown}%7D&details=Acara Penikahan&location=${details.settings.address}`} className="button-savedate mt-3 mr-1 mr-1">
                                <i className='fal fa-calendar-alt'></i> Ingatkan di kalender
                              </a>
                              <a target="_blank" rel="noopener noreferrer" href={details.settings.linksGmaps} className="text-center button-savedate mt-3 mr-1 mr-1">
                                <i className='fal fa-map-pin'></i> Lihat Lokasi
                              </a>
                            </div>
                          </div>
                      </div>
                  </div>
                      <div className="content-celebrate" style={{top : `${(details.settings.private) ? '475px' : '380px'}`}}>
                        {
                          (details.settings.private) ? '' :
                            <div className="container">
                              <div className="row justify-content-center">
                                {details.acara.map((items,index) => {
                                  return(
                                    <div className="col-md-6 mt-2" key={index}>
                                      <Card type="card-002213" edit={true} data={items} settings={details.settings} />
                                    </div>
                                  )
                                })}
                              </div>
                          </div>
                        }
                        <div className="container mt-5 mb-5">
                            <Countdown date={details.settings.countDown} animate={false} class="bordered" />
                            <div className="font-dongle font-2 text-center mt-3">
                              <div className="row justify-content-center">
                                <div className="col-md-10">
                                  {details.settings.penutup}
                                </div>
                              </div>
                            </div>
                            {
                              (details.settings.liveStreaming !== '') 
                              ?
                                <div className="d-flex justify-content-center flex-column align-items-center mt-1">
                                  <div className="font-meow font-3 font-md-2">
                                      Live Streaming
                                  </div>
                                  <p className='col-md-8 text-center'>Temui kami secara <strong>Vitual</strong> untuk menyaksikan acara pernikahan kami </p>
                                  <a href={details.settings.liveStreaming} target="_blank" rel="noopener noreferrer" className="btn btn-info pl-4 pr-4" style={{color:'#fff'}}>
                                    <i className='fas fa-video mr-1'></i> Live Streaming
                                  </a>
                                </div>
                              : ''
                            }
                            <div className="font-dongle font-2 text-center mt-3 mb-8">
                              <div className="row flex-column align-items-center">
                                <div className="col-md-6">
                                  Turut Mengundang : 
                                </div>
                                <div className="col-md-4">
                                  <div className="row justify-content-center">
                                    {
                                      details.mengundang.map((items,index) => {
                                        return(
                                          <div key={index} className={`col-6 text-center`}>
                                            {items}
                                          </div>
                                        )
                                      })
                                    }
                                    <div className="col-12 text-center">
                                      Segenap Family
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                      </div>
                  </div>
              </div>
                <Quotes class={`${(details.settings.private) ? 'mt-32' : 'mt-25'}`} data={quotes} />
                  {
                    (gallery.settings.disableGallery) ? '' :
                      <div className="container gallery">
                        <div className="hero-page" style={{alignItems:'center'}}>
                            <div className="hero-page-top flex-column" style={{ alignItems:'center',width: '80%' }}>
                                <div className="font-meow text-center font-4 font-md-3">
                                    {gallery.settings.title}
                                </div>
                                <div className="text-center font-0-13 font-md-1 mt-3">
                                  {gallery.settings.description}
                                </div>
                            </div>
                            <div className="hero-page-content">
                                <div className="hero-page-content-center">
                                    <Gallery  type="gallery-masory" data={gallery.data} animate={false} />
                                    {
                                      (gallery.settings.youtube !== '') 
                                      ?
                                        <div className="d-flex justify-content-center align-items-center">
                                          <div className="container-youtube" style={{width:'100%'}}>
                                            <div dangerouslySetInnerHTML={{__html : gallery.settings.youtube}}></div>
                                          </div>
                                        </div>
                                      :''
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                  } 
                <div className="container pb-5 pt-5">
                  <div className="d-flex justify-content-center align-items-center flex-column">
                      <div className="font-meow font-4 mb-1">
                          {timeline.settings.title}
                      </div>
                      <TimeLine type="slick" data={timeline} animate={false} />
                  </div>
                </div>
                <div className="container pb-5 pt-3 justify-content-center">
                  <div className="d-flex justify-content-center row align-items-center flex-column pl-1 pr-1">
                      <div className="font-meow font-4 mb-4 col-md-8 text-center">
                          Wedding Gift
                      </div>
                      <p className='col-md-8 text-center'>It’s a big honor to see you at our wedding ceremony. If you want to give some of your treasure, you can take a look at my bank account number. Thank you!</p>
                        <button onClick={() => openGift()} className="btn btn-outline-info mt-3 col-md-3 pt-2 pb-2">
                            <i className='fal fa-gift'></i> Tranfer Hadiah
                        </button>
                  </div>
                </div>
                <div className="container pb-5 pt-1">
                  <div className="d-flex justify-content-center row">
                    <div className="d-flex justify-content-center align-items-center flex-column col-md-9">
                      <RSVP />
                    </div>
                  </div>
                </div> 
                <div className="container pb-10 pt-1">
                  <div className="d-flex justify-content-center row">
                    <div className="d-flex justify-content-center align-items-center flex-column col-md-10">
                      <div className="font-meow font-4 mb-4">
                          Ucapan & Doa
                      </div>
                      <Comment />
                    </div>
                  </div>
                </div> 
                <Gift />
                {/* <BackgroundFooter theme="theme2" /> */}
            </>
      )
    }
      
      return(
        <>
          {
            this.state.load ?
            <Component />
            :''
          }
        </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
      data : state
  }
}

const mapDispacthToProps = (dispact) => {
  return {
      setDefault : (data) => dispact(defaultState({data:data})) 
  }
}

export default connect(mapStateToProps,mapDispacthToProps)(Theme2Component)