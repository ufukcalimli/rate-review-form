import React, {useState, useEffect} from 'react'

import Review from './Review'

const Product = () => {
    const [avgRate, setAvgRate] = useState(0)

    const PRODUCTS = [
        {
            title:'Alpha Beer',
            img: 'https://dydza6t6xitx6.cloudfront.net/ci-alfa-beer-615ef434ed498a34.jpeg',
            price: '1.00',
            reviews: [
                {
                    name: 'Ibrahim Erkal',
                    rate: 5,
                    review: 'The best beer ever!!!'
                },
                {
                    name: 'Fadil Akgunduz',
                    rate: 1,
                    review: 'I could\'ve done better'
                }
            ]
        }
    ]

    useEffect(() =>{
        PRODUCTS.forEach((product) => {
            const totalRate = product.reviews.reduce((avg, review) => avg + review.rate , 0) / product.reviews.length
            setAvgRate(totalRate)
        })
    }, [])


    return(
        <div>
            {
                PRODUCTS.map(product => {
                    return (
                    <div className='product' key={product.title} data-testid='product'>
                        <header>{product.title}</header>
                        <div className='info'>
                            <img src={product.img} alt={product.title}/>
                            <div>
                                <p>Average Rating <span className='rate' data-testid='average-rate'>{avgRate}</span></p>
                                <p className='price'>{product.price} €</p>
                            </div>
                        </div>
                        <div>
                            <header>Reviews</header>
                            {
                                product.reviews.map(review => {
                                    return (
                                        <Review 
                                            key={review.name} 
                                            name={review.name} 
                                            rate={review.rate} 
                                            review={review.review}
                                        />
                                    )
                                })
                            }
                        </div>
                    </div>
                    )
                })
            }
        </div>
    )
}

export default Product