import { useState } from 'react';
import './App.css';
import Login from './Pages/Login';
import Profile from './Pages/Profile';
import UserContext from './context/UserContext';
import Order from './Pages/Order';
import Btn from './Pages/Btn';
import ContentBox from './Pages/ContentBox';

function App() {

	// const [user, setUser] = useState(null);

	return (
		<>
			{/* // <UserContext.Provider value={{ user, setUser }}> */}
			{/* <Login />
			<br />
			<Profile />
			<br />
			<Order /> */}
			{/* </UserContext.Provider> */}


			{/* ----2---- */}
			<Btn />
			<br />
			<ContentBox />
		</>
	);
}

export default App;
