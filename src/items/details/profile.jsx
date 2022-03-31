import React from "react";
import { useDispatch } from 'react-redux';
import { updateState } from "../../store";
import { FormSelect,FormText,FormImage,FormTextArea,FormMempelai,SelectableItems } from "../../component/other";

import Collapse from '../../component/collapse'
import { weightList,animationList,quotes } from '../../component/Item'

const Profile = (props) => {
    const dispacth = useDispatch()
    const profile = props.data.profile.data[0]

    const handleInput = (e,index) => {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        dispacth(updateState({[name] : value,name,index : index,tab: 'profile'}))
        
    }
    
    const handleQuote = (value) => {
        dispacth(updateState({text: value, name: 'text' ,index : 'quotes',tab: 'profile'}))
        document.getElementById('0002381').value = value
    }

    return(
        <>
            <div className="property-container">
                <label>Couple</label>
                <div className="property-content" style={{padding:'2px'}}>
                    <FormImage details={profile.background.animation} animationValue={profile.background.animation} imageDetails={profile.background.backgroundImage} index="background" target='profile' intialName="backgroundImage" animation />
                </div>
                <div className="property-content mt-2">
                    <FormSelect name="fontWeight" value={profile.salam.fontWeight} handleInput={(e) => handleInput(e,'salam')} title="Font weight" data={weightList} width="50%" />
                    <FormSelect name="animation" value={profile.salam.animation} handleInput={(e) => handleInput(e,'salam')} title="Animation" data={animationList} width="50%" />
                    <FormText className="mt-2" name='text' value={profile.salam.text} handleInput={(e) => handleInput(e,'salam')} title="Salam Pembuka"  />
                </div>
                <div className="property-content mt-2">
                    <FormSelect name="fontWeight" value={profile.quotes.fontWeight} handleInput={(e) => handleInput(e,'quotes')} title="Font weight" data={weightList} width="100%" />
                    <FormTextArea id='0002381' className="mt-1" rows={7} name='text' value={profile.quotes.text} handleInput={(e) => handleInput(e,'quotes')} title="Quotes"  />
                    <Collapse title="Quote" keyId="00239923" component={<SelectableItems handleClick={(e) => handleQuote(e)} data={quotes} btnTitle="Pilih Quotes Ini" />} />
                </div>
                <label>Calon Mempelai Pria</label>
                <div className="property-content" style={{padding:'2px'}}>
                    <FormImage details={profile.mempelaiPria.animation} index="mempelaiPria" target='profile' intialName="photo" imageDetails={profile.mempelaiPria.photo} animation animationValue={profile.mempelaiPria.animation} />
                </div>
                <div className="property-content mt-2">
                    <FormMempelai data={profile.mempelaiPria} handleInput={(e,index) => handleInput(e,index)} index="mempelaiPria" />
                    <FormSelect name="animationLeft" value={profile.mempelaiPria.animationLeft} handleInput={(e) => handleInput(e,'mempelaiPria')} title="Animation" data={animationList} width="100%" />
                </div>
                <label>Calon Mempelai Wanita</label>
                <div className="property-content" style={{padding:'2px'}}>
                    <FormImage details={profile.mempelaiWanita.animation} index="mempelaiWanita" target='profile' intialName="photo" imageDetails={profile.mempelaiWanita.photo} animation animationValue={profile.mempelaiWanita.animation} />
                </div>
                <div className="property-content mt-2">
                    <FormMempelai data={profile.mempelaiWanita} handleInput={(e,index) => handleInput(e,index)} index="mempelaiWanita" />
                    <FormSelect name="animationLeft" value={profile.mempelaiWanita.animationLeft} handleInput={(e) => handleInput(e,'mempelaiWanita')} title="Animation" data={animationList} width="100%" />
                </div>
            </div>
        </>
    )
}

export default Profile