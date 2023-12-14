import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Layout from "./Components/Layout";
import Home from "./Pages/Home";
import About from "./Pages/About";
import ContactUs from "./Pages/ContactUs";
import Product, { getProductData } from "./Pages/Product";
import ProductDetails from "./Pages/Product/ProductDetails";
import ProductCartDetails from "./Pages/Product/ProductCartDetails";
import NoPageFound from "./Components/NoPageFound";

const routes = createBrowserRouter(
	createRoutesFromElements(
		<>
			<Route path='/' element={<Layout />}>
				<Route path='' element={<Home />} />
				<Route path='about-us' element={<About />} />
				<Route path='contact' element={<ContactUs />} />
				<Route path='product'>
					<Route index element={<Product />}
						loader={getProductData}
					/>
					<Route path=':productId' element={<ProductDetails />} />
					<Route path=':productId/:cartId' element={<ProductCartDetails />} />
				</Route>
			</Route>
			<Route path='*' element={<NoPageFound />} />
		</>
	)
);

export default routes;