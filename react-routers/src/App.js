import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import ContactUs from './Pages/ContactUs';
import Layout from './Components/Layout';

function App() {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route path='' element={<Home />} />
				<Route path='about-us' element={<About />} />
				<Route path='contact' element={<ContactUs />} />
			</Route>
		</Routes>
	);
}

export default App;
