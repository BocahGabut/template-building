import React,{Component,useState} from 'react';
import { SketchPicker } from 'react-color';
import '../scss/other.scss'

const Scroll1 = () => {
    return(
        <>
            <span className="scroll-icon">
                <span className="scroll-icon__wheel-outer">
                    <span className="scroll-icon__wheel-inner"></span>
                </span>
            </span>
        </>
    )
}

const Scroll2 = () => {
    return(
        <>
                <span className="scroll-icon">
                    <span className="scroll-icon__dot"></span>
                </span>
        </>
    )
}

export function ScrollIcons(props){
    switch(props.type){
        case 'inner':
            return <Scroll1 />
        case 'dot':
            return <Scroll2 />
        default : 
            return <Scroll1 />
    }
}

export const FormSelect = (props) => {
    return(
        <>
            <div className="ra-sm-property" style={{width:props.width}}>
                <label>{props.title}</label>
                <div className="ra-select">
                    <select name={props.name} onChange={(e) => props.handleInput(e)} defaultValue={props.value}>
                        {props.data.map((items) => {
                            return(
                                <option key={items.value} value={items.value}>{items.display}</option>
                            )
                        })}
                    </select>
                    <div className="ra-arrow">
                        <div className="icons-arrow"></div>
                    </div>
                </div> 
            </div>
        </>
    )
}

export const FormText = (props) => {
    return(
        <>
            <div className={`ra-sm-property ${(props.className) ? props.className : ``}`} style={{width:props.width}}>
                <label className='info mb-1'>{props.title} 
                    {/* <br /> <span>click enter to see the changes</span> */}
                </label>
                <input placeholder={(props.placeholder) ? props.placeholder : ''} name={props.name}  defaultValue={props.value} type="text" onKeyUp={(e) => props.handleInput(e)} />
            </div>
        </>
    )
}

export const FormTextArea = (props) => {
    return(
        <>
            <div className="ra-sm-property" style={{width:props.width}}>
                <label>{props.title}</label>
                <textarea onChange={(e) => props.handleInput(e)} name={props.name} id={props.id} defaultValue={props.value} rows={(props.rows) ? props.rows : '3'}></textarea>
            </div>
        </>
    )
}

