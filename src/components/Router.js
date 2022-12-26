import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Lunch from '../pages/Lunch';
import Main from '../pages/Main';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Main />} />
                <Route path='/lunch' element={<Lunch />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;