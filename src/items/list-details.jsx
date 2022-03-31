import React from 'react' 

import Details from './details'

const ListDetails = (props) => {
    return(
        <>
            <div className={`list-details ${props.className ? props.className : ''}`}>
                <div className="navbar-top-list">
                    <div onClick={() => props.handleClick()} className="back--">
                        <i className="far fa-arrow-left"></i>
                    </div>
                    <label><i className={props.icons}></i> {props.title}</label>
                </div>
                <div className="content--">
                    <Details theme="theme2" items={props.items} />
                </div>
                {/* <div className="navbar-bottom-list">
                    <div className="save--data-">
                        Save data
                    </div>
                </div> */}
            </div>
        </>
    )
}

export default ListDetails