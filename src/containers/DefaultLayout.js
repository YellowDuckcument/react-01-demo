import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import routes from '../routes';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Major from '../pages/Major';
import Header from './Header';
const DefaultLayout = () => {
    return ( <>
    <Header></Header>
    <Routes>
        {routes.map((route, idx) => (<Route key={idx} path={route.path} element={route.component}/>))}
    </Routes>
    </> );
}
 
export default DefaultLayout;