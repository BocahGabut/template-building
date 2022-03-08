import React from 'react' 
import { connect } from "react-redux";
import { FormSelect,FormText,FormColor,FormImage,FormDate,FormTextArea,FormMempelai,SelectableItems } from "../../component/other";
import { updateState } from "../../store";
import { useDispatch } from 'react-redux'

import Collapse from '../../component/collapse'

import { weightList,animationList,iconsScrool,quotes } from '../../component/Item'

const Heading = (props) => {
    const dispacth = useDispatch()
    const headingSection = props.data.heading.data[0]

    const handleInput = (e,index) => {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        dispacth(updateState({[name] : value,name,index : index,tab: 'heading'}))
        
        if(target.type === 'date'){
            var mydate = new Date(value);
            var month = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"][mydate.getMonth()];
            // var str = month + ' ' + mydate.getFullYear();
            var str = mydate.getDate() + ', ' + month + ' ' + mydate.getFullYear();

            dispacth(updateState({[name] : str,name,index : index,tab: 'heading'}))
        }

    }

    const handleColor = (name,color,index) => {
        dispacth(updateState({[name] : color,name,index : index,tab: 'heading'}))
    }

    return(
        <>
             <div className="property-container">
                    <label>Background</label>
                    <div className="property-content" style={{padding:'2px'}}>
                        <FormImage handleInput={(e) => handleInput(e,'background')} handleColor={(a,b,c)=> handleColor(a,b,c)} details={`${headingSection.background.repeat} ${headingSection.background.size} ${headingSection.background.position} ${headingSection.background.attachment}`} imageDetails={headingSection.background.backgroundImage} index="background" target='heading' intialName="backgroundImage" repeat repeatValue={headingSection.background.repeat} size sizeValue={headingSection.background.size} position positionValue={headingSection.background.position} attachment attachmentValue={headingSection.background.attachment} overflowColor overflowColorValue={headingSection.background.overflowColor} animation animationValue={headingSection.background.animation} />
                    </div>
                    <label>Judul</label>
                    <div className="property-content">
                        <FormSelect name="fontWeight" value={headingSection.heading.fontWeight} handleInput={(e) => handleInput(e,'heading')} title="Font weight" data={weightList} width="50%" />
                        <FormSelect name="animation" value={headingSection.heading.animation} handleInput={(e) => handleInput(e,'heading')} title="Animation" data={animationList} width="50%" />
                        <FormText name='text' value={headingSection.heading.text} handleInput={(e) => handleInput(e,'heading')} title="Text"  />
                        <FormColor name='fontColor' index="heading" value={headingSection.heading.fontColor} color={headingSection.heading.fontColor} handleInput={(a,b,c) => handleColor(a,b,c)} title="Color" />
                    </div>
                    <label>Mempelai</label>
                    <div className="property-content">
                        <FormSelect name="fontWeight" value={headingSection.mempelai.fontWeight} handleInput={(e) => handleInput(e,'mempelai')} title="Font weight" data={weightList} width="50%" />
                        <FormSelect name="animation" value={headingSection.mempelai.animation} handleInput={(e) => handleInput(e,'mempelai')} title="Animation" data={animationList} width="50%" />
                        <FormText name='text' value={headingSection.mempelai.text} handleInput={(e) => handleInput(e,'mempelai')} title="Text"  />
                        <FormColor name='fontColor' index="mempelai" value={headingSection.mempelai.fontColor} color={headingSection.mempelai.fontColor} handleInput={(a,b,c) => handleColor(a,b,c)} title="Color" />
                    </div>
                    <label>Tanggal Acara</label>
                    <div className="property-content">
                        <FormSelect name="fontWeight" value={headingSection.date.fontWeight} handleInput={(e) => handleInput(e,'date')} title="Font weight" data={weightList} width="50%" />
                        <FormSelect name="animation" value={headingSection.date.animation} handleInput={(e) => handleInput(e,'date')} title="Animation" data={animationList} width="50%" />
                        <FormDate type="date" name='text' value={headingSection.date.text} handleInput={(e) => handleInput(e,'date')} title="Date"  />
                        <FormColor name='fontColor' index="date" value={headingSection.date.fontColor} color={headingSection.date.fontColor} handleInput={(a,b,c) => handleColor(a,b,c)} title="Color" />
                    </div>
                    <label>Scrool animation</label>
                    <div className="property-content">
                        <FormSelect name="style" value={headingSection.scrollAnimation.style} handleInput={(e) => handleInput(e,'scrollAnimation')} title="Animation" data={iconsScrool}  />
                    </div>
                </div>
        </>
    )
}

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

const Section = (props) => {
    switch(props.type){
        case '0021898317':
            return <Heading data={props.data.reduce} type={props.type} />
        case '0021898318':
            return <Profile data={props.data.reduce} type={props.type} />
        default :
            return <Heading data={props.data.reduce} />
    }
}

const mapStateToProps = (state) => {
    return {
        data : state
    }
}

export default connect(mapStateToProps)(Section)