export const SelectableItems = (props) => {
    return(
        <>
            <div className="selected-items">
                {
                    props.data.map((items,index) => {
                        return(
                            <div className="items-cards" key={index}>
                                <div className="items">
                                    <p>
                                        {items.items}
                                    </p>
                                </div>
                                <div className="items-overlays">
                                    <div className="overlays-button" onClick={() => props.handleClick(items.items)}>{props.btnTitle}</div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}


export const FormDate = (props) => {
    return(
        <>
            <div className="ra-sm-property" style={{width:props.width}}>
                <label>{props.title}</label>
                <input name={props.name} defaultValue={props.value} type={props.type} onChange={(e) => props.handleInput(e)} />
            </div>
        </>
    )
}

export const FormMempelai = (props) => {
    return(
        <>
            <FormText className="mt-1" name='instagram' value={props.data.instagram} handleInput={(e) => props.handleInput(e,props.index)} title="Instagram profile username"  />
            <FormText className="mt-1" name='nama' value={props.data.nama} handleInput={(e) => props.handleInput(e,props.index)} title="Nama lengkap (beserta gelar)"  />
            <FormText className="mt-1" name='anakKe' value={props.data.anakKe} handleInput={(e) => props.handleInput(e,props.index)} title="Anak ke :"  />
            <FormText className="mt-1" name='namaBapak' value={props.data.namaBapak} handleInput={(e) => props.handleInput(e,props.index)} title="Nama Ayah (beserta gelar)"  />
            <FormText className="mt-1" name='namaIbu' value={props.data.namaIbu} handleInput={(e) => props.handleInput(e,props.index)} title="Nama Ibu (beserta gelar)"  />
        </>
    )
}

export class FormColor extends Component {
    constructor(props){
        super(props)

        this.title = props.title
        this.width = props.width
        this.name = props.name
        this.handleInput = props.handleInput
        this.color = props.color
        this.index = props.index

        this.state = {
            color: this.color,
            show:false
        }
    }

    handleChangeComplete = (color) => {
        this.setState({ color: `rgba(${color.rgb.r},${color.rgb.g},${color.rgb.b},${color.rgb.a})`});
        this.handleInput(this.name,`rgba(${color.rgb.r},${color.rgb.g},${color.rgb.b},${color.rgb.a})`,this.index)
    }

    handleShow = () => {
        (this.state.show === false) ? this.setState({show:true}) : this.setState({show:false})
    }

    render(){
        return(
            <>
                <div className="ra-sm-property" style={{width:this.width}}>
                    <label>{this.title}</label>
                    <div className="ra-color">
                        <input name={this.name} onClick={() => this.handleShow()} type="text" readOnly value={this.state.color} />
                        <div className="button-color" onClick={() => this.handleShow()} style={{backgroundColor:this.state.color}}></div>
                        {(this.state.show === true) ? 
                            <div className="color-container">
                                <SketchPicker
                                    width='auto'
                                    color={ this.state.color }
                                    onChangeComplete={ this.handleChangeComplete }
                                />
                            </div> : ''
                        }
                    </div>
                </div>
            </>
        )
    }
}

const repeat = [
    {
        value: 'repeat',
        display: 'repeat',
    },
    {
        value: 'repeat-x',
        display: 'repeat-x',
    },
    {
        value: 'repeat-y',
        display: 'repeat-y',
    },
    {
        value: 'no-repeat',
        display: 'no-repeat',
    },
]

const position = [
    {
        value: 'left top',
        display: 'left top',
    },
    {
        value: 'left center',
        display: 'left center',
    },
    {
        value: 'left bottom',
        display: 'left bottom',
    },
    {
        value: 'right top',
        display: 'right top',
    },
    {
        value: 'right center',
        display: 'right center',
    },
    {
        value: 'right bottom',
        display: 'right bottom',
    },
    {
        value: 'center top',
        display: 'center top',
    },
    {
        value: 'center center',
        display: 'center center',
    },
    {
        value: 'center bottom',
        display: 'center bottom',
    },
]

const size = [
    {
        value: 'auto',
        display: 'auto',
    },
    {
        value: 'cover',
        display: 'cover',
    },
    {
        value: 'contain',
        display: 'contain',
    },
]

const attachment = [
    {
        value: 'scroll',
        display: 'scroll',
    },
    {
        value: 'fixed',
        display: 'fixed',
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

export const FormImage = (props) => {
    const [open, setOpen] = useState(true);

    const handleOpen = () => {
        document.querySelectorAll('.modal-image-container')[0].classList.add('show')
        document.querySelectorAll('.modal-image-container')[0].setAttribute('data-target',props.target)
        document.querySelectorAll('.modal-image-container')[0].setAttribute('data-index',props.index)
        document.querySelectorAll('.modal-image-container')[0].setAttribute('data-name',props.intialName)
    }

    const handleClose = () => {
        setOpen(false)
    }
    
    const handleOpenView = () => {
        (open) ? setOpen(false) : setOpen(true)
    }

    return(
            <>
                <div className="ra-sm-property image">
                    <div className="top">
                        <label>{props.details} <img onClick={() => handleOpenView()} src={props.imageDetails} alt="" /> </label>
                    </div>
                    <div className="content">
                        <label>Image</label>
                        <div className="button-image" onClick={() => handleOpen()}>Add images</div>
                        {
                            (open) ? 
                            <div className="img-view show">
                                <img src={props.imageDetails} alt="" />
                                <div className="close" onClick={() => handleClose()}>X</div>
                            </div> : ''
                        }
                    </div>
                    <div className="footer">
                        {
                            (props.repeat) ?  <FormSelect name="repeat" value={props.repeatValue} handleInput={(e) => props.handleInput(e)} data={repeat} title="Repeat" width={(props.repeatSize) ? props.repeatSize : '50%'} /> : ''
                        }
                        {
                            (props.size) ?  <FormSelect name="size" value={props.sizeValue} handleInput={(e) => props.handleInput(e)} data={size} title="Size" width={(props.sizeSize) ? props.sizeSize : '50%'} /> : ''
                        }
                        {
                            (props.position) ?  <FormSelect name="position" value={props.positionValue} handleInput={(e) => props.handleInput(e)} data={position} title="Position" width={(props.positionSize) ? props.positionSize : '50%'} /> : ''
                        }
                        {
                            (props.attachment) ?  <FormSelect name="attachment" value={props.attachmentValue} handleInput={(e) => props.handleInput(e)} data={attachment} title="Attachment" width={(props.attachmentSize) ? props.attachmentSize : '50%'} /> : ''
                        }
                        {
                            (props.overflowColor) ?  <FormColor name='overflowColor' index={props.index} value={props.overflowColorValue} color={props.overflowColorValue} handleInput={(a,b,c) => props.handleColor(a,b,c)} title="Overflow Color" /> : ''
                        }
                        {
                            (props.animation) ?  <FormSelect name="animation" value={props.animationValue} handleInput={(e) => props.handleInput(e)} title="Animation" data={animationList} /> : ''
                        }
                    </div>
                </div>
            </>
    )
}

export const openGift = () => {
    let modal = document.querySelectorAll('.gift-container')

        for(let i = 0;i < modal.length;i++){
            modal[i].classList.add('show')
        }
}