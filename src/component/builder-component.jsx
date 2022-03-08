import React from "react";
import { connect } from "react-redux";

import { FormSelect,FormText,FormColor,FormImage,FormDate,FormTextArea } from "./other";

import { updateHeading } from "../store";

import { useDispatch } from 'react-redux'

const fontList = [
    {
        value: 'Arial, Helvetica, sans-serif',
        display: 'Arial'
    },
    {
        value: 'Arial Black, Gadget, sans-serif',
        display: 'Arial Black'
    },
    {
        value: 'Brush Script MT, sans-serif',
        display: 'Brush Script MT'
    },
    {
        value: 'Comic Sans MS, cursive, sans-serif',
        display: 'Comic Sans MS'
    },
    {
        value: 'Courier New, Courier, monospace',
        display: 'Courier New'
    },
    {
        value: 'Georgia, serif',
        display: 'Georgia'
    },
    {
        value: 'Helvetica, sans-serif',
        display: 'Helvetica'
    },
    {
        value: 'Impact, Charcoal, sans-serif',
        display: 'Impact'
    },
    {
        value: 'Lucida Sans Unicode, Lucida Grande, sans-serif',
        display: 'Lucida Sans Unicode'
    },
    {
        value: 'Tahoma, Geneva, sans-serif',
        display: 'Tahoma'
    },
    {
        value: 'Times New Roman, Times, serif',
        display: 'Times New Roman'
    },
    {
        value: 'Trebuchet MS, Helvetica, sans-serif',
        display: 'Trebuchet MS'
    },
    {
        value: 'Verdana, Geneva, sans-serif',
        display: 'Verdana'
    },
    
]

const weightList = [
    {
        value: '100',
        display: 'Thin'
    },
    {
        value: '200',
        display: 'Extra Light (Ultra Light)'
    },
    {
        value: '300',
        display: 'Light'
    },
    {
        value: '400',
        display: 'Normal'
    },
    {
        value: '500',
        display: 'Medium'
    },
    {
        value: '600',
        display: 'Semi Bold (Demi Bold)'
    },
    {
        value: '700',
        display: 'Bold'
    },
    {
        value: '800',
        display: 'Extra Bold (Ultra Bold)'
    },
    {
        value: '900',
        display: 'Ultra-Bold'
    },
]

const animationList = [
    {
        value:'fade-up',
        display:'fade-up'
    },
    {
        value:'fade-down',
        display:'fade-down'
    },
    {
        value:'fade-right',
        display:'fade-right'
    },
    {
        value:'fade-left',
        display:'fade-left'
    },
    {
        value:'fade-up-right',
        display:'fade-up-right'
    },
    {
        value:'fade-up-left',
        display:'fade-up-left'
    },
    {
        value:'fade-down-right',
        display:'fade-down-right'
    },
    {
        value:'fade-down-left',
        display:'fade-down-left'
    },
    {
        value:'flip-left',
        display:'flip-left'
    },
    {
        value:'flip-right',
        display:'flip-right'
    },
    {
        value:'flip-up',
        display:'flip-up'
    },
    {
        value:'flip-down',
        display:'flip-down'
    },
    {
        value:'zoom-in',
        display:'zoom-in'
    },
    {
        value:'zoom-in-up',
        display:'zoom-in-up'
    },
    {
        value:'zoom-in-down',
        display:'zoom-in-down'
    },
    {
        value:'zoom-in-left',
        display:'zoom-in-left'
    },
    {
        value:'zoom-in-right',
        display:'zoom-in-right'
    },
    {
        value:'zoom-out',
        display:'zoom-out'
    },
    {
        value:'zoom-out-up',
        display:'zoom-out-up'
    },
    {
        value:'zoom-out-down',
        display:'zoom-out-down'
    },
    {
        value:'zoom-out-left',
        display:'zoom-out-left'
    },
    {
        value:'zoom-out-right',
        display:'zoom-out-right'
    },
]

const iconsScrool = [
    {
        value:'wheel-inner',
        display: 'wheel inner'
    },
    {
        value:'dot',
        display: 'dot'
    },
]

