import React,{useEffect,Component} from "react";
import '../scss/time-line.scss'
import Aos from "aos";

import Slider from "react-slick";

const TimeLineLeft = () => {
    return(
        <>
            <div className="timeline-container left">
                <ul className="timeline">
                    <li className="timeline-items">
                        <div className="periode aos-init"
                        data-aos="fade-up"
                                    data-aos-offset="200"
                                    data-aos-delay="250"
                                    data-aos-duration="1000">
                           <div className="indicator"></div>
                           <div className="content">
                                <h5>21</h5>
                                <span>THU</span>
                           </div>
                        </div>
                        <div className="content-container">
                            <div className="content aos-init"
                            data-aos="fade-up"
                                    data-aos-offset="200"
                                    data-aos-delay="250"
                                    data-aos-duration="1000">
                                <div className="body">
                                    <div className="content-header">
                                        React Native
                                    </div>
                                    <div className="content-body">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia delectus possimus, natus iste fugiat minus fugit sint? Nesciunt quisquam soluta eum sapiente fugit sed est ratione dolore quam, cum saepe?
                                    </div>
                                </div>
                                <div className="conten-date">
                                    21, Desember 2002
                                </div>
                            </div>
                            <div className="content aos-init"
                            data-aos="fade-up"
                                    data-aos-offset="200"
                                    data-aos-delay="250"
                                    data-aos-duration="1000">
                                <div className="body">
                                    <div className="content-header">
                                        React Native
                                    </div>
                                    <div className="content-body">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia delectus possimus, natus iste fugiat minus fugit sint? Nesciunt quisquam soluta eum sapiente fugit sed est ratione dolore quam, cum saepe?
                                    </div>
                                </div>
                                <div className="conten-date">
                                    21, Desember 2002
                                </div>
                            </div>
                            <div className="content aos-init"
                            data-aos="fade-up"
                                    data-aos-offset="200"
                                    data-aos-delay="250"
                                    data-aos-duration="1000">
                                <div className="body">
                                    <div className="content-header">
                                        React Native
                                    </div>
                                    <div className="content-body">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia delectus possimus, natus iste fugiat minus fugit sint? Nesciunt quisquam soluta eum sapiente fugit sed est ratione dolore quam, cum saepe?
                                    </div>
                                </div>
                                <div className="conten-date">
                                    21, Desember 2002
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="timeline-items">
                        <div className="periode aos-init"
                        data-aos="fade-up"
                                    data-aos-offset="200"
                                    data-aos-delay="250"
                                    data-aos-duration="1000">
                           <div className="indicator"></div>
                           <div className="content">
                                <h5>21</h5>
                                <span>THU</span>
                           </div>
                        </div>
                        <div className="content-container">
                            <div className="content aos-init"
                            data-aos="fade-up"
                                    data-aos-offset="200"
                                    data-aos-delay="250"
                                    data-aos-duration="1000">
                                <div className="body">
                                    <div className="content-header">
                                        React Native
                                    </div>
                                    <div className="content-body">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia delectus possimus, natus iste fugiat minus fugit sint? Nesciunt quisquam soluta eum sapiente fugit sed est ratione dolore quam, cum saepe?
                                    </div>
                                </div>
                                <div className="conten-date">
                                    21, Desember 2002
                                </div>
                            </div>
                            <div className="content aos-init"
                            data-aos="fade-up"
                                    data-aos-offset="200"
                                    data-aos-delay="250"
                                    data-aos-duration="1000">
                                <div className="body">
                                    <div className="content-header">
                                        React Native
                                    </div>
                                    <div className="content-body">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia delectus possimus, natus iste fugiat minus fugit sint? Nesciunt quisquam soluta eum sapiente fugit sed est ratione dolore quam, cum saepe?
                                    </div>
                                </div>
                                <div className="conten-date">
                                    21, Desember 2002
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </>
    )
}

