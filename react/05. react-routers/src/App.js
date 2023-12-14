import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import ContactUs from './Pages/ContactUs';
import Layout from './Components/Layout';
import Product from './Pages/Product';
import ProductDetails from './Pages/Product/ProductDetails';
import ProductCartDetails from './Pages/Product/ProductCartDetails';
import NoPageFound from './Components/NoPageFound';

function App() {
	return (
		<>
			{/* <Routes>
				<Route path='product' element={<><h1>Extra Content for Product Route</h1></>} />
			</Routes> */}
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route path='' element={<Home />} />
					<Route path='about-us' element={<About />} />
					<Route path='contact' element={<ContactUs />} />
					<Route path='product'>
						<Route index element={<Product />}
							loader={async () => {
								const response = await fetch("https://dummyjson.com/products");
        						return await response.json();
							}}
						 />
						<Route path=':productId' element={<ProductDetails />} />
						<Route path=':productId/:cartId' element={<ProductCartDetails />} />
					</Route>
				</Route>			
				<Route path='*' element={<NoPageFound />} />
			</Routes>
		</>
	);
}

export default App;
