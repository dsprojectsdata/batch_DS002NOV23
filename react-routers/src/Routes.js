import Layout from "./Components/Layout";
import About from "./Pages/About";
import ContactUs from "./Pages/ContactUs";
import Home from "./Pages/Home";

const allRoutes = [
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				path: "",
				element: <Home />
			},
			{
				path: "about",
				element: <About />
			},
			{
				path: "contact",
				element: <ContactUs />
			},
		]
	},
];

export {allRoutes};