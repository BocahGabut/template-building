import React,{Component, useEffect} from 'react'
import { PageTransition } from '@steveeeie/react-page-transition';
import '../scss/theme-4.scss'
// import Aos from 'aos'
import BackgroundSlide from '../component/background-slide'
import Gallery from '../component/gallery'
// import Mempelai from '../component/mempelai'
import Countdown from '../component/countdown'
// import Card from '../component/card'
// import Quotes from '../component/quotes'
import TimeLine from '../component/time-line'

import Gift from '../component/gift'
// import BackgroundFooter from '../component/background-footer'
import Comment from '../component/comment'
import RSVP from '../component/rsvp'

import { openGift } from '../component/other'

import Slider from "react-slick";

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

// const data = [
//   {
//     keyId: '0218212012',
//     data: [
//       {
//         id:'002172739',
//         icons:'fal fa-glass-cheers',
//         title:'Akad Nikah',
//         date: 'Sabtu, 05 Desember 20222',
//         hour: '08.00 – 09.00 WIB',
//         place: 'Hotel Kristal Jakarta',
//         address: 'Jl. Terogong Raya No.17, RT.12/RW.10, Cilandak DKI Jakarta 12430'
//       }
//     ]
//   },
//   {
//     keyId: '0218434342',
//     data:[
//       {
//         id:'002172328',
//         icons:'fal fa-rings-wedding',
//         title:'Resepsi',
//         date: 'Sabtu, 05 Desember 20222',
//         hour: '10.00 – 14.00 WIB',
//         place: 'Hotel Kristal Jakarta',
//         address: 'Jl. Terogong Raya No.17, RT.12/RW.10, Cilandak DKI Jakarta 12430'
//       }
//     ]
//   },
// ]

// const Theme421 = () => {
//     useEffect(() => {
//         Aos.init({
//           duration : 2000
//         });
//         Aos.refresh();
//       }, []);
//     const settings = {
//         dots: true,
//         infinite: true,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         vertical: true,
//         verticalSwiping: true,
//         beforeChange: function(currentSlide, nextSlide) {
//           console.log("before change", currentSlide, nextSlide);
//         },
//         afterChange: function(currentSlide) {
//         //   console.log("after change", currentSlide);
//         }
//     };

//     window.addEventListener('scroll',()=>{
//         console.log('adwad')
//     })
//     return(
//         <>
//             <div className="bg-black">
//                 <div className="container-full">
//                     <Slider {...settings}>
//                         <div className="content-full">
//                             <BackgroundSlide theme="theme4"/>
//                         </div>
//                         <div className="content-full">
//                             <BackgroundSlide theme="theme4"/>
//                         </div>
//                     </Slider>
//                 </div>
//             </div>
//             <Gift />
//         </>
//     )
// }

class Theme4 extends Component {
    constructor(props){
        super(props)

        // this.slide = this.slide.bind(this);
        // this.next = this.next.bind(this);
        // this.previous = this.previous.bind(this);
        this.slider = React.createRef();
    }

    

    // slide(y){
    //     y > 0 ? (
    //        this.slider.slickNext()
    //     ) : (
    //        this.slider.slickPrev()
    //     )
    // }

    componentDidMount(){

      const slider = this.slider.current

      function next() {
        slider.slickNext();
      }
      function previous() {
        slider.slickPrev();
      }

      function slickScrool(stat,e) {
        if(stat === 'true'){
          if(e.wheelDelta < 0 ) {
            next()
          }else{
            previous()
          }
          // console.log(stat)
        }else {
          console.log(stat)
        }
      }

      var content = document.querySelectorAll('.content-full')

      for(let i = 0; i < content.length;i++){
        var gallery = document.getElementById('gallery')

        content[i].addEventListener('wheel',(e) => {
          slickScrool('true',e)
        })

        // gallery.onmouseover = () => {
        //   content[i].removeEventListener('wheel',(e) => {
        //     slickScrool('false',e)
        //   })
        //   document.getElementById('003471281').addEventListener('wheel',(e) => {
        //     slickScrool('false',e)
        //   })
        // }

      }


        // gallery.onmouseover = (e) => {
        //   window.removeEventListener('wheel', (e) => {
        //     slickScrool(false,e)
        //     // console.log(e)
        //   })
        // }

        // gallery.onmouseout = () => {
        //   window.addEventListener('wheel', (e) => {
        //     slickScrool(true,e)
        //     // console.log(e)
        //   })
        // }
        
        

    }

    openMenu = () => {
      document.getElementById('wrap-content').classList.add('sm-open')
      document.getElementById('button-content').classList.add('sm-open')
    }
    
    closeMenu = () => {
      document.getElementById('wrap-content').classList.remove('sm-open')
      document.getElementById('button-content').classList.remove('sm-open')
    }

