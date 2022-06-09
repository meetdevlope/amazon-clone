import React from 'react';
import Header from './components/header';
import Products from './components/Products';
import Slider from './components/Slider';
import './style.css'

function app() {
  return (
    <div className="bg-gray-100">
      <Header />
      <Slider />
      <Products />
    </div>

  );
}

export default app;
