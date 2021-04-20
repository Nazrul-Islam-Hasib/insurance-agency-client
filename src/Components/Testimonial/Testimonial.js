import React, { useEffect, useState } from 'react';
import SingleReview from './SingleReview/SingleReview';

const Testimonial = () => {
    const [review, setReview] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReview(data))
    }, [])
    return (
        <div className="bg-color">
            <div className="container section-pad">
                <div className="row justify-content-center text-center">
                    <div className="col-md-6">
                        <h2 className="secondary-color">Testimonial</h2>
                    </div>
                </div>
                <div className="row justify-content-center pt-5">
                    {
                        review.map(pd => <SingleReview key={pd._id} review={pd}></SingleReview>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Testimonial;