import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';

import routes from './Router';

import './index.css';
import store, { persistor } from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	<React.StrictMode>
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<RouterProvider router={routes} />
			</PersistGate>
		</Provider>
	</React.StrictMode>
);
