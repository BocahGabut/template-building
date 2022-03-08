import React, { Component } from 'react'
import '../scss/comment.scss'

const FormComment = (props) => {
    return(
        <>
            <div className="comment-form">
                       <div className="row">
                           <div className="col-md-6 mt-3">
                               <div className="form-group">
                                   <label>Name</label>
                                    <input type="text" className="form-control" />
                               </div>
                           </div>
                           <div className="col-md-6 mt-3">
                               <div className="form-group">
                                   <label>Email</label>
                                    <input type="text" className="form-control" />
                               </div>
                           </div>
                           <div className="col-md-12 mt-3">
                               <div className="form-group">
                                   <label>Ucapan & Doa</label>
                                   <textarea name=""  rows="3" style={{resize:'none'}} className="form-control"></textarea>
                               </div>
                           </div>
                           {(props.stat === 'active') ? 
                            <div className="col-md-12 mt-3">
                                <div className="form-group">
                                    <label>Konfirmasi</label>
                                    <div className="d-flex">
                                            <div className="form-check">
                                                <input type="radio" name="" id='003281' className="form-check-input" />
                                                <label htmlFor='003281' className='form-check-label'>Akan Hadir</label>
                                            </div>
                                            <div className="form-check">
                                                <input type="radio" name="" id='003291' className="form-check-input" />
                                                <label htmlFor='003291' className='form-check-label'>Tidak Akan Hadir</label>
                                            </div>
                                    </div>
                                </div>
                            </div> : ''
                           }
                           <div className="col-md-4 mt-3">
                               <div className="form-group">
                                   <button className="btn btn-dark">
                                       Kirim ucapan
                                   </button>
                               </div>
                           </div>
                       </div>
                    </div>
        </>
    )
}

class Comment extends Component{
    constructor(props){
        super(props)

        this.state = {
            replay:false
        }

    }

    handleReplay = () => {
        (this.state.replay === false) ? this.setState({
            replay:true
        }) : this.setState({
            replay:false
        })
    }

    render(){
        return(
            <>
                <div className="comment-container">
                    <div className="comment-body">
                        <div className="top">
                            <div className="comment-count">
                                5 Comments
                            </div>
                            <div className="comment-filter">
                                <select name="" id="">
                                    <option value="ASC">Terlama</option>
                                    <option value="DESC">Terbaru</option>
                                </select>
                            </div>
                        </div>
                        <div className="content-comment">
                            <div className="comment-section">
                                <div className="profile">
                                    <div className="left">
                                        <h5>Icha</h5>
                                        <i className='fal fa-clock'></i>
                                        <span> 29, 2022 6:37 pm</span>
                                    </div>
                                    <div className="right">
                                        <h5>Akan Hadir</h5>
                                    </div>
                                </div>
                                <div className="comment">
                                    Selamat menempuh hidup baru. Semoga sakinah mawadah warahmah. Doa terbaik untuk kalian berdua 😘 lancar sampai hari H.
                                </div>
                                <div className="footer">
                                    <div className="like">
                                        <i className='fal fa-laugh-beam'></i>
                                        99
                                    </div>
                                    {/* <div className="replay-comment" onClick={() => this.handleReplay()}>
                                        <i className='fal fa-reply'></i>
                                        Replay
                                    </div> */}
                                </div>
                                {/* <div className="replay-form">
                                    {
                                        (this.state.replay === true) ? <FormComment /> : ''
                                    }
                                </div> */}
                            </div>
                            <div className="load-comment">
                                <h6>
                                    Load more comment 99+
                                </h6>
                            </div>
                        </div>
                    </div>
                    <FormComment />
                </div>
            </>
        )
    }
}

export default Comment