import React from 'react'

import { FormColor,FormTextArea,FormImage,SelectableItems } from "../../component/other";

import { updateState } from "../../store";
import { useDispatch } from "react-redux";

import { quotes,sparator } from '../../component/Item'

const Quotes = (props) => {
    const dispacth = useDispatch()
    const quotesSection = props.data.quotes.data[0]

    const handleInput = (e,index) => {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        dispacth(updateState({[name] : value,name,index : index,tab: 'quotes'}))
    }

    const handleColor = (name,color,index) => {
        dispacth(updateState({[name] : color,name,index : index,tab: 'quotes'}))
    }

    const handleQuote = (value) => {
        dispacth(updateState({data: value, name: 'data' ,index : 'quotes',tab: 'quotes'}))
        document.getElementById('aadw3232a').value = value
    }
    
    const clickSparator = (value) => {
        dispacth(updateState({separator: value, name: 'separator' ,index : 'background',tab: 'quotes'}))
        dispacth(updateState({default: false, name: 'default' ,index : 'background',tab: 'quotes'}))
    }
    
    const setDefaultSparator = () => {
        dispacth(updateState({default: true, name: 'default' ,index : 'background',tab: 'quotes'}))
    }

    return(
        <>
            <div className="property-container mt-1">
                <div className="property-content">
                    <FormImage handleInput={(e) => handleInput(e,'background')} handleColor={(a,b,c)=> handleColor(a,b,c)} index="background" details={`${quotesSection.background.repeat} ${quotesSection.background.size} ${quotesSection.background.position} ${quotesSection.background.attachment}`} target='quotes' intialName="backgroundImage" imageDetails={quotesSection.background.backgroundImage} repeat repeatValue={quotesSection.background.repeat} size sizeValue={quotesSection.background.size} position positionValue={quotesSection.background.position} attachment attachmentValue={quotesSection.background.attachment} overflowColor overflowColorValue={quotesSection.background.overflowColor} />
                </div>
                <div className="property-content mt-1">
                    <FormColor name='color' index="quotes" value={quotesSection.quotes.color} color={quotesSection.quotes.color} handleInput={(a,b,c) => handleColor(a,b,c)} title="Color" />
                    <FormTextArea id='aadw3232a' className="mt-1" rows={10} name='data' value={quotesSection.quotes.data} handleInput={(e) => handleInput(e,'quotes')} title="Quotes" />
                    <SelectableItems handleClick={(e) => handleQuote(e)} data={quotes} btnTitle="Pilih Quotes Ini" />
                </div>
                    <label>Dekorasi Quotes</label>
                <div className="property-content mt-1">
                    <div className="img-separator-container">
                        <div className="btn-set-default" onClick={() => setDefaultSparator()}>
                            <i className='fal fa-times'></i>
                            Set Default
                        </div>
                        <div className="img-separator-content">
                        {
                            sparator.map((items,index) => {
                                return(
                                    <div className="items-separator" key={index} onClick={() => clickSparator(items.src)}>
                                        <img src={items.src} alt="separator" />
                                    </div>
                                )
                            })
                        }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Quotes