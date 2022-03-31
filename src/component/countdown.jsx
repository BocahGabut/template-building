import React,{useEffect,useState} from 'react'
import '../scss/countdown.scss'
import Aos from 'aos';


 const Countdown = (props) => {
    useEffect(() => {
        Aos.init({
          duration : 2000
        });
      });
    const [finish, setfinish] = useState(false);

    const count = () => {
        var end = new Date(props.date);
    
        var _second = 1000;
        var _minute = _second * 60;
        var _hour = _minute * 60;
        var _day = _hour * 24;
    
        function showRemaining() {
            var now = new Date();
            var distance = end - now;
            var days = Math.floor(distance / _day);
            var hours = Math.floor((distance % _day) / _hour);
            var minutes = Math.floor((distance % _hour) / _minute);
            var seconds = Math.floor((distance % _minute) / _second);
    
            
            
            if(days < 0){
                setfinish(true)
            } else if(days >= 0) {
                document.getElementById('days').innerHTML = days;
                document.getElementById('hours').innerHTML = hours;
                document.getElementById('minute').innerHTML = minutes;
                document.getElementById('seconds').innerHTML = seconds ;
            }

        }
    
        setInterval(showRemaining, 1000);
    }
    
    const CountDownAnimate = (props) => {
        count()
        return(
            <>
                <div className={`container-countdown ${props.class}`}>
                    <div className="card-countdown"
                    data-aos="zoom-in-up"
                                data-aos-offset="200"
                                data-aos-delay="250"
                                data-aos-duration="1000">
                        <h5 id='days'>0</h5>
                        <p>Hari</p>
                    </div>
                    <div className="card-countdown"
                    data-aos="zoom-in-right"
                                data-aos-offset="200"
                                data-aos-delay="250"
                                data-aos-duration="1000">
                        <h5 id='hours'>0</h5>
                        <p>Jam</p>
                    </div>
                    <div className="card-countdown"
                    data-aos="zoom-out-right"
                                data-aos-offset="200"
                                data-aos-delay="250"
                                data-aos-duration="1000">
                        <h5 id='minute'>0</h5>
                        <p>Menit</p>
                    </div>
                    <div className="card-countdown"
                    data-aos="zoom-out-up"
                                data-aos-offset="200"
                                data-aos-delay="250"
                                data-aos-duration="1000">
                        <h5 id='seconds'>0</h5>
                        <p>Detik</p>
                    </div>
                </div>
            </>
        )
    }
    const CountDownNotAnimate = (props) => {
        count()
        return(
            <>
                {
                    <div className={`container-countdown ${props.class}`}>
                        <div className="card-countdown">
                            <h5 id='days'>0</h5>
                            <p>Hari</p>
                        </div>
                        <div className="card-countdown">
                            <h5 id='hours'>0</h5>
                            <p>Jam</p>
                        </div>
                        <div className="card-countdown">
                            <h5 id='minute'>0</h5>
                            <p>Menit</p>
                        </div>
                        <div className="card-countdown">
                            <h5 id='seconds'>0</h5>
                            <p>Detik</p>
                        </div>
                    </div>
                }
            </>
        )
    }


    switch(props.animate){
        case true : 
            return <CountDownAnimate class={props.class} />
        case false : 
            return (finish) ? '' : <CountDownNotAnimate class={props.class} />
        default : 
            return <CountDownAnimate class={props.class} />
    }
    
}

export default Countdown