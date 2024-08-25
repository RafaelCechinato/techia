import React from 'react';
import { useRoutes } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import SingUP from '../pages/SignUp';
import FormProduct from '../pages/FormProduct';
import ComparePrices from '../pages/ComparePrices'

const AppRoutes = () => {
  const routes = [
    { path: '/', element: <Login /> },
    { path: '/sign-up', element: <SingUP /> },
    { path: '/create-product', element: <FormProduct /> },
    { path: '/compare-prices', element: <ComparePrices /> },
    { path: '/home', element: <Home /> },
  ];

  return useRoutes(routes);
};

export default AppRoutes;
