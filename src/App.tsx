import React from 'react';
import "./styles/reset.css";
import "./styles/main.css";
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
