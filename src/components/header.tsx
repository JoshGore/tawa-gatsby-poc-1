import { Link } from 'gatsby';
import React from 'react';
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const Header = ({ siteTitle }: { siteTitle: string }) => (
    <AppBar position="static">
        <Toolbar>
            logo
            <Typography variant="h6">{siteTitle}</Typography>
            <IconButton edge="end">
                <MenuIcon></MenuIcon>
            </IconButton>
        </Toolbar>
    </AppBar>
);

Header.defaultProps = {
    siteTitle: ``,
};

export default Header;
