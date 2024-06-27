import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/Landing/HomePage";
import Men from "./components/Products/Men/Men";
import Products from "./components/Products/Products/Products";
import Women from "./components/Products/Women/Women";
import Jewelries from "./components/Products/Jewelries/Jewelries";
import Electronics from "./components/Products/Electronics/Electronics";
import Cart from "./components/Cart/Cart";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Router>
      <Provider store={store}>
        <div className='bg-gray-200 w-full h-screen min-h-[630px] py-2 px-4 flex flex-col gap-10'>
          <Routes>
            <Route path='/' element={<HomePage />} />
            {<Route path='/products' element={<Products />} />}
            {<Route path='/mens' element={<Men />} />}
            {<Route path='/women' element={<Women />} />}
            {<Route path='/jewelries' element={<Jewelries />} />}
            {<Route path='/electronics' element={<Electronics />} />}
            {<Route path='/cart' element={<Cart />} />}
          </Routes>
        </div>
      </Provider>
    </Router>
  );
}

export default App;
