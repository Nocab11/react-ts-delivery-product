import React from 'react';
import {Routes, Route} from "react-router-dom"
import "./styles/reset.css";
import "./styles/main.css";

import Layout from "./pages/Layout/Layout";
import Home from "./pages/Home/Home";
import Order from "./pages/Order/Order";

const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="/order" element={<Order />} />
                </Route>
            </Routes>

        </>
    );
};

export default App;
