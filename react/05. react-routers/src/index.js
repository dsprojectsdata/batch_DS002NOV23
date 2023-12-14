import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { RouterProvider} from "react-router-dom"

import 'bootstrap/dist/css/bootstrap.min.css';
import routes from './Router';

// const routes = createBrowserRouter(allRoutes);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		{/* <BrowserRouter>
			<App />
		</BrowserRouter> */}
		<RouterProvider router={routes} />
	</React.StrictMode>
);


// <Navigate />
// useNavigate

/*

<Context.Provider value={{}}>
	<Login />
	<Profile />
	<Order />
</Context.Provider>

*/