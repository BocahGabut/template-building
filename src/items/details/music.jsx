import React,{useState,useEffect} from "react";

import { FormSwitch,AudioComponent } from "../../component/other";
import { useDispatch } from 'react-redux';
import { updateState } from "../../store";

import axios from "axios";

import { baseUrl } from "../../component/Item";

const Music = (props) => {
    const musicData = props.data.music.data[0]
    const dispacth = useDispatch()
    
    const [music, setmusic] = useState([]);

    useEffect(() => {
        axios({
            method:'GET',
            url: `${baseUrl()}/api/music`,
            headers: {
                'Api-Keys-Rumah-akad': '6be41184cdca86ebbc56da4433f303ae'
            }
        })
        .then(result => setmusic(result.data.data))
        .catch(eror => console.log(eror))
    });

    const handleInput = (e,index) => {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        dispacth(updateState({[name] : value,name,index : index,tab: 'music'}))
    }

    const setMusic = (url) => {
        dispacth(updateState({music : url,name: 'music',index : 'data',tab: 'music'}))
    }

    return(
        <>
            <div className="property-container">
                <div className="property-content mt-1">
                    <FormSwitch checked={musicData.data.settings} handleInput={(e) => handleInput(e,'data')} name="settings" label="Hilangkan music" id="0021bad321v" />
                    <label>Lagu kamu saat ini:</label>
                    <AudioComponent src={musicData.data.music} />
                    <div className="ra-sm-property mt-2">
                        <label className="info">Background Music</label>
                        <input type="file" className="file-music" accept="audio/mpeg" name="music" />
                        <span className='mt-2'>
                            silahkan cari musik yang di inginkan <a href="https://freemp3downloads.online/" target="_blank" rel="noopener noreferrer">disini</a> dan download. (size maximal 6MB, rekomendasi .mp3)
                        </span>
                    </div>
                </div>
                <label className="m-1">Pilih Lagu:</label>
                <div className="property-content mt-1">
                    {
                        music.map((items,index) => {
                            return(
                                <div className="container-audio mt-2 mb-2" key={index}>
                                    <label>{items.title}</label>
                                    <audio src={items.music} controls controlsList="nodownload" ></audio>
                                    <div className="btn btn-danger btn-sm mt-1" onClick={() => setMusic(items.music)}>Pilih Lagu</div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Music