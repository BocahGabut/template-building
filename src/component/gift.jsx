import React,{Component} from 'react'
import '../scss/gift.scss'

class Gift extends Component {
    closeModal = () => {
        let modal = document.querySelectorAll('.gift-container.show')

        for(let i = 0;i < modal.length;i++){
            modal[i].classList.remove('show')
        }

    }
    render(){
        return(
            <>
                <div className="gift-container" >
                    <div className="gift-modal">
                        <div className="top">
                            <div className="heading-title">
                                Wedding Gift
                            </div>
                            <div className="close" onClick={() => this.closeModal()}>x</div>
                        </div>
                        <div className="content">
                            {/* <div className="content-top">
                                <h5>Wedding Gift (Rp)</h5>
                            </div> */}
                            <div className="content-body">
                                <div className="gift-selected">
                                    <div className="items active">
                                        20<span>.000</span>
                                    </div>
                                    <div className="items">
                                        50<span>.000</span>
                                    </div>
                                    <div className="items">
                                        100<span>.000</span>
                                    </div>
                                    <div className="items">
                                        200<span>.000</span>
                                    </div>
                                    <div className="items">
                                        300<span>.000</span>
                                    </div>
                                    <div className="items">
                                        500<span>.000</span>
                                    </div>
                                </div>
                                <div className="gift-cst">
                                    <div className="title">
                                        Masukan Jumlah (Rp)
                                    </div>
                                    <input type="text" placeholder='Rp 150.000' />
                                </div>
                                <div className="gift-details">
                                    <div className="gift-price mb-2">
                                        <h5>Jumlah Gift</h5>
                                        <h5>Rp20.000</h5>
                                    </div>
                                    <div className="gift-payment">
                                        <h5>Jumlah Pembayaran</h5>
                                        <h5>Rp20.000</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="footer">
                            <div className="button-pay">
                                Gift Now 
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Gift