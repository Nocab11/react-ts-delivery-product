import React from 'react';
import {Link} from "react-router-dom";
import "./Header.css"
import {AppBar, Button, IconButton, Toolbar, Typography} from "@mui/material";

const Header = () => {
    return (
        <AppBar className="header" position="fixed">
            <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                >
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    <Link to="/">Главная</Link>
                </Typography>
                <Button color="inherit">Войти</Button>
            </Toolbar>
        </AppBar>
    );
};

export default Header;