import React,{useState} from 'react'
import '../scss/gift.scss'

import { baseUrl,formatRupiah } from './Item';

import { Base64 } from 'js-base64';

const Gift = () => {
    const [gift, setGift] = useState(''),
          [pengirim, setpengirim] = useState(''),
          [description, setDescription] = useState(''),
          [payment, setPayment] = useState(false)

    const closeModal = () => {
        let modal = document.querySelectorAll('.gift-container.show')

        for(let i = 0;i < modal.length;i++){
            modal[i].classList.remove('show')
        }
        setPayment(false)
    }

    window.addEventListener('message',(e) => {
        var key = e.message ? "message" : "data";
        var data = e[key]
        if (data === 'closeModal') {
            setPayment(false)
        }
    })
    
    const handlePayment = () => {
        let input = document.querySelectorAll('.gift-cst input')
        let error = document.querySelectorAll('.gift-cst.error')
        
        for(let i = 0; i < input.length;i++){
            if(input[i].value !== ''){
                // setPayment(true)
                document.querySelectorAll('.gift-cst')[i].classList.remove('error')

                setTimeout(() => {
                    if(error.length > 0){
                        
                    }else {
                        setPayment(true)
                    }
                }, 250);

            }else {
                document.querySelectorAll('.gift-cst')[i].classList.add('error')
            }
        }
    }

    return(
        <>
            <div className="gift-container show" >
                <div className="gift-modal">
                    <div className="top">
                        <div className="heading-title">
                            Wedding Gift
                        </div>
                        <div className="close" onClick={() => closeModal()}>x</div>
                    </div>
                    {
                       (payment === true) ? 
                        <div className="content iframe">
                            <div className="content-body">
                                <iframe src={`${baseUrl()}/gift?00129baw8=${Base64.encode(gift)}&auth=${Base64.encode(pengirim)}`} title="Gift"></iframe>
                            </div>
                        </div>
                        : 
                        <>
                            <div className="content">
                                {/* <div className="content-top">
                                    <h5>Wedding Gift (Rp)</h5>
                                </div> */}
                                <div className="content-body">
                                    <div className="gift-selected">
                                        <div className={`items ${(gift === '20000') ? 'active' : ''}`} onClick={() => setGift('20000')}>
                                            20<span>.000</span>
                                        </div>
                                        <div className={`items ${(gift === '50000') ? 'active' : ''}`} onClick={() => setGift('50000')} >
                                            50<span>.000</span>
                                        </div>
                                        <div className={`items ${(gift === '100000') ? 'active' : ''}`} onClick={() => setGift('100000')} >
                                            100<span>.000</span>
                                        </div>
                                        <div className={`items ${(gift === '200000') ? 'active' : ''}`} onClick={() => setGift('200000')} >
                                            200<span>.000</span>
                                        </div>
                                        <div className={`items ${(gift === '300000') ? 'active' : ''}`} onClick={() => setGift('300000')} >
                                            300<span>.000</span>
                                        </div>
                                        <div className={`items ${(gift === '500000') ? 'active' : ''}`} onClick={() => setGift('500000')} >
                                            500<span>.000</span>
                                        </div>
                                    </div>
                                    <div className="gift-cst">
                                        <div className="title">
                                            Masukan Nama Pengirim
                                        </div>
                                        <input type="text" onChange={(e) => setpengirim(e.target.value)} value={pengirim} placeholder="Romeo Pratama" />
                                        <label className='error'>Data harus di isi</label>
                                    </div>
                                    <div className="gift-cst rupiah">
                                        <div className="title">
                                            Masukan Jumlah (Rp)
                                        </div>
                                        <input type="text" onChange={(e) => setGift(e.target.value.replace('.',''))} value={formatRupiah(gift)} placeholder="200.000" />
                                        <span>Rp.</span>
                                        <label className='error'>Data harus di isi</label>
                                    </div>
                                    <div className="gift-cst">
                                        <div className="title">
                                            Description (optional)
                                        </div>
                                        <textarea value={description} onChange={(e) => setDescription(e.target.value)} rows="3"></textarea>
                                    </div>
                                    <div className="gift-details">
                                        <div className="gift-price mb-2">
                                            <h5>Jumlah Gift</h5>
                                            <h5>Rp {formatRupiah(gift)}</h5>
                                        </div>
                                        <div className="gift-payment">
                                            <h5>Jumlah Pembayaran</h5>
                                            <h5>Rp {formatRupiah(gift)}</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="footer">
                                <div className="button-pay" onClick={() => handlePayment()}>
                                    Gift Now 
                                </div>
                            </div>
                        </>
                    }
                </div>
            </div>
        </>
    )
}

export default Gift