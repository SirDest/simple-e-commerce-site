import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import HomePage from "./components/Landing/HomePage";
import Men from "./components/Products/Men";
import Products from "./components/Products/Products";
import Women from "./components/Products/Women";
import Jewelries from "./components/Products/Jewelries";
import Electronics from "./components/Products/Electronics";

function App() {
  return (
    <Router>
      <div className='bg-gray-200 w-full h-fit py-2 px-4 flex flex-col gap-10'>
        <Routes>
          <Route path='/' element={<HomePage />} />
          {<Route path='/products' element={<Products />} />}
          {<Route path='/men' element={<Men />} />}
          {<Route path='/women' element={<Women />} />}
          {<Route path='/jewelries' element={<Jewelries />} />}
          {<Route path='/electronics' element={<Electronics />} />}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
