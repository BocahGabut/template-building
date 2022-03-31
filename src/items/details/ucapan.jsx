import React from "react";

import { FormSwitch } from "../../component/other";
import { useDispatch } from 'react-redux';
import { updateState } from "../../store";

const Ucapan = (props) => {
    const dispacth = useDispatch()
    const ucapanData = props.data.ucapan.data[0]

    const handleInput = (e,index) => {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        dispacth(updateState({[name] : value,name,index : index,tab: 'ucapan'}))
    }

    return(
        <>
            <div className="property-container">
                <div className="property-content mt-1">
                    <FormSwitch checked={ucapanData.data.status} handleInput={(e) => handleInput(e,'data')} name="status" label="Matikan kolom pengisian Ucapan" id="0021bad322v1223v" />
                    <div className="d-flex tect-center justify-content-center align-items-center w-100 mt-2">
                        <label>Ucapan & doa pernikahan</label>
                    </div>
                    <div className="container-ucapan-edit mt-2">
                        <div className="items-ucapan">
                            <div className="top">
                                <div className="items">
                                    <label>Juliana robert</label>
                                    <span>29, 2022 6:37 pm</span>
                                </div>
                                <div className="stat">Akan hadir</div>
                            </div>
                            <div className="content">
                                <p>Selamat menempuh hidup baru. Semoga sakinah mawadah warahmah. Doa terbaik untuk kalian berdua 😘 lancar sampai hari H.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Ucapan