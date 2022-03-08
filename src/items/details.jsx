import React from "react"

import Theme2 from './details/theme-2'

const Details = (props) => {
    switch(props.theme){
        case 'theme2' : 
        return <Theme2 type={props.items} />
        default : return
    }
}

export default Details