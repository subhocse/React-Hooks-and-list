import React, {useState, useEffect} from 'react'

// const MyComponentTwo = () =>{
//     const [myState, setMyState] = useState(0)
//     const [myStateNumberTwo, setMyStateNumberTwo] = useState(0)

//     useEffect(()=>{ 
//         console.log('Component did mount in number two');
//     },[])

//     return(
//         <>
//         <h1>My component Two</h1>
//         </>
//     )

// }

const MyComponentTwo = () =>{
    const [product, setproduct] = useState(['Subho','Sajal','Hriday'])


    // const [product, setproduct] = useState([
    //     {
    //         name: 'Product Name',
    //         description: 'Product Description',
    //         price: 'price',
    //         category: 'Product Category',
    //     },
    //     {
    //         name: 'Product Name',
    //         description: 'Product Description',
    //         price: 'price',
    //         category: 'Product Category',
    //     },
    //     {
    //         name: 'Product Name',
    //         description: 'Product Description',
    //         price: 'price',
    //         category: 'Product Category',
    //     },
    //     ])

    // useEffect(()=>{ 
    //     console.log('Component did mount in number two');
    // },[])

    return(
        <>
            <h1>My component Two</h1>
            {
                product.map((data, index)=>{
                    return <h2>Student {index + 1 }: {data}</h2>
                })
            }
        
        </>
    )

}

export default MyComponentTwo