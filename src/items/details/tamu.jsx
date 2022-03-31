import React from "react";

import { FormSwitch,FormText } from "../../component/other";
import { useDispatch } from 'react-redux';
import { updateState } from "../../store";

const BukuTamu = (props) => {
    const dispacth = useDispatch()
    const bukuTamu = props.data.ucapan.data[0]

    const handleInput = (e,index) => {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        dispacth(updateState({[name] : value,name,index : index,tab: 'ucapan'}))
    }

    return(
        <>
            <div className="list-container">
                <div className="property-container mt-1">
                    <div className="ra-sm-property image rounded">
                        <div className="website-stat pt-1 pb-1">                                
                        <label className='mt-1 mb-1'>
                            Demi Mendukung protokol covid-19 di situasi sekarang, kita hadirkan fitur track kapasitas tamu yang sedang ada di lokasi.
                        </label>
                        </div>
                    </div>
                </div>
            </div>
            <div className="property-container">
                <div className="property-content mt-1">
                    <FormText value={bukuTamu.data.maksRsvp} className="mt-1" handleInput={(e) => handleInput(e,'data')} title="Maksimal Kapasitas Tamu di lokasi" name="maksReservation" type="number" info="Isi 0 jika tidak ada batasan maksimal." />
                    <FormSwitch checked={bukuTamu.data.status} className="mt-1" handleInput={(e) => handleInput(e,'data')} name="status" label="Selalu buka buku tamu" id="03283bd8834" details="nyalakan option ini agar buku tamu selalu bisa di buka walapun acara belum mulai" />
                    <label className="mt-1">Kapasitas venue <strong className="ml-1"> 0/100</strong></label>
                </div>
            </div>
        </>
    )
}

export default BukuTamu