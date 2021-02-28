import React, {useState, useEffect} from 'react'
import '../App.css';

// const MyComponent = () =>{
//     const [myState, setMyState] = useState(0)
//     const [myStateNumberTwo, setMyStateNumberTwo] = useState(0)

//     useEffect(()=>{
//         setMyState(myState)
//         return(()=>{
//             console.log('Component will unmount');
//         } )
//     },[])


//     const clicked = () =>{
//         setMyState(myState + 1)
//     }

//     const clickedTwo = () =>{
//         setMyStateNumberTwo(myStateNumberTwo + 1)
//     }

//     return(
//         <>
//         <h1>My component</h1>
//         <h2>Counter: {myState}</h2>
//         <button onClick={clicked}>Click Me</button>
//         </>
//     )

// }

const MyComponent = () =>{
    // const [product, setproduct] = useState(['Subho','Sajal','Hriday'])


    const [product, setproduct] = useState([
        {
            name: 'Product1',
            description: 'Product Description1',
            price: 'price1',
            category: 'Product Category1',
        },
        {
            name: 'Product2',
            description: 'Product Description2',
            price: 'price2',
            category: 'Product Category2',
        },
        {
            name: 'Product3',
            description: 'Product Description3',
            price: 'price3',
            category: 'Product Category3',
        },
        ])

    useEffect(()=>{ 
        console.log('Component did mount in number two');
    },[])


    const clicked = (value) => {
		alert(value);
	}

    return(
        <>
            <table>
                <tr>
                <th><h1>Product Name</h1></th>
                <th><h1>Price</h1></th>
                </tr>
                {
                product.map((data, index)=>{
                    return (
                    <tr>
                        <td onClick={()=> clicked(index)}><h2>{data.name}</h2></td>
                        <td><h2>{data.price}</h2></td>
                    </tr>
                    )
                    // <h2>Student {index + 1 }: {data.name}</h2>
                    
                })
            }
                

            </table>

        
        </>
    )

}

export default MyComponent