import React,{useState} from "react";

import axios from "axios";
import { useDispatch } from 'react-redux';
import { updateState,updateAcara,tambahAcara,deleteAcara } from "../../store";
import { FormText,FormImage,FormTextArea,FormSwitch,FormDate,FormRadio,FormMengundang } from "../../component/other";

const AcaraList = (props) => {
    const settings = props.settings
    var uniqId = new Date().getTime() + Math.random();
    const dispacth = useDispatch()
    const items = props.data

    const handleAcara = (e,index) => {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        if(name === 'date') {
            var mydate = new Date(value);
            var month = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"][mydate.getMonth()];
            var day = ["Minggu","Senin","Selasa","Rabu","Kamis","Jum'at","Sabtu"][mydate.getDay()]

            var str = day + ', ' + mydate.getDate() + ' ' + month + ' ' + mydate.getFullYear();

            dispacth(updateAcara({index: index,name : 'dateLabel',dateLabel : str,tab: 'data'}))
        }

        if(target.type === 'checkbox'){
            if(target.checked){
                dispacth(updateAcara({index: index,name,[name] : true,tab: 'settings'}))
            }else {
                dispacth(updateAcara({index: index,name,[name] : false,tab: 'settings'}))
            }
        }

        dispacth(updateAcara({index: index,name,[name] : value,tab: 'data'}))

    }

    const handleDelete = (index,title) => {
        if (window.confirm('Anda yakin ingin menghapus data '+title+' ???')) {
            dispacth(deleteAcara({index: index}))
        }
    }

    return(
        <>
            <label>{props.title}</label>
            <div className="property-content">
                <FormText className="mt-2" name='text' value={items.title} handleInput={(e) => handleAcara(e,props.index)} title="Custom/change title acara"  />
                <FormDate handleInput={(e) => handleAcara(e,props.index)} value={items.date} name="date" type="date" title="Tanggal acara" />
                <FormDate handleInput={(e) => handleAcara(e,props.index)} value={items.startHour} type="time" name="startHour" title="Acara dari pukul" />
                {
                    (settings.finished) ? '' : <FormDate value={items.endHour} handleInput={(e) => handleAcara(e,props.index)} type="time" name="endHour" title="Acara sampai pukul" />
                }
                <FormSwitch handleInput={(e) => handleAcara(e,props.index)} checked={settings.finished} name="finished" label="Sampai dengan selesai" id="0021bad10" />
                <FormText className="mt-2" name='place' value={items.place} handleInput={(e) => handleAcara(e,props.index)} title="Nama tempat acara"  />
                <FormTextArea placeholder="Jalan Pondok Merah Kuning Blok M No 22, Kaliabang tengah, Bekasi Utara" id={uniqId} className="mt-1" rows={5} name='address' value={items.address} handleInput={(e) => handleAcara(e,props.index)} title="Alamat Lokasi Acara"  />
                <FormText placeholder="Masukan URL (link) google maps" className="mt-1" name='linksGmaps' value={items.linksGmaps} handleInput={(e) => handleAcara(e,props.index)} title="Lokasi acara pernikahan"  />{
                    (settings.delete) ? 
                        <div className="btn-add-ak mt-3" onClick={() => handleDelete(props.index,items.title)}>
                            <i className="fal fa-trash"></i>
                            Delete Acara
                        </div>
                    : ''
                }
            </div>
        </>
    )
}

