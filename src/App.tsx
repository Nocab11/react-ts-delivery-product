import React from 'react';
import "./reset.css";
import ProductList from "./components/ProductList/ProductList";
import NavBar from "./components/NavBar/NavBar";
import ModalItem from "./components/Modal/ModalItem";

const App = () => {
    return (
        <div>
            <NavBar />
            <ProductList />
            <ModalItem />
        </div>
    );
};

export default App;
