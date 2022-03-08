import React,{useEffect} from 'react'
import Aos from 'aos'

import '../scss/card.scss'

const Card1 = (props) => {
    return(
        <>
            {props.data.map((items) => {
                return(
                    <div key={items.id} className="card-type1 aos-init bg-pattern" 
                    data-aos="fade-up"
                                    data-aos-offset="200"
                                    data-aos-delay="250"
                                    data-aos-duration="1000">
                        <div className="card-heading">
                            <div className="icons mb-2">
                                <i className={items.icons}></i>
                            </div>
                            <h5>{items.title}</h5>
                        </div>
                        <div className="ornamen">
                            <img src="/ornament114.png" alt="" />
                        </div>
                        <div className="card-content">
                            <div className="date mt-2">
                                {items.date}
                            </div>
                            <div className="hour mt-1">
                                {items.hour}   
                            </div>
                            <div className="place">
                                {items.place}
                            </div>
                            <div className="address">
                                {items.address}
                            </div>
                            <a href='/' className="button-maps mt-2">
                                <i className='fal fa-map-pin'></i>
                                Google Maps
                            </a>
                        </div>
                    </div>
                )
            })}
        </>
    )
}
const Card2 = (props) => {
    return(
        <>
            {props.data.map((items) => {
                return(
                    <div key={items.id} className="card-type2 aos-init" 
                    data-aos="fade-up"
                                    data-aos-offset="200"
                                    data-aos-delay="250"
                                    data-aos-duration="1000">
                        <div className="card-heading">
                            <div className="icons mb-2">
                                <i className={items.icons}></i>
                            </div>
                            <h5>{items.title}</h5>
                        </div>
                        <div className="ornamen">
                            <img src="/ornament114.png" alt="" />
                        </div>
                        <div className="card-content">
                            <div className="date mt-2">
                                {items.date}
                            </div>
                            <div className="hour mt-1">
                                {items.hour}   
                            </div>
                            <div className="place">
                                {items.place}
                            </div>
                            <div className="address">
                                {items.address}
                            </div>
                            <a href='/' className="button-maps-type2 mt-2">
                                <i className='fal fa-map-pin'></i>
                                Google Maps
                            </a>
                        </div>
                    </div>
                )
            })}
        </>
    )
}

const Card = (props) => {
    useEffect(() => {
        Aos.init({
          duration : 2000
        });
        Aos.refresh();
      }, []);
    switch(props.type){
        case 'card-00238' :
            return <Card1 data={props.data} />
        case 'card-002213' :
            return <Card2 data={props.data} />
        default : return <Card1/>
    }
}

export default Card