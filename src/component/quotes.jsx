import React from "react";
import '../scss/quotes.scss'

const Quotes1 = (props) => {
    const data = props.data
    return(
        <>
            <div className={`quotes-parallax quotes-container ${(props.class !== "") ? props.class : ''}`} style={{backgroundImage:`url(${data.background.backgroundImage})`,backgroundSize:`${data.background.size}`,backgroundPosition:`${data.background.position}`,backgroundRepeat:`${data.background.repeat}`,backgroundAttachment:`${data.background.attachment} `}}>
                <div className="quotes-overflow" style={{background: `${data.background.overflowColor}`}}>
                    <div className="container">
                        <div className="content">
                            {
                                (data.background.default === true) 
                                ?
                                <div className="blockquote def">
                                    <p style={{color: `${data.quotes.color}`}} dangerouslySetInnerHTML={{__html : data.quotes.data.replace(/\r?\n|\r/g, '<br>')}}>
                                    </p>
                                </div>
                                :
                                <div className="blockquote">
                                    <img src={data.background.separator} alt="separator" />
                                    <p style={{color: `${data.quotes.color}`}} dangerouslySetInnerHTML={{__html : data.quotes.data.replace(/\r?\n|\r/g, '<br>')}}>
                                    </p>
                                    <img src={data.background.separator} alt="separator" />
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

const Quotes = (props) => {
    switch(props.type){
        case 'quotes-882128' : 
            return <Quotes1 class={props.class} data={props.data} />
            default : return <Quotes1 class={props.class}  data={props.data} />
    }
}

export default Quotes 