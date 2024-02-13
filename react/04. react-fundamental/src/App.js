// import logo from './logo.svg';
import './App.css';
import ClickIncrement from './HOC/ClickIncrement';
import HoverIncrement from './HOC/HoverIncrement';
// import UseMemoHook from './PerformanceHook';
import UseCallbackHook from './PerformanceHook/UseCallbackHook';
import ProductFilter from './ProductFilter';
// import UseEffectHook from './EffectHook/UseEffectHook';
// import UseEffectHook2 from './EffectHook/UseEffectHook2';

function App() {
  return (
    <div className="App">
      {/* <UseCallbackHook /> */}
      {/* <ClickIncrement />

      <HoverIncrement /> */}
      <ProductFilter />
    </div>
  );
}

export default App;