const Section1 = (props) => {
    
    const dispacth = useDispatch()
    const headingSection = props.data.sectiontop.data[0]

    const handleInput = (e,index) => {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        if(target.type === 'text'){
            if(e.keyCode === 13){
                dispacth(updateHeading({[name] : value,name,index : index}))
            }
        }else {
            dispacth(updateHeading({[name] : value,name,index : index}))
        }
        
        if(target.type === 'date'){
            var mydate = new Date(value);
            var month = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"][mydate.getMonth()];
            // var str = month + ' ' + mydate.getFullYear();
            var str = mydate.getDate() + ', ' + month + ' ' + mydate.getFullYear();

            dispacth(updateHeading({[name] : str,name,index : index}))
        }

    }

    const handleColor = (name,color,index) => {
        setTimeout(() => {
            dispacth(updateHeading({[name] : color,name,index : index}))
        }, 550);
    }

    return(
        <>
             <div className="property-container">
                {/* <button className="save-button-config" onClick={() => dispatch(increment())}>Save {count}</button> */}
                    <label>Background</label>
                    <div className="property-content" style={{padding:'2px'}}>
                        <FormImage data={headingSection} />
                    </div>
                    <label>Judul</label>
                    {/* <Test /> */}
                    <div className="property-content">
                        <FormSelect name="fontFamily"  handleInput={(e) => handleInput(e,'heading')} title="Font family" data={fontList} width="50%" />
                        <FormSelect name="fontWeight" value={headingSection.heading.fontWeight} handleInput={(e) => handleInput(e,'heading')} title="Font weight" data={weightList} width="50%" />
                        <FormText name='text' value={headingSection.heading.text} handleInput={(e) => handleInput(e,'heading')} title="Text"  />
                        <FormColor name='fontColor' index="heading" value={headingSection.heading.fontColor} color={headingSection.heading.fontColor} handleInput={(a,b,c) => handleColor(a,b,c)} title="Color" />
                        <FormSelect name="animation" value={headingSection.heading.animation} handleInput={(e) => handleInput(e,'heading')} title="Animation" data={animationList}  />
                    </div>
                    <label>Mempelai</label>
                    <div className="property-content">
                        <FormSelect name="fontFamily"  handleInput={(e) => handleInput(e,'mempelai')} title="Font family" data={fontList} width="50%" />
                        <FormSelect name="fontWeight" value={headingSection.mempelai.fontWeight} handleInput={(e) => handleInput(e,'mempelai')} title="Font weight" data={weightList} width="50%" />
                        <FormText name='text' value={headingSection.mempelai.text} handleInput={(e) => handleInput(e,'mempelai')} title="Text"  />
                        <FormColor name='fontColor' index="mempelai" value={headingSection.mempelai.fontColor} color={headingSection.mempelai.fontColor} handleInput={(a,b,c) => handleColor(a,b,c)} title="Color" />
                        <FormSelect name="animation" value={headingSection.mempelai.animation} handleInput={(e) => handleInput(e,'mempelai')} title="Animation" data={animationList}  />
                    </div>
                    <label>Tanggal Acara</label>
                    <div className="property-content">
                        <FormSelect name="fontFamily"  handleInput={(e) => handleInput(e,'date')} title="Font family" data={fontList} width="50%" />
                        <FormSelect name="fontWeight" value={headingSection.date.fontWeight} handleInput={(e) => handleInput(e,'date')} title="Font weight" data={weightList} width="50%" />
                        <FormDate type="date" name='text' value={headingSection.date.text} handleInput={(e) => handleInput(e,'date')} title="Date"  />
                        <FormColor name='fontColor' index="date" value={headingSection.date.fontColor} color={headingSection.date.fontColor} handleInput={(a,b,c) => handleColor(a,b,c)} title="Color" />
                        <FormSelect name="animation" value={headingSection.date.animation} handleInput={(e) => handleInput(e,'date')} title="Animation" data={animationList}  />
                    </div>
                    <label>Scrool animation</label>
                    <div className="property-content">
                        <FormSelect name="style" value={headingSection.scrollAnimation.style} handleInput={(e) => handleInput(e,'scrollAnimation')} title="Animation" data={iconsScrool}  />
                    </div>
                    <div className="footer-content">
                        {/* <button className="save-button-config" onClick={() => this.check()}>Save</button> */}
                    </div>
                </div>
        </>
    )
}

