import React from 'react'



const ProductDetailsComponent = (props) =>{


        console.log(props,'==props');
    
        return(
            <>
            Product Name: {props.productDetails.name}
            Description:  {props.productDetails.description}
            Price:        {props.productDetails.price}
            Category:     {props.productDetails.category}
            </>
        )

}

export default ProductDetailsComponent