    render(){
        const settings = {
            dots: true,
            infinite: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            vertical: true,
            verticalSwiping: false,
            swipeToSlide: false,
            adaptiveHeight: false,
        };
        return(
            <>
                <div className="bg-dark">
                    <div className="container-full">
                        <div className="wrap-content" id='wrap-content'>
                          <div className="outer-header">
                            <div className="wrapper-menu" onClick={() => this.openMenu()}>
                              <div className="line-menu half start"></div>
                              <div className="line-menu"></div>
                              <div className="line-menu half end"></div>
                            </div>
                          </div>
                        <PageTransition preset={'scaleDownFromBottom'} transitionKey={'01023128'}>
                        <Slider {...settings} ref={this.slider} id="0023781237">
                            <div className="content-full">
                              <div className="content">
                                  <BackgroundSlide theme="theme4" />
                              </div>
                            </div>
                            <div className="content-full" id='01023128'>
                              <div className="content">
                                <div className="container">
                                  <div className="row">
                                      <div className="col-md-12">
                                          <div className="heading heading-center text-center font-2" data-style="half_text">
                                              <span className="animate">YOU ARE INVITED</span>
                                          </div>
                                      </div>
                                      <div className="col-md-12 mt-2 mb-2">
                                          <div className="heading text-center font-0-14 font-md-0-13" data-style="half_text">
                                            Assalamu`alaikum Warahmatullaahi Wabarakaatuh
                                          </div>
                                      </div>
                                      <div className="col-md-12 pl-6 pr-6 pl-md-1 pr-md-1">
                                          <div className="heading text-center font-0-11 font-md-0-10" data-style="half_text">
                                          Maha Suci Allah yang telah menciptakan makhluk-Nya berpasang-pasangan. Ya Allah semoga ridho-Mu tercurah mengiringi pernikahan kami
                                          </div>
                                      </div>
                                      <div className="col-md-12 mt-3">
                                        <Countdown animate={false} date={'12/12/2023 10:1 AM'} />
                                      </div>
                                      <div className="col-md-12 mt-4 pl-8 pr-8 pl-md-1 pr-md-1">
                                          <div className="heading text-center font-0-11 font-md-0-10" data-style="half_text">
                                            Ungkapan terima kasih yang tulus dari kami apabila Bapak/Ibu/Teman-teman berkenan hadir dan memberikan do’a restu.
                                          </div>
                                      </div>
                                      <div className="col-md-12 d-flex justify-content-center mt-4 mb-2">
                                          <a href="/" className="button-dark-savedate neon">
                                              <span>
                                                <i className='fal fa-calendar-alt'></i> Ingatkan di kalender
                                              </span>
                                          </a>
                                      </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="content-full">
                              <div className="content">
                                <div className="container">
                                  <div className="row">
                                      <div className="col-md-12">
                                          <div className="heading heading-center font-2" data-style="half_text">
                                              Love <span className="animate">Story</span>
                                          </div>
                                      </div>
                                      <div className="col-md-12">
                                          <TimeLine type="slick-section-210" />
                                      </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="content-full" id='003471281'>
                              <div className="content">
                              <div className="container pb-5 pt-3 justify-content-center">
                                  <div className="d-flex justify-content-center row align-items-center flex-column pl-1 pr-1">
                                      <div className="heading heading-center text-center font-2 pt-5 pb-3" data-style="half_text">
                                          <span className="animate">Gallery</span>
                                      </div>
                                      <div className="container-gallery pb-3" id='gallery'>
                                          <Gallery animate={false} type="gallery-masory" data={imageMasory} />
                                      </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="content-full">
                              <div className="content">
                              <div className="container pb-5 pt-3 justify-content-center">
                                  <div className="d-flex justify-content-center row align-items-center flex-column pl-1 pr-1">
                                      <div className="font-meow font-white font-4 mt-3 mb-4 col-md-8 text-center">
                                          Wedding Gift
                                      </div>
                                      <p className='col-md-8 text-center font-0-10'>It’s a big honor to see you at our wedding ceremony. If you want to give some of your treasure, you can take a look at my bank account number. Thank you!</p>
                                        <button onClick={() => openGift()} className="btn btn-outline-info mt-3 col-md-3 pt-2 pb-2">
                                            <i className='fal fa-gift'></i> Tranfer Hadiah
                                        </button>
                                      <RSVP dark={true} />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="content-full">
                              <div className="content">
                                <div className="container pb-10 pt-4">
                                  <div className="d-flex justify-content-center row">
                                    <div className="d-flex justify-content-center align-items-center flex-column col-md-10">
                                      <div className="font-meow font-white font-4 mb-4">
                                          Ucapan & Doa
                                      </div>
                                      <Comment />
                                    </div>
                                  </div>
                                </div> 
                              </div>
                            </div>
                        </Slider>
                        </PageTransition>
                        </div>
                        <div className="navbar-area">
                          <div className="inner-wrap">
                            <div className="inner-meta">
                              <ul>
                                <li>
                                  <a href="/">Menu 1</a>
                                </li>
                                <li>
                                  <a href="/">Menu 2</a>
                                </li>
                                <li>
                                  <a href="/">Menu 3</a>
                                </li>
                                <li>
                                  <a href="/">...</a>
                                </li>
                                <li>
                                  <a href="/">...</a>
                                </li>
                              </ul>
                            </div>
                            <div className="bottom-meta">
                              <ul>
                                <li>
                                  <a href="/"><i className="fab fa-facebook-f"></i></a>
                                </li>
                                <li>
                                  <a href="/"><i className="fab fa-instagram"></i></a>
                                </li>
                                <li>
                                  <a href="/"><i className="fab fa-twitter"></i></a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="button-close-wrap" id='button-content' onClick={() => this.closeMenu()}>
                          <span className='close-wrap'>
                            <span className="close-line close-line1"></span>
                            <span className="close-line close-line2"></span>
                          </span>
                        </div>
                    </div>
                </div>
                <Gift />
            </>
        )
    }
}

export default Theme4