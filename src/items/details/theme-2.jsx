import React from 'react' 
import { connect } from "react-redux";
import { FormSelect,FormText,FormColor,FormImage,FormDate} from "../../component/other";
import { updateState } from "../../store";
import { useDispatch } from 'react-redux'

import Profile from './profile';
import Acara from './acara';
import Gallery from './gallery';
import Quotes from './quotes';
import TimeLine from './time-line';
import Music from './music';
import Rsvp from './rsvp';
import Ucapan from './ucapan';
import BukuTamu from './tamu';

import { weightList,animationList,iconsScrool } from '../../component/Item'

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

const Section = (props) => {
    switch(props.type){
        case '0021898317':
            return <Heading data={props.data.reduce} type={props.type} />
        case '0021898318':
            return <Profile data={props.data.reduce} type={props.type} />
        case '0021898319':
            return <Acara data={props.data.reduce} type={props.type} />
        case '0021898320':
            return <Gallery data={props.data.reduce} type={props.type} />
        case '0021898321':
            return <Quotes data={props.data.reduce} />
        case '0021898322':
            return <TimeLine data={props.data.reduce} />
        case '0021898323':
            return <Music data={props.data.reduce} />
        case '0021898324':
            return <Rsvp data={props.data.reduce} />
        case '0021898325':
            return <Ucapan data={props.data.reduce} />
        case '0021898326':
            return <BukuTamu data={props.data.reduce} />
        default :
            return <Heading data={props.data.reduce} type={props.type}/>
    }
}

const mapStateToProps = (state) => {
    return {
        data : state
    }
}

export default connect(mapStateToProps)(Section)