import React from 'react';

const Contact = () => {
    return (
        <div className="bg-color-alt">
            <div className="container section-pad">
                <div className="row justify-content-center text-center">
                    <div className="col-md-6">
                        <h2 className="secondary-color">Contact Us</h2>
                    </div>
                </div>
                <div className="row justify-content-center pt-5">
                    <div className="col-md-6">
                        <form>
                            <div className="form-group">
                                <label htmlFor="exampleFormControlInput1">Your Name</label>
                                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Place your name here" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleFormControlInput2">Email address</label>
                                <input type="email" className="form-control" id="exampleFormControlInput2" placeholder="name@example.com" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleFormControlTextarea1">Your Message</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                            <button className="btn btn-color">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;