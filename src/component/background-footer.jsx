import React from 'react'
import '../scss/background-footer.scss'

const Background1 = () => {
    return(
        <>
            <div className="hero-footer" style={{backgroundImage:'url(./demo-1291.jpg)'}}>
                <div className="hero-footer-overflow">
                    <div className="content">
                            <div className="footer-title">
                                Terima Kasih
                            </div>
                            <div className="footer-mempelai">
                                Romeo & Juliet
                            </div>
                    </div>
                </div>
            </div>
        </>
    )
}

const Background2 = () => {
    return(
        <>
            <div className="container mt-5 mb-5">
                <div className="hero-footer-section2" style={{backgroundImage:'url(./demo-1291.jpg)'}}>
                    <div className="hero-footer-overflow">
                        <div className="content">
                            <div className="footer-mempelai">
                                WE CAN’T WAIT TO SEE YOU!
                            </div>
                            <div className="footer-title">
                                Please let us know if you’ll be able to make it.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


function BackgroundFooter(props){
      switch(props.theme){
        case 'theme1':
           return <Background1 />
        case 'theme2':
           return <Background2 />
        default: return <Background1 />
    }
}

export default BackgroundFooter