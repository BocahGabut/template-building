import React from "react";
import '../scss/quotes.scss'

const Quotes1 = () => {
    return(
        <>
            <div className="quotes-parallax" style={{backgroundImage:'url(./al-quran.jpg)'}}>
                <div className="quotes-overflow">
                    <div className="container">
                        <div className="content">
                            <div className="blockquote">
                                <p>
                                “Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu istri-istri dari jenismu sendiri, supaya kamu cenderung dan merasa tentram kepadanya, dan dijadikan-Nya di antaramu rasa kasih dan sayang. Sesungguhnya pada yang demikian itu benar-benar terdapat tanda-tanda bagi kaum yang berpikir.”
                                </p>
                                <strong className="font-white">QS. Ar-Rum : 21</strong>
                            </div>
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
            return <Quotes1 />
            default : return <Quotes1 />
    }
}

export default Quotes 