const TimelineSlick = () => {
    const settings = {
        dots: true,
        infinite: false,
        speed: 1200,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        initialSlide: 0,
        fade:false,
        swipeToSlide: true,
        arrows:true,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2,
                arrows:false,
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows:false,
              }
            }
          ]
      };
    return(
        <>
            <div className="timeline-slick">
                <Slider {...settings}>
                    <div className="slider-container aos-init" data-aos="fade-left"
                                    data-aos-offset="200"
                                    data-aos-delay="250"
                                    data-aos-duration="1000">
                        <div className="slider-content">
                            <div className="slider-image">
                                <img src="https://www.99.co/blog/indonesia/wp-content/uploads/2020/12/foto-prewedding-unik-dan-murah.jpg" alt="" />
                            </div>
                            <div className="slider-content-inner">
                                <div className="year">1914</div>
                                <div className="month">June 28</div>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima, ex rem quaerat at quisquam culpa natus adipisci reprehenderit laborum unde tenetur, mollitia sapiente quasi consequuntur illo soluta ipsum cupiditate illum?</p>
                            </div>
                        </div>
                    </div>
                    <div className="slider-container aos-init" data-aos="fade-left"
                                    data-aos-offset="200"
                                    data-aos-delay="250"
                                    data-aos-duration="1000">
                        <div className="slider-content">
                            <div className="slider-image">
                                <img src="https://cdn-cas.orami.co.id/parenting/images/Foto_Prewedding_Casual_pinimg.com.width-800.jpg" alt="" />
                            </div>
                            <div className="slider-content-inner">
                                <div className="year">1914</div>
                                <div className="month">June 28</div>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima, ex rem quaerat at quisquam culpa natus adipisci reprehenderit laborum unde tenetur, mollitia sapiente quasi consequuntur illo soluta ipsum cupiditate illum?</p>
                            </div>
                        </div>
                    </div>
                    <div className="slider-container aos-init" data-aos="fade-left"
                                    data-aos-offset="200"
                                    data-aos-delay="250"
                                    data-aos-duration="1000">
                        <div className="slider-content">
                            <div className="slider-image">
                                <img src="https://i.pinimg.com/originals/fb/a7/18/fba718d440e93dabc3c1f90596401667.jpg" alt="" />
                            </div>
                            <div className="slider-content-inner">
                                <div className="year">1914</div>
                                <div className="month">June 28</div>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima, ex rem quaerat at quisquam culpa natus adipisci reprehenderit laborum unde tenetur, mollitia sapiente quasi consequuntur illo soluta ipsum cupiditate illum?</p>
                            </div>
                        </div>
                    </div>
                    <div className="slider-container aos-init"
                    data-aos="fade-left"
                                    data-aos-offset="200"
                                    data-aos-delay="250"
                                    data-aos-duration="1000">
                        <div className="slider-content">
                            <div className="slider-image">
                                <img src="https://cdn-2.tstatic.net/bali/foto/bank/images/syarat-foto-prewedding-di-areal-bandara-ngurah-rai-bali.jpg" alt="" />
                            </div>
                            <div className="slider-content-inner">
                                <div className="year">1914</div>
                                <div className="month">June 28</div>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima, ex rem quaerat at quisquam culpa natus adipisci reprehenderit laborum unde tenetur, mollitia sapiente quasi consequuntur illo soluta ipsum cupiditate illum?</p>
                            </div>
                        </div>
                    </div>
                    <div className="slider-container aos-init" data-aos="fade-left"
                                    data-aos-offset="200"
                                    data-aos-delay="250"
                                    data-aos-duration="1000">
                        <div className="slider-content">
                            <div className="slider-image">
                                <img src="https://thehouse.studio/website/images/gallery/prewedding-thematic-firs-18390606052019.jpg" alt="" />
                            </div>
                            <div className="slider-content-inner">
                                <div className="year">1914</div>
                                <div className="month">June 28</div>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima, ex rem quaerat at quisquam culpa natus adipisci reprehenderit laborum unde tenetur, mollitia sapiente quasi consequuntur illo soluta ipsum cupiditate illum?</p>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        </>
    )
}

class TimelineSlickSection extends Component{
    constructor(props){
        super(props)

        this.state = {

        }

    }

