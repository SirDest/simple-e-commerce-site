import React from "react";
import Header from "./components/Header/Header";
import HomePage from "./components/Landing/HomePage";

function App() {
  return (
    <div className='bg-gray-200 w-full h-screen py-2 px-4 flex flex-col gap-10'>
      <Header />
      <HomePage />
    </div>
  );
}

export default App;
