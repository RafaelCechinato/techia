import React from 'react';
import { useRoutes } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import SingUP from '../pages/SignUp';

const AppRoutes = () => {
  const routes = [
    { path: '/', element: <Login /> },
    { path: '/sign-up', element: <SingUP /> },
    { path: '/home', element: <Home /> },
  ];

  return useRoutes(routes);
};

export default AppRoutes;
