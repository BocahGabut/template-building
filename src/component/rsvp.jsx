import React from 'react'
import '../scss/rsvp.scss'

const RSVP = ({dark}) => {
    return(
        <>
            <div className={((dark === true) ? 'container-rsvp dark' : 'container-rsvp')}>
                    <div className="font-meow font-4 mb-4">
                      RSVP
                    </div>
                    <div className="content-rsvp">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="form-group">
                                    <label>
                                        Full name of invitee(s)
                                    </label>
                                    <input type="text" placeholder='Full name of invitee(s)' className="form-control" />
                                </div>
                            </div>
                            <div className="col-md-6 mt-2">
                                <div className="form-group">
                                    <label>
                                        Will you be able to attend our wedding?
                                    </label>
                                    <select className='form-control' name="" id="">
                                        <option value="Yes">Yes</option>
                                        <option value="Unfortunately, No">Unfortunately, No</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-6 mt-2">
                                <div className="form-group">
                                    <label>
                                        Guest
                                    </label>
                                    <input type="number" placeholder='1' className="form-control" />
                                </div>
                            </div>
                            <div className="col-md-12 mt-3">
                                <button className="form-control btn btn-secondary pt-2 pb-2">
                                    Submit
                                </button>
                            </div>
                        </div>
                    </div>
            </div>
        </>
    )
}

export default RSVP