import React,{useEffect} from 'react'
import '../scss/background-slide.scss'
import Slider from "react-slick";
import "aos/dist/aos.css";
import Aos from 'aos';
import { ScrollIcons } from './other';
import { Component } from 'react';
import { connect } from "react-redux";

const Background1 = () => {
    const settings = {
      dots: false,
      infinite: true,
      speed: 1200,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      fade:true,
      swipeToSlide: false,
    };
    return(
        
        <>
            <div className="hero-background-slider aos-init"
            data-aos="zoom-in"
                data-aos-offset="200"
                data-aos-duration="1000"
            >
                <Slider {...settings}>
                    <div className='slider-image' >
                        <div style={{backgroundImage:'url(https://www.99.co/blog/indonesia/wp-content/uploads/2020/12/foto-prewedding-unik-dan-murah.jpg)'}}></div>
                    </div>
                    <div className='slider-image' >
                        <div style={{backgroundImage:'url(https://cdn-cas.orami.co.id/parenting/images/Outdoor_Foto_Prewedding_pexels.com_Trung_Nguye.width-800.jpg)'}}></div>
                    </div>
                </Slider>
                <div className="hero-background-overflow">
                    <div className="hero-background-content">
                        <div className="container">
                            <div className="hero-title aos-init"  
                            data-aos="zoom-in"
                            data-aos-offset="200"
                            data-aos-delay="250"
                            data-aos-duration="1000">
                                The Wedding
                            </div>
                            <div className="hero-heading aos-init"
                            data-aos="zoom-in"
                            data-aos-offset="200"
                            data-aos-delay="250"
                            data-aos-duration="1000"
                            >
                                <h1>
                                    ROMEO <br /> & <br /> JULIET
                                </h1>
                            </div>
                            <div className='ornamen aos-init'
                            data-aos="zoom-in"
                            data-aos-offset="200"
                            data-aos-delay="250"
                            data-aos-duration="1000"
                            >
                                <img src="/ornamen-18.png" alt="" />
                            </div>
                            <div className="save-date aos-init"
                            data-aos="zoom-in"
                            data-aos-offset="200"
                            data-aos-duration="1000"
                            data-aos-anchor-placement="top-bottom"
                            >
                                <a href='/' className="button-date">
                                    Sabtu, 05 Desember 2022
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

const Background4 = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 1200,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        fade:true,
        swipeToSlide: false,
      };
    return(
        <>
            <div className="hero-background-slider" data-aos="zoom-in"
                            data-aos-offset="100"
                            data-aos-duration="1000">
                <Slider {...settings}>
                    <div className='slider-image' >
                        <div style={{backgroundImage:'url(https://cdn.popbela.com/content-images/post/20180924/18580513-674735372718204-4331574732487917568-n-97741d6213795e438abd87c0175444c3.jpg)'}}></div>
                    </div>
                    <div className='slider-image' >
                        <div style={{backgroundImage:'url(https://ath2.unileverservices.com/wp-content/uploads/sites/10/2019/11/prewedding-1.jpg)'}}></div>
                    </div>
                </Slider>
                <div className="overflow-dark">
                    <div className="content">
                        <div className="container d-flex flex-column align-items-center">
                            <h5 data-aos="zoom-in"
                            data-aos-offset="200"
                            data-aos-delay="250"
                            data-aos-duration="1000" 
                            data-aos-anchor-placement="top-bottom">The Wedding</h5>
                            <h4 data-aos="zoom-in"
                            data-aos-offset="200"
                            data-aos-delay="250"
                            data-aos-duration="1000"
                            data-aos-anchor-placement="top-bottom">Romeo & Juliet</h4>
                            <h6 >Sabtu, 25 Desember 2025</h6>
                        </div>
                        <div className="bottom--" >
                            <ScrollIcons type="inner" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

const Background3 = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 1200,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        fade:true,
        swipeToSlide: false,
      };
    return(
        <>
            <div className="hero-background-slider" data-aos="zoom-in"
                            data-aos-offset="100"
                            data-aos-duration="1000">
                <Slider {...settings}>
                    <div className='slider-image' >
                        <div style={{backgroundImage:'url(https://cdn.popbela.com/content-images/post/20180924/18580513-674735372718204-4331574732487917568-n-97741d6213795e438abd87c0175444c3.jpg)'}}></div>
                    </div>
                    <div className='slider-image' >
                        <div style={{backgroundImage:'url(https://ath2.unileverservices.com/wp-content/uploads/sites/10/2019/11/prewedding-1.jpg)'}}></div>
                    </div>
                </Slider>
                <div className="overflow-bottom">
                    <div className="content">
                        <div className="container d-flex flex-column align-items-center">
                            <h5 data-aos="zoom-in"
                            data-aos-offset="200"
                            data-aos-delay="250"
                            data-aos-duration="1000">The Wedding</h5>
                            <h4 data-aos="zoom-in"
                            data-aos-offset="200"
                            data-aos-delay="250"
                            data-aos-duration="1000">Romeo & Juliet</h4>
                            <h6 >Sabtu, 25 Desember 2025</h6>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

class Background2 extends Component { 
    constructor(props){
        super(props)
        
        this.state = {
            edit: this.props.edit
        }
    }
    render(){
        return(
            <>
                {
                    (this.state.edit === true)
                    ? 
                    this.props.data.heading.data.map((items,index) => {
                           return(
                            <div key={index} className="hero-background parallax" style={{backgroundImage:`url(${items.background.backgroundImage})`,backgroundSize:`${items.background.size}`,backgroundPosition:`${items.background.position}`,backgroundRepeat:`${items.background.repeat}`,backgroundAttachment:`${items.background.attachment}`}}> 
                                <div className="overflow" style={{background: `${items.background.overflowColor}`}}>
                                    <div className="content">
                                        <div className="container d-flex flex-column align-items-center">
                                            <h5 style={{fontWeight:`${items.heading.fontWeight}`,color:`${items.heading.fontColor}`}} >{items.heading.text}</h5>
                                            <h4 style={{fontWeight:`${items.mempelai.fontWeight}`,color:`${items.mempelai.fontColor}`}} >{items.mempelai.text}</h4>
                                            <h5 style={{fontWeight:`${items.date.fontWeight}`,color:`${items.date.fontColor}`}} >{items.date.text}</h5>
                                            <div className="bottom--" >
                                                <ScrollIcons type={items.scrollAnimation.style} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                           )
                       })
                    :
                        <div className="hero-background parallax" style={{backgroundImage:'url(https://vocasia.id/blog/wp-content/uploads/2021/10/Prewedding-Konsep.jpg)'}} 
                        data-aos="zoom-in"
                                        data-aos-offset="100"
                                        data-aos-duration="1000">
                            <div className="overflow">
                                <div className="content">
                                    <div className="container d-flex flex-column align-items-center">
                                        <h5  data-aos="zoom-in"
                                        data-aos-offset="200"
                                        data-aos-delay="250"
                                        data-aos-duration="1000">The Wedding</h5>
                                        <h4  data-aos="zoom-in"
                                        data-aos-offset="200"
                                        data-aos-delay="250"
                                        data-aos-duration="1000">Romeo & Juliet </h4>
                                        <h5  data-aos="zoom-in"
                                        data-aos-offset="200"
                                        data-aos-delay="250"
                                        data-aos-duration="1000">25, Desember 2025</h5>
                                        <div className="bottom--" >
                                            <ScrollIcons type="inner" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                }
            </>
        )
    }
}

function BackgroundSlide(props){
    useEffect(() => {
        Aos.init({
          duration : 2000
        });
        Aos.refresh();
      }, []);
      switch(props.theme){
        case 'theme1':
           return <Background1 />
        case 'theme2':
           return <Background2 edit={props.edit} data={props.data.reduce} />
        case 'theme3':
           return <Background3 />
        case 'theme4':
           return <Background4 />
        default: return <Background1 />
    }
}

const mapStateToProps = (state) => {
    return {
        data : state
    }
}

export default connect(mapStateToProps)(BackgroundSlide)