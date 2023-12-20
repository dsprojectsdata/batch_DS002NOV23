import logo from './logo.svg';
import './App.css';
import DisplayCount from './Pages/DisplayCount';
import Btn from './Pages/Btn';
import Products from './Pages/Products';

function App() {
	return (
		<div className="App">
			<DisplayCount />

			<Btn />

			<Products />
		</div>
	);
}

export default App;
