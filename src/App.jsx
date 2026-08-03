import { Routes, Route } from 'react-router'
import { useState } from 'react'
import './App.css'
import ShellLayout from './pages/jsx-pages/ShellLayout'
import Home from './pages/jsx-pages/Home';
import AboutUs from './pages/jsx-pages/AboutUs';
import Products from './pages/jsx-pages/Products';
import SingleProduct from './pages/jsx-pages/SingleProduct';

const App = () => {

  return (
    <Routes>
      <Route element={<ShellLayout />}>
        <Route index element={<Home />} />
        <Route path='AboutUs' element={<AboutUs />} />
        <Route path='Products' element={<Products />} />
        <Route path='Products/:id' element={<SingleProduct />} />
      </Route>
    </Routes>
  )
}

export default App
