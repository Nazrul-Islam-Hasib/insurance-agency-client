import React from 'react';

const SingleReview = (props) => {
    const {name, desc} = props.review;
    return (
        <div className="col-md-6 col-lg-3">
            <h2>{name}</h2>
            <p>{desc}</p>
        </div>
    );
};

export default SingleReview;