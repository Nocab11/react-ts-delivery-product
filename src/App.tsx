import React from 'react';
import UserList from "./components/UserList";
import BurgersList from "./components/BurgersList";
import NavBar from "./components/NavBar";

const App = () => {
    return (
        <div>
            <NavBar />
            <UserList />
            <BurgersList />
        </div>
    );
};

export default App;
