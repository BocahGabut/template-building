import React from 'react'

import BackgroundSlide from '../component/background-slide'
import Gallery from '../component/gallery'
import Mempelai from '../component/mempelai'
import Countdown from '../component/countdown'
import Card from '../component/card'
import Quotes from '../component/quotes'
import TimeLine from '../component/time-line'

import Gift from '../component/gift'
import BackgroundFooter from '../component/background-footer'
import Comment from '../component/comment'
import RSVP from '../component/rsvp'

import { openGift } from '../component/other'


const imageMasory = [
  {
    id: '002129119271',
    image : 'https://i.pinimg.com/736x/ec/c0/c6/ecc0c6d922038fb54014c7806016df19.jpg',
  },
  {
    id: '00212911923',
    image : 'https://www.99.co/blog/indonesia/wp-content/uploads/2020/12/foto-prewedding-unik-dan-murah.jpg',
  },
  {
    id: '002129119243',
    image : 'https://cdn-cas.orami.co.id/parenting/images/Foto_Prewedding_Casual_pinimg.com.width-800.jpg',
  },
  {
    id: '002129119521',
    image : 'https://i.pinimg.com/originals/fb/a7/18/fba718d440e93dabc3c1f90596401667.jpg',
  },
  {
    id: '002129153271',
    image : 'https://sgp1.digitaloceanspaces.com/tz-mag-id/wp-content/uploads/2018/06/121206065959/4-2-PulauPadar-By-diktatphotography.jpg',
  },
  {
    id: '43443563453',
    image : 'https://cdn-2.tstatic.net/bali/foto/bank/images/syarat-foto-prewedding-di-areal-bandara-ngurah-rai-bali.jpg',
  },
  {
    id: '00212532271',
    image : 'https://poetrafoto.files.wordpress.com/2019/03/foto-prewedding-pakai-baju-adat-bali-klasik-kuno-dewiwawan-pre-wedding-photoshoot-in-bali-6.jpg',
  },
  {
    id: '00212323271',
    image : 'https://thehouse.studio/website/images/gallery/prewedding-thematic-firs-18390606052019.jpg',
  },
  {
    id: '00212932652',
    image : 'https://s3-ap-southeast-1.amazonaws.com/blog-id/wp-content/uploads/2017/05/05162434/image3.png',
  },
  {
    id: '002129123231',
    image : 'https://www.cepetnikah.com/wp-content/uploads/2019/11/gambar-utama-tempat-prewedding-di-jakarta.jpg',
  },
  {
    id: '0021233529271',
    image : 'https://cdn.idntimes.com/content-images/post/20190705/64645289-401906487336228-4786641896387206135-n1-cab150096a464ab5d5b5ace16b427971.jpg',
  },
  {
    id: '00246542234271',
    image : 'https://kingfoto.com/attachments/shop_images/1592031181/PREWEDDING_INDOOR_02.jpg',
  }
]

const data = [
  {
    keyId: '0218212012',
    data: [
      {
        id:'002172739',
        icons:'fal fa-glass-cheers',
        title:'Akad Nikah',
        date: 'Sabtu, 05 Desember 20222',
        hour: '08.00 – 09.00 WIB',
        place: 'Hotel Kristal Jakarta',
        address: 'Jl. Terogong Raya No.17, RT.12/RW.10, Cilandak DKI Jakarta 12430'
      }
    ]
  },
  {
    keyId: '0218434342',
    data:[
      {
        id:'002172328',
        icons:'fal fa-rings-wedding',
        title:'Resepsi',
        date: 'Sabtu, 05 Desember 20222',
        hour: '10.00 – 14.00 WIB',
        place: 'Hotel Kristal Jakarta',
        address: 'Jl. Terogong Raya No.17, RT.12/RW.10, Cilandak DKI Jakarta 12430'
      }
    ]
  },
]

const Theme1 = () => {
    return(
        <>
           <BackgroundSlide theme="theme"/>
           <Mempelai type="00329"/>
           <div className="container pb-5 pt-5">
              <div className="d-flex justify-content-center align-items-center flex-column">
                  <div className="font-dongle font-0-25 text-center font-md-0-20">
                    Assalamu`alaikum Warahmatullaahi Wabarakaatuh
                  </div>
                  <div className="font-dongle font-0-20 text-center pl-3 pr-3 pl-md-1 pr-md-1 font-md-0-15">
                  Maha Suci Allah yang telah menciptakan makhluk-Nya berpasang-pasangan. Ya Allah semoga ridho-Mu tercurah mengiringi pernikahan kami
                  </div>
                  <div className="row mt-2">
                          {data.map((items) => {
                            return(
                              <div className="col-md-6 mt-2" key={items.keyId}>
                                <Card type="card-002213" data={items.data} />
                              </div>
                            )
                          })}
                        </div>
              </div>
              <div className="d-flex justify-content-center align-items-center flex-column mt-4 mb-3">
                  <div className="font-meow font-4 ">
                    Hari Bahagia
                  </div>
                  <Countdown date={'12/12/2023 10:1 AM'} class="bordered" />
                  <div className="font-cormorant font-0-15 font-md-0-10 mt-3 text-center pl-2 pr-2">
                    Ungkapan terima kasih yang tulus dari kami apabila Bapak/Ibu/Teman-teman berkenan hadir dan memberikan do’a restu.
                  </div>
              </div>
              <div className="d-flex justify-content-center align-items-center mt-2">
                  <div className="container-youtube">
                    <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/IstG3oA0Q5w" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                  </div>
              </div>
            </div>
           <div className="container pb-5 pt-5">
              <div className="d-flex justify-content-center align-items-center flex-column">
                  <div className="font-cormorant font-3 mb-1">
                      Love Story
                  </div>
                  <TimeLine type="slick-section" />
              </div>
            </div>
            <div className="container pb-4">
                  <div className="hero-page">
                      <div className="hero-page-top flex-column" style={{ alignItems:'center' }}>
                          <div className="font-meow font-4 font-md-3">
                              Captured Moments
                          </div>
                      </div>
                      <div className="hero-page-content">
                          <div className="hero-page-content-center">
                              <Gallery type="gallery-masory" data={imageMasory} />
                              <div className="d-flex justify-content-center align-items-center">
                                <div className="container-youtube" style={{width:'100%'}}>
                                  <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/SgUG2jDXkck" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <Quotes />
              <div className="container pb-5 pt-3 justify-content-center mt-3">
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
            <div className="container pb-5 pt-1">
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
            <BackgroundFooter theme="theme1" />
        </>
    )
}

export default Theme1