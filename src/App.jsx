import { Routes, Route } from 'react-router'
import { useState } from 'react'
import './App.css'
import ShellLayout from '../pages/jsx-pages/ShellLayout'
import Home from '../pages/jsx-pages/Home';
import AboutUs from '../pages/jsx-pages/AboutUs';
import Products from '../pages/jsx-pages/Products';

const App = () => {

  return (
    <Routes>
      <Route element={<ShellLayout />}>
        <Route index element={<Home />} />
        <Route path='AboutUs' element={<AboutUs />} />
        <Route path='Products' element={<Products />} />
      </Route>
    </Routes>
  )
}

export default App
