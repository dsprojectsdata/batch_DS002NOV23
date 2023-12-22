import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom';

import App from './App';
import routes from './Router';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import store from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<RouterProvider router={routes}>
				<App />
			</RouterProvider>
		</Provider>
	</React.StrictMode>
);