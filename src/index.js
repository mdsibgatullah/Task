import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

import Layout from './Components/Layout/Layout';
import Home from './Page/Home/Home';
import Bus from './Page/Bus/Bus';
import FlashBlog from './Page/FlashBlog/FlashBlog';
import FlashDtl from './Page/FlashDtl/FlashDtl';
import Air from './Page/Air/Air';
import Hotel from './Page/Hotel/Hotel';
import Train from './Page/Train/Train';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="Bus" element={<Bus />} />
      <Route path="FlashBlog" element={<FlashBlog/>} />
      <Route path="FlashDtl" element={<FlashDtl/>} />
      <Route path="air" element={<Air/>} />
      <Route path="hotel" element={<Hotel/>} />
      <Route path="train" element={<Train/>} />
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
