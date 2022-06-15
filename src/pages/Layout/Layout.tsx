import React from 'react';
import {Outlet, useLocation} from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const Layout = () => {

    const locations = useLocation()

    return (
        <>
            <Header />
            <main className={locations.pathname === "/" ? "catalog" : ""}>
                <Outlet />
            </main>
            <Footer />
        </>
    );
};

export default Layout;