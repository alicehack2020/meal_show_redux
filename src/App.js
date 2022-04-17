import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Loign from "./routers/Login"
import Register from "./routers/Register"
import Home from "./routers/Home"
import Cart from "./routers/Cart"
import Navbar from './components/Navbar';
import store from './store/store';
import { Provider } from 'react-redux';
function App() {
  return (
    <Provider store={store}>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}Home></Route>
        <Route path="/Register" element={<Register/>}>Register</Route>
        <Route path="/Login" element={<Loign/>}></Route>
        <Route path="/Cart" element={<Cart/>}></Route>
      </Routes>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
