import React from 'react';
import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainPage, PlaceOrder, Layout, DiningItems } from './containers/index';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path='placeorder' element={<PlaceOrder />} />
          <Route path='dining' element={<DiningItems />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App