const Section2 = (props) => {
    
    const dispacth = useDispatch()
    const headingSection = props.data.sectiontop.data[0]

    const handleInput = (e,index) => {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        if(target.type === 'text'){
            if(e.keyCode === 13){
                dispacth(updateHeading({[name] : value,name,index : index}))
            }
        }else {
            dispacth(updateHeading({[name] : value,name,index : index}))
        }
        
        if(target.type === 'date'){
            var mydate = new Date(value);
            var month = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"][mydate.getMonth()];
            // var str = month + ' ' + mydate.getFullYear();
            var str = mydate.getDate() + ', ' + month + ' ' + mydate.getFullYear();

            dispacth(updateHeading({[name] : str,name,index : index}))
        }

    }

    const handleColor = (name,color,index) => {
        setTimeout(() => {
            dispacth(updateHeading({[name] : color,name,index : index}))
        }, 550);
    }

    return(
        <>
             <div className="property-container">
                {/* <button className="save-button-config" onClick={() => dispatch(increment())}>Save {count}</button> */}
                    <label>Custom/Change Title Couple</label>
                    <div className="property-content" style={{padding:'2px'}}>
                        <FormImage size repeat position attachment animation data={headingSection} />
                    </div>
                    <label>Content</label>
                    <div className="property-content">
                        <FormSelect name="fontFamily"  handleInput={(e) => handleInput(e,'heading')} title="Font family" data={fontList} width="50%" />
                        <FormSelect name="fontWeight" value={headingSection.heading.fontWeight} handleInput={(e) => handleInput(e,'heading')} title="Font weight" data={weightList} width="50%" />
                        <FormText name='text' value={headingSection.heading.text} handleInput={(e) => handleInput(e,'heading')} title="Salam"  />
                        <FormTextArea rows={5} name='text' value={headingSection.heading.text} handleInput={(e) => handleInput(e,'heading')} title="Pujian"  />
                        <FormColor name='fontColor' index="heading" value={headingSection.heading.fontColor} color={headingSection.heading.fontColor} handleInput={(a,b,c) => handleColor(a,b,c)} title="Color" />
                        <FormSelect name="animation" value={headingSection.heading.animation} handleInput={(e) => handleInput(e,'heading')} title="Animation" data={animationList}  />
                    </div>
                    <label>Mempelai Pria</label>
                    <div className="property-content">
                        <FormText placeholder="Romeo Putra Pratama S.Kom" name='text' handleInput={(e) => handleInput(e,'heading')} title="Nama lengkap (beserta gelar)"  />
                        <FormText placeholder="tunggal/bungsu/pertama/kedua/terakhir" name='text' handleInput={(e) => handleInput(e,'heading')} title="Anak ke :"  />
                        <FormText placeholder="Bapak Akbar S.Kom" name='text' handleInput={(e) => handleInput(e,'heading')} title="Nama Ayah (beserta gelar)"  />
                        <FormText placeholder="Ibu Siti S.Kom" name='text' handleInput={(e) => handleInput(e,'heading')} title="Nama Ibu (beserta gelar)"  />
                        <FormColor name='fontColor' index="heading" value={headingSection.heading.fontColor} color={headingSection.heading.fontColor} handleInput={(a,b,c) => handleColor(a,b,c)} title="Color" />
                        <FormSelect name="animation" value={headingSection.heading.animation} handleInput={(e) => handleInput(e,'heading')} title="Animation" data={animationList}  />
                    </div>
                    <label>Mempelai Wanita</label>
                    <div className="property-content">
                        <FormText placeholder="Juliet Putri Rizka S.Kom" name='text' handleInput={(e) => handleInput(e,'heading')} title="Nama lengkap (beserta gelar)"  />
                        <FormText placeholder="tunggal/bungsu/pertama/kedua/terakhir" name='text' handleInput={(e) => handleInput(e,'heading')} title="Anak ke :"  />
                        <FormText placeholder="Bapak Akbar S.Kom" name='text' handleInput={(e) => handleInput(e,'heading')} title="Nama Ayah (beserta gelar)"  />
                        <FormText placeholder="Ibu Siti S.Kom" name='text' handleInput={(e) => handleInput(e,'heading')} title="Nama Ibu (beserta gelar)"  />
                        <FormColor name='fontColor' index="heading" value={headingSection.heading.fontColor} color={headingSection.heading.fontColor} handleInput={(a,b,c) => handleColor(a,b,c)} title="Color" />
                        <FormSelect name="animation" value={headingSection.heading.animation} handleInput={(e) => handleInput(e,'heading')} title="Animation" data={animationList}  />
                    </div>
                    {/* <label>Judul</label>
                    <div className="property-content">
                        <FormSelect name="fontFamily"  handleInput={(e) => handleInput(e,'heading')} title="Font family" data={fontList} width="50%" />
                        <FormSelect name="fontWeight" value={headingSection.heading.fontWeight} handleInput={(e) => handleInput(e,'heading')} title="Font weight" data={weightList} width="50%" />
                        <FormText name='text' value={headingSection.heading.text} handleInput={(e) => handleInput(e,'heading')} title="Text"  />
                        <FormColor name='fontColor' index="heading" value={headingSection.heading.fontColor} color={headingSection.heading.fontColor} handleInput={(a,b,c) => handleColor(a,b,c)} title="Color" />
                        <FormSelect name="animation" value={headingSection.heading.animation} handleInput={(e) => handleInput(e,'heading')} title="Animation" data={animationList}  />
                    </div>
                    <label>Mempelai</label>
                    <div className="property-content">
                        <FormSelect name="fontFamily"  handleInput={(e) => handleInput(e,'mempelai')} title="Font family" data={fontList} width="50%" />
                        <FormSelect name="fontWeight" value={headingSection.mempelai.fontWeight} handleInput={(e) => handleInput(e,'mempelai')} title="Font weight" data={weightList} width="50%" />
                        <FormText name='text' value={headingSection.mempelai.text} handleInput={(e) => handleInput(e,'mempelai')} title="Text"  />
                        <FormColor name='fontColor' index="mempelai" value={headingSection.mempelai.fontColor} color={headingSection.mempelai.fontColor} handleInput={(a,b,c) => handleColor(a,b,c)} title="Color" />
                        <FormSelect name="animation" value={headingSection.mempelai.animation} handleInput={(e) => handleInput(e,'mempelai')} title="Animation" data={animationList}  />
                    </div>
                    <label>Tanggal Acara</label>
                    <div className="property-content">
                        <FormSelect name="fontFamily"  handleInput={(e) => handleInput(e,'date')} title="Font family" data={fontList} width="50%" />
                        <FormSelect name="fontWeight" value={headingSection.date.fontWeight} handleInput={(e) => handleInput(e,'date')} title="Font weight" data={weightList} width="50%" />
                        <FormDate type="date" name='text' value={headingSection.date.text} handleInput={(e) => handleInput(e,'date')} title="Date"  />
                        <FormColor name='fontColor' index="date" value={headingSection.date.fontColor} color={headingSection.date.fontColor} handleInput={(a,b,c) => handleColor(a,b,c)} title="Color" />
                        <FormSelect name="animation" value={headingSection.date.animation} handleInput={(e) => handleInput(e,'date')} title="Animation" data={animationList}  />
                    </div>
                    <label>Scrool animation</label>
                    <div className="property-content">
                        <FormSelect name="style" value={headingSection.scrollAnimation.style} handleInput={(e) => handleInput(e,'scrollAnimation')} title="Animation" data={iconsScrool}  />
                    </div> */}
                    <div className="footer-content">
                        {/* <button className="save-button-config" onClick={() => this.check()}>Save</button> */}
                    </div>
                </div>
        </>
    )
}

const Section = (props) => {
    // console.log(props)
    switch(props.type){
        case '1200321':
            return <Section1 data={props.data.reduce} />
        case '1200322':
            return <Section2 data={props.data.reduce} />
        default :
            return <Section1 data={props.data.reduce} />
    }
}

const mapStateToProps = (state) => {
    return {
        data : state
    }
}

export default connect(mapStateToProps)(Section)