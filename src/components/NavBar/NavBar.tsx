import React from 'react';
import "./NavBar.css"
import {AppBar, Box, Button, IconButton, Toolbar, Typography} from "@mui/material";

const NavBar = () => {
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
                    News
                </Typography>
                <Button color="inherit">Login</Button>
            </Toolbar>
        </AppBar>
    );
};

export default NavBar;