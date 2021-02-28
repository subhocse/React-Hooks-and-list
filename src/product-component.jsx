import React, {useState, useEffect} from 'react'
import ProductDetailsComponent from './product_details-component';
import './App.css';


const ProductComponent = () =>{
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
    const [test,setTest] = useState('test')    

    useEffect(()=>{ 
        console.log('Component did mount in number two');
    },[])


    const clicked = (value) => {
        alert('fdsf');
        // setproduct(...product);
		<ProductDetailsComponent productDetails = {value} />
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
                        <td onClick={()=> clicked(data)}><h2>{data.name}</h2></td>
                        <td><h2>{data.price}</h2></td>
                    </tr>
                    )
                })
            }
                

            </table>

        
        </>
    )

}

export default ProductComponent