    render(){
        const settings = {
            dots: false,
            infinite: false,
            speed: 1200,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: false,
            initialSlide: 0,
            fade:false,
            swipeToSlide: true,
            arrows:true,
            responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                  }
                },
                {
                  breakpoint: 600,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                    arrows:false,
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows:false,
                  }
                }
              ]
          };
        return(
            <>
                <div className="timeline-slick-section aos-init"  data-aos="fade-up"
                                    data-aos-offset="200"
                                    data-aos-delay="250"
                                    data-aos-duration="1000">
                    <Slider {...settings}>
                        <div className="container-items">
                            <div className="section-background" style={{backgroundImage:'url(https://poetrafoto.files.wordpress.com/2019/03/foto-prewedding-pakai-baju-adat-bali-klasik-kuno-dewiwawan-pre-wedding-photoshoot-in-bali-6.jpg)'}}></div>
                            <div className="section-year">
                                <p>2011</p>
                            </div>
                            <div className="section-content">
                                <h1>Lorem ipsum dolor sit</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit.</p>
                            </div>
                        </div>
                        <div className="container-items">
                            <div className="section-background" style={{backgroundImage:'url(https://www.cepetnikah.com/wp-content/uploads/2019/11/gambar-utama-tempat-prewedding-di-jakarta.jpg)'}}></div>
                            <div className="section-year">
                                <p>2011</p>
                            </div>
                            <div className="section-content">
                                <h1>Lorem ipsum dolor sit</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit.</p>
                            </div>
                        </div>
                        <div className="container-items">
                            <div className="section-background" style={{backgroundImage:'url(https://cdn-2.tstatic.net/bali/foto/bank/images/syarat-foto-prewedding-di-areal-bandara-ngurah-rai-bali.jpg)'}}></div>
                            <div className="section-year">
                                <p>2011</p>
                            </div>
                            <div className="section-content">
                                <h1>Lorem ipsum dolor sit</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit.</p>
                            </div>
                        </div>
                        <div className="container-items">
                            <div className="section-background" style={{backgroundImage:'url(https://i.pinimg.com/originals/fb/a7/18/fba718d440e93dabc3c1f90596401667.jpg)'}}></div>
                            <div className="section-year">
                                <p>2011</p>
                            </div>
                            <div className="section-content">
                                <h1>Lorem ipsum dolor sit</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit.</p>
                            </div>
                        </div>
                        <div className="container-items">
                            <div className="section-background" style={{backgroundImage:'url(https://kingfoto.com/attachments/shop_images/1592031181/PREWEDDING_INDOOR_02.jpg)'}}></div>
                            <div className="section-year">
                                <p>2011</p>
                            </div>
                            <div className="section-content">
                                <h1>Lorem ipsum dolor sit</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit.</p>
                            </div>
                        </div>
                    </Slider>
                </div>
            </>
        )
    }
}
class TimelineSlickWidth extends Component{
    constructor(props){
        super(props)

        this.state = {

        }

    }

    render(){
        const settings = {
            dots: false,
            infinite: false,
            speed: 1200,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: false,
            initialSlide: 0,
            fade:false,
            swipeToSlide: false,
            arrows:<i class="fas fa-loveseat"></i>,
            responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    dots: false
                  }
                },
                {
                  breakpoint: 600,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                    arrows:false,
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows:false,
                  }
                }
              ]
          };
        return(
            <>
                <div className="timeline-slick-section-210">
                    <Slider {...settings}>
                        <div className="container-items">
                            <div className="content-210">
                                <img src="https://poetrafoto.files.wordpress.com/2019/03/foto-prewedding-pakai-baju-adat-bali-klasik-kuno-dewiwawan-pre-wedding-photoshoot-in-bali-6.jpg" alt="" />
                                <div className="section-content">
                                    <h1>Lorem ipsum dolor sit</h1>
                                </div>
                            </div>
                        </div>
                        <div className="container-items">
                            <div className="content-210">
                                <img src="https://poetrafoto.files.wordpress.com/2019/03/foto-prewedding-pakai-baju-adat-bali-klasik-kuno-dewiwawan-pre-wedding-photoshoot-in-bali-6.jpg" alt="" />
                                <div className="section-content">
                                    <h1>Lorem ipsum dolor sit</h1>
                                </div>
                            </div>
                        </div>
                        <div className="container-items">
                            <div className="content-210">
                                <img src="https://poetrafoto.files.wordpress.com/2019/03/foto-prewedding-pakai-baju-adat-bali-klasik-kuno-dewiwawan-pre-wedding-photoshoot-in-bali-6.jpg" alt="" />
                                <div className="section-content">
                                    <h1>Lorem ipsum dolor sit</h1>
                                </div>
                            </div>
                        </div>
                        <div className="container-items">
                            <div className="content-210">
                                <img src="https://poetrafoto.files.wordpress.com/2019/03/foto-prewedding-pakai-baju-adat-bali-klasik-kuno-dewiwawan-pre-wedding-photoshoot-in-bali-6.jpg" alt="" />
                                <div className="section-content">
                                    <h1>Lorem ipsum dolor sit</h1>
                                </div>
                            </div>
                        </div>
                        <div className="container-items">
                            <div className="content-210">
                                <img src="https://poetrafoto.files.wordpress.com/2019/03/foto-prewedding-pakai-baju-adat-bali-klasik-kuno-dewiwawan-pre-wedding-photoshoot-in-bali-6.jpg" alt="" />
                                <div className="section-content">
                                    <h1>Lorem ipsum dolor sit</h1>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </>
        )
    }
}

const TimeLine = (props) => {
    useEffect(() => {
        Aos.init({
          duration : 2000
        });
      }, []);
    switch(props.type){
        case 'left' :
            return <TimeLineLeft />
        case 'slick' :
            return <TimelineSlick />
        case 'slick-section' :
            return <TimelineSlickSection />
        case 'slick-section-210' :
            return <TimelineSlickWidth />
            default : return <TimeLineLeft />
    }
}

export default TimeLine