const Acara = (props) => {
    const dispacth = useDispatch()
    const details = props.data.details.data[0]
    const [maps, setmaps] = useState(false);
    const [mapsData, setmapsData] = useState([]);
    const [search, setsearch] = useState("");

    const handleInput = (e,index) => {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        dispacth(updateState({[name] : value,name,index : index,tab: 'details'}))
        
        if(target.type === 'datetime-local'){
            var mydate = new Date(value);
            var month = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"][mydate.getMonth()];
            var day = ["Minggu","Senin","Selasa","Rabu","Kamis","Jum'at","Sabtu"][mydate.getDay()]

            var str = day + ', ' + mydate.getDate() + ' ' + month + ' ' + mydate.getFullYear();

            dispacth(updateState({[name] : str,name,index : index,tab: 'details'}))
            dispacth(updateState({countDown : value,name : 'countDown',index : index,tab: 'details'}))
        }

    }

    const handleTimeZone = (e,index,id) => {
        const target = e.target;
        const valueZona = target.getAttribute('data-label'),
              valueWaktu = target.getAttribute('data-value')
        
        dispacth(updateState({labelWaktu : valueZona,name: 'labelWaktu',index : index,tab: 'details'}))
        dispacth(updateState({zonaWaktu : valueWaktu,name: 'zonaWaktu',index : index,tab: 'details'}))

        id.data.map((items) => {
            return(
                document.getElementById(items.id).checked = false
            )
        })
    }

    const boldString = (str, substr) => {
        var strRegExp = new RegExp(substr, 'g');

        const text = {
            __html: str.toLowerCase().replace(strRegExp, `<b>${substr.replace(/^\w/, (c) => c.toUpperCase())}</b>`)
        };

        return <label dangerouslySetInnerHTML={text} />
    }

    const getGeoLocation = (value) => {
        const sParameter = encodeURIComponent(value.trim())

        try {
            
            axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${sParameter}.json?access_token=pk.eyJ1IjoiYm9jaGdhYnV0IiwiYSI6ImNsMGthaW1scTBrbm4zZG5zd2RuYjJ0dmgifQ.CBJvwyzXe6CuSGFLW73Dmw`)
            .then((response) => {
                setmaps(true)
                setmapsData(
                    response.data.features
                )
            })

        } catch (error) {
            console.log(error)
        }

    }
    
    let timeout = null;
    const handleGeo = (e) => {
        
        clearTimeout(timeout);
        timeout = setTimeout(function () {
            setsearch(e.target.value)
            if(e.target.value !== ""){
                getGeoLocation(e.target.value)
            } else{
                setmaps(false)
                setsearch("")
            }
        }, 1000);
        
    }
    
    const handleMaps = (e) => {
        // setsearch(e)
        // document.getElementById('search-maps').value = e
        setmaps(false)

        var base_maps = 'https://www.google.com/maps/search/?api=1&query='

        // dispacth(updateState({labelWaktu : valueZona,name: 'labelWaktu',index : index,tab: 'details'}))
        dispacth(updateState({name:'linksGmaps',linksGmaps: base_maps + encodeURIComponent(e),index: 'settings',tab: 'details'}))
        dispacth(updateState({name:'address',address: e,index: 'settings',tab: 'details'}))

    }

    const addAcara = () => {

        let message = prompt("Masukan Nama Acara", "");
        if (message === '' || message === null) {
            alert('Nama Acara Tidak Boleh Kosong')
        }else {
            const data = [
                {
                    settings: {
                        title: message,
                        finished: false,
                        delete: true,
                    },
                    data: {
                        icons: 'fal fa-rings-wedding',
                        title: message,
                        dateLabel: 'Sabtu, 05 Desember 2022',
                        date: '2022-02-04',
                        startHour: '10:00',
                        endHour: '12:00',
                        place: 'Hotel Kristal Jakarta',
                        address: 'Jl. Terogong Raya No.17, RT.12/RW.10, Cilandak DKI Jakarta 12430',
                        linksGmaps: ''
                    }
                }
            ]

            dispacth(tambahAcara({data: data}))
        }
    }

    return(
        <>
            <div className="property-container mt-1">
                {/* <label>Couple</label> */}
                <div className="property-content">
                    <label>Image background</label>
                    <FormImage imageDetails={details.settings.backgroundImage} index="settings" target='details' intialName="backgroundImage" />
                    <FormSwitch checked={details.settings.private} className="mt-2" handleInput={(e) => handleInput(e,'settings')} name="private" label="Set Is Private Wedding" id="12021bad7" details="tidak akan menampilkan lokasi acara dan tanggal acara, tetapi tamu tetap bisa kirim ucapan dan amplop" />
                    <FormText className="mt-2" name='title' value={details.settings.title} handleInput={(e) => handleInput(e,'settings')} title="Title Hitungan Mundur"  />
                    <FormDate handleInput={(e) => handleInput(e,'settings')} type="datetime-local" name="date" title="Tanggal Acara Pernikahan" info="untuk tampilan hitungan mundur" />

                    <FormRadio name="zonaWaktu" dataValue="Asia/Jakarta" checked={(details.settings.labelWaktu === 'WIB') ? true : false} dataLabel="WIB" handleInput={(e) => handleTimeZone(e,'settings',{data: [{id: "000232"},{id: "000233"}]})} id="000231" content={<><strong>WIB</strong> (Asia/Jakarta)</>} />
                    <FormRadio name="zonaWaktu" dataValue="Asia/Makassar" checked={(details.settings.labelWaktu === 'WITA') ? true : false} dataLabel="WITA" handleInput={(e) => handleTimeZone(e,'settings',{data: [{id: "000233"},{id: "000231"}]})} id="000232" content={<><strong>WITA</strong> (Asia/Makassar)</>} />
                    <FormRadio name="zonaWaktu" dataValue="Asia/Jayapura" checked={(details.settings.labelWaktu === 'WIT') ? true : false} dataLabel="WIT" handleInput={(e) => handleTimeZone(e,'settings',{data: [{id: "000232"},{id: "000231"}]})} id="000233" content={<><strong>WIT</strong> (Asia/Jayapura)</>} />
                    <FormTextArea id='0002381' className="mt-1" rows={5} name='text' value={details.settings.address} handleInput={(e) => handleInput(e,'quotes')} title="Alamat Lokasi Acara"  />
                    <div className={`ra-sm-property`}>
                        <label><i className="fal fa-search mr-0-1"></i> Cari Lokasi Maps</label>
                        <input autoComplete="off" className="capital drop" id="search-maps" defaultValue={search} type="text" onKeyUp={(e) => handleGeo(e)} />
                        <span>masukan patokan lokasi acara. masjid, gedung, restoran dll</span>
                        {
                            (maps) ? 
                                <div className="drop-items">
                                    {
                                        mapsData.map((items,index) => {
                                            return(
                                                <div className="items" key={index} onClick={() => handleMaps(items.place_name)}>
                                                    <i className="fal fa-map-pin"></i>
                                                    {boldString(items.place_name,search)}
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            : ''
                        }
                        </div>
                    <FormText className="mt-1" name='text' value={details.settings.linksGmaps} handleInput={(e) => handleInput(e,'salam')} title=" Link Lokasi Pernikahan"  />
                    {/* {
                        (details.settings.private) 
                        ? ''
                        : 
                        <>
                            <FormSwitch label="Tidak Ada Akad" className="mt-2" id="0021bad8" />
                            <FormSwitch label="Akad/pemberkatan telah di laksanakan" id="0021bad9" />
                        </>
                    } */}
                </div>
                {
                    (details.settings.private) 
                    ? ''
                    : 
                    <>
                        {
                            details.acara.map((items,index) => {
                                return(
                                    <AcaraList key={index} title={items.settings.title} data={items.data} index={index} settings={items.settings} />
                                )
                            })
                        }
                        <div className="btn-add-ak mt-3 mb-2" onClick={() => addAcara()}>
                            <i className="fal fa-calendar-plus"></i>
                            Tambah Jadwal Acara
                        </div>
                    </>
                }
                <div className="property-content mt-2">
                    <FormTextArea rows={3} className="mt-1" name='liveStreaming' value={details.settings.liveStreaming} handleInput={(e) => handleInput(e,'settings')} title="Url Live Streaming" info="url instagram profile, zoom meeting, google meet dll" />
                    <FormTextArea id='0002381' className="mt-1" rows={7} name='penutup' value={details.settings.penutup} handleInput={(e) => handleInput(e,'settings')} title="Kata Penutup / Berterimakasih"  />
                    <FormMengundang data={details.mengundang} />
                    <FormSwitch handleInput={(e) => handleInput(e,'settings')} name="protocol" label="Protokol Kesehatan (Covid-19)" id="0021bad13ca" />
                </div>
            </div>
        </>
    )
}

export default Acara