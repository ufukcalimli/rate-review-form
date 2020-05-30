import React from 'react'

const Review = ({ name, review, rate}) => {
    return (
        <div className='review-box' >
            <div>
                <p className='rate'>{rate}</p>
                <p className='name'>{name}</p>
            </div>
            <p className='review'>{review }</p>
        </div>
    )
}

export default Review;