import React,{ useState, useEffect } from 'react';
// import './App.css';
import MyComponent from './my-component';
import MyComponentTwo from './my-component-two';
import ProductComponent from './product-component';
import ProductDetailsComponent from './product_details-component';


function App() {

	const [state, setState] = useState(1)
	const clicked = (value) => {
		setState(value);
	}

	return(
	<>
	<button onClick={()=> clicked(1)}>MyComponent</button>
	<button onClick={()=> clicked(2)}>MyComponentTwo</button>
	<ProductComponent />
	<ProductDetailsComponent />
	{/* {state ===1 ? <MyComponent /> : <MyComponentTwo />} */}
	</>
	);
}

export default App;
