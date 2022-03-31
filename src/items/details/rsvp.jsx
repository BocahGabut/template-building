import React from "react";

import { FormSwitch, FormText } from "../../component/other";
import { useDispatch } from 'react-redux';
import { updateState } from "../../store";

const Rsvp = (props) => {
    const dispacth = useDispatch()
    const rsvp = props.data.rsvp.data[0]

    const handleInput = (e,index) => {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        dispacth(updateState({[name] : value,name,index : index,tab: 'rsvp'}))
    }

    return(
        <>
            <div className="property-container">
                <div className="property-content mt-1">
                    <FormSwitch name="disable" checked={rsvp.data.disable} handleInput={(e) => handleInput(e,'data')} label="Disabled RSVP(Hilangkan RSVP)" id="0021bad321v12" />
                    <FormSwitch name="rspCount" checked={rsvp.data.rspCount} handleInput={(e) => handleInput(e,'data')} label="Sembunyikan jumlah tamu yang akan datang" id="0021bad321v112" />

                    <FormText value={rsvp.data.maksRsvp} className="mt-1" handleInput={(e) => handleInput(e,'data')} title="Maksimal Reservation" name="maksReservation" type="number" info="Isi 0 jika tidak ada batasan maksimal." />
                </div>
            </div>
        </>
    )
}

export default Rsvp