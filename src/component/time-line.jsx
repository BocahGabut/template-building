import React,{useEffect,Component} from "react";
import '../scss/time-line.scss'
import Aos from "aos";

import Slider from "react-slick";

const TimeLineLeft = () => {
    return(
        <>
            <div className="time-line timeline-container left">
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

const TimelineSlick = (props) => {
    const data = props.data

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
      }
    return(
        <>
            <div className="time-line timeline-slick">
                <Slider {...settings}>
                    {
                        (props.animate) 
                        ?
                        data.data.map((items,index) => {
                            return(
                                <div className="slider-container aos-init" data-aos="fade-left"
                                            data-aos-offset="200"
                                            data-aos-delay="250"
                                            data-aos-duration="1000">
                                <div className="slider-content">
                                    <div className="slider-image">
                                        <img src={items.image} alt="timeline" />
                                    </div>
                                    <div className="slider-content-inner">
                                        <div className="year">{items.title}</div>
                                        <div className="month">{items.sub_title}</div>
                                        <p>{items.description}</p>
                                    </div>
                                </div>
                            </div>
                            )
                        })
                        : 
                        data.data.map((items,index) => {
                            return(
                                <div className="slider-container" key={index}>
                                    <div className="slider-content">
                                        {
                                            (items.image !== null)
                                            ? 
                                                <div className="slider-image">
                                                    <img src={items.image} alt="timeline" />
                                                </div>
                                            : ''
                                        }
                                        <div className="slider-content-inner">
                                            <div className="year">{items.title}</div>
                                            <div className="month">{items.sub_title}</div>
                                            <p>{items.description}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                    
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
                <div className="time-line timeline-slick-section aos-init"  data-aos="fade-up"
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
                <div className="time-line timeline-slick-section-210">
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
            return <TimeLineLeft data={props.data} animate={props.animate} />
        case 'slick' :
            return <TimelineSlick data={props.data} animate={props.animate} />
        case 'slick-section' :
            return <TimelineSlickSection data={props.data} animate={props.animate} />
        case 'slick-section-210' :
            return <TimelineSlickWidth data={props.data} animate={props.animate} />
            default : return <TimeLineLeft data={props.data} animate={props.animate} />
    }
}

export default TimeLine