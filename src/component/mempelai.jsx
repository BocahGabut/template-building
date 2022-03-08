import React,{useEffect} from 'react'
import '../scss/mempelai.scss'
import Aos from 'aos';
import '../scss/icons.scss'

import { connect } from 'react-redux';

const Mempelai1 = (props) => {

    const profile = props.data.profile.data[0]

    return(
        <>
            {
                (props.edit) ?
                <div className="mempelai-container type1">
                    <div className="mempelai-content">
                        <div className="content-img">
                            <img src={profile.background.backgroundImage} alt="" />
                        </div>
                        <div className="content-text pr-3 pl-3">
                            <h5 className='text-right mb-2' style={{fontWeight: `${profile.salam.fontWeight}`}}>{profile.salam.text}</h5>
                            <h6 className='text-right' style={{fontWeight: `${profile.quotes.fontWeight}`}}>{profile.quotes.text}</h6>
                        </div>
                    </div>
                    <div className="mempelai-content">
                        <div className="content-img order-md-last">
                            <img src={`${profile.mempelaiPria.photo}`} alt="" />
                        </div>
                        <div className="content-text">
                            <h5 className='text-left title-mempelai ml-1 mb-1'>{profile.mempelaiPria.nama}</h5>
                            <h6 className='parent-mempelai ml-1'>{`Putra ${profile.mempelaiPria.anakKe} dari Bapak ${profile.mempelaiPria.namaBapak} dan Ibu ${profile.mempelaiPria.namaIbu}`}</h6>
                            <a href='/' className='parent-mempelai ml-1' style={{color:'#000'}}><i className='fab fa-instagram'></i> {profile.mempelaiPria.instagram}</a>
                        </div>
                    </div>
                    <div className="mempelai-content">
                        <div className="content-img order-md-first">
                            <img src={profile.mempelaiWanita.photo} alt="" />
                        </div>
                        <div className="content-text">
                            <h5 className='text-right title-mempelai mr-1 mb-1'>{profile.mempelaiWanita.nama}</h5>
                            <h6 className='text-right parent-mempelai mr-1'>{`Putra ${profile.mempelaiWanita.anakKe} dari Bapak ${profile.mempelaiWanita.namaBapak} dan Ibu ${profile.mempelaiWanita.namaIbu}`}</h6>
                            <a href='/' className='text-right parent-mempelai mr-1' style={{color:'#000'}}><i className='fab fa-instagram'></i> {profile.mempelaiWanita.instagram}</a>
                        </div>
                    </div>
                </div>
            :
                <div className="mempelai-container type1">
                    <div className="mempelai-content">
                        <div className="content-img"
                        data-aos="fade-up"
                                data-aos-offset="200"
                                data-aos-delay="250"
                                data-aos-duration="1000">
                            <img src="https://kingfoto.com/attachments/shop_images/121.jpg" alt="" />
                        </div>
                        <div className="content-text pr-3 pl-3"
                        data-aos="fade-up"
                                data-aos-offset="200"
                                data-aos-delay="250"
                                data-aos-duration="1000">
                            <h5 className='text-right mb-2'>Assalamu`alaikum Warahmatullaahi Wabarakaatuh</h5>
                            <h6 className='text-right'>Maha Suci Allah yang telah menciptakan makhluk-Nya berpasang-pasangan. Ya Allah semoga ridho-Mu tercurah mengiringi pernikahan kami</h6>
                        </div>
                    </div>
                    <div className="mempelai-content">
                        <div className="content-img order-md-last"
                        data-aos="fade-up"
                                data-aos-offset="200"
                                data-aos-delay="250"
                                data-aos-duration="1000">
                            <img src="https://u.moment.my.id/wp-content/uploads/2021/07/pexels-trung-nguyen-9517392-1024x1024.jpg" alt="" />
                        </div>
                        <div className="content-text"
                        data-aos="fade-up"
                                data-aos-offset="200"
                                data-aos-delay="250"
                                data-aos-duration="1000">
                            <h5 className='text-left title-mempelai ml-1 mb-1'>Romeo Putra Pratama</h5>
                            <h6 className='parent-mempelai ml-1'>Putra Pertama dari Bapaknya Romeo & Ibunya Romeo</h6>
                        </div>
                    </div>
                    <div className="mempelai-content">
                        <div className="content-img order-md-first"
                        data-aos="fade-up"
                                data-aos-offset="200"
                                data-aos-delay="250"
                                data-aos-duration="1000">
                            <img src="https://u.moment.my.id/wp-content/uploads/2021/07/pexels-trung-nguyen-9517316-1024x1024.jpg" alt="" />
                        </div>
                        <div className="content-text"
                        data-aos="fade-up"
                                data-aos-offset="200"
                                data-aos-delay="250"
                                data-aos-duration="1000">
                            <h5 className='text-right title-mempelai mr-1 mb-1'>Juliet Putri Rizka</h5>
                            <h6 className='text-right parent-mempelai mr-1'>Putri Keempat dari Bapaknya Juliet & Ibunya Juliet</h6>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

const Mempelai2 = () => {
    return(
        <>
            <div className="container freeze">
                    <div className="page-heading">
                        <h4 className='mb-4'
                        data-aos="fade-up"
                            data-aos-offset="200"
                            data-aos-delay="250"
                            data-aos-duration="1000">We arew getting married</h4>
                        <h5 className='mb-3'
                        data-aos="fade-up"
                            data-aos-offset="200"
                            data-aos-delay="250"
                            data-aos-duration="1000">Assalamu`alaikum Warahmatullaahi Wabarakaatuh</h5>
                        <h6
                        data-aos="fade-up"
                            data-aos-offset="200"
                            data-aos-delay="250"
                            data-aos-duration="1000">Maha Suci Allah yang telah menciptakan makhluk-Nya berpasang-pasangan. Ya Allah semoga ridho-Mu tercurah mengiringi pernikahan kami</h6>
                    </div>
                    <div className="page-content row">
                        <div className="col-md-6 mt-2"
                        data-aos="fade-up"
                            data-aos-offset="200"
                            data-aos-delay="250"
                            data-aos-duration="1000">
                            <div className="card-mempelai bg-pattern">
                                <div className="card-mempelai-title">
                                    Romeo
                                </div>
                                <div className="card-mempelai-body">
                                    <div className="rounded-box">
                                        <img src="https://u.moment.my.id/wp-content/uploads/2021/07/pexels-trung-nguyen-9517392-1024x1024.jpg" alt="" />
                                    </div>
                                </div>
                                <div className="card-mempelai-footer">
                                    <h5>Romeo Putra Pratama</h5>
                                    <a href='/' target="_blank" rel="noopener noreferrer"><i className='fab fa-instagram'></i>@Romeo</a>
                                    <h6>Putra Pertama dari Bapaknya Romeo & Ibunya Romeo</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 mt-2"
                        data-aos="fade-up"
                            data-aos-offset="200"
                            data-aos-delay="250"
                            data-aos-duration="1000">
                            <div className="card-mempelai bg-pattern">
                                <div className="card-mempelai-title">
                                    Juliet
                                </div>
                                <div className="card-mempelai-body">
                                    <div className="rounded-box">
                                        <img src="https://u.moment.my.id/wp-content/uploads/2021/07/pexels-trung-nguyen-9517316-1024x1024.jpg" alt="" />
                                    </div>
                                </div>
                                <div className="card-mempelai-footer">
                                    <h5>Juliet Putri Rizka</h5>
                                    <a href='/' target="_blank" rel="noopener noreferrer"><i className='fab fa-instagram'></i>@Juliet</a>
                                    <h6>Putri Keempat dari Bapaknya Juliet & Ibunya Juliet</h6>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </>
    )
}

const Mempelai3 = () => {
    return(
        <>
            <div className="container pb-5 pt-5 section-3">
                <div className="row">
                    <div className="col-md-6 mt-2">
                        <div className="content">
                            <img src="https://u.moment.my.id/wp-content/uploads/2021/07/pexels-trung-nguyen-9517392.jpg" alt="" />
                            <div className="content-inner">
                                <h6>ROMEO PUTRA PRATAMA</h6>
                                <p>Putra Pertama dari Bapaknya Romeo & Ibunya Romeo</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 mt-2">
                        <div className="content">
                            <img src="https://u.moment.my.id/wp-content/uploads/2021/07/pexels-trung-nguyen-9517316.jpg" alt="" />
                            <div className="content-inner">
                                <h6>JULIET PUTRI RIZKA</h6>
                                <p>Putri Keempat dari Bapaknya Juliet & Ibunya Juliet</p>
                            </div>
                        </div>
                    </div>
                    {/* <div className="col-md-6">
                        <div className="content-rigth">
                            <img src="https://u.moment.my.id/wp-content/uploads/2021/07/pexels-trung-nguyen-9517316.jpg" alt="" />
                            <div className="content">
                                <h6>JULIET PUTRI RIZKA</h6>
                                <p>Putri Keempat dari Bapaknya Juliet & Ibunya Juliet</p>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </>
    )
}

function Mempelai(props){
    useEffect(() => {
        Aos.init({
          duration : 2000
        });
        Aos.refresh();
      }, []);
    switch(props.type){
        case '00327':
            return <Mempelai1 edit={props.edit} data={props.data.reduce} />
        case '00328':
            return <Mempelai2 />
        case '00329':
            return <Mempelai3 />
            default :
            return <Mempelai1 />
    }
}

const mapStateToProps = (state) => {
    return {
        data : state
    }
}

export default connect(mapStateToProps)(Mempelai)