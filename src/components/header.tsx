import { Link, navigate } from 'gatsby';
import React from 'react';
import {
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Button,
    Hidden,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import LogoBible from '../images/bible.svg';
// color 61, 142, 255
const Header = ({ siteTitle }: { siteTitle: string }) => (
    <AppBar
        position="static"
        style={{
            background: 'white',
            paddingTop: 20,
            paddingBottom: 20,
            paddingLeft: 20,
            paddingRight: 20,
        }}
    >
        <Toolbar>
            <img
                src={LogoBible}
                style={{
                    marginRight: 40,
                    marginTop: 0,
                    marginBottom: 0,
                    cursor: 'pointer',
                }}
                onClick={() => navigate('/')}
            />
            <Hidden mdDown>
                <Typography
                    variant="h3"
                    style={{ color: '#404040', cursor: 'pointer' }}
                    onClick={() => navigate('/')}
                >
                    {siteTitle}
                </Typography>
            </Hidden>
            <Hidden smDown>
                <Button onClick={() => navigate('/articles')}>
                    <Typography variant="h6">Articles</Typography>
                </Button>
            </Hidden>
            <Hidden mdUp>
                <div style={{ marginLeft: 'auto', marginRight: 0 }}>
                    <IconButton edge="end">
                        <MenuIcon style={{ height: 50, width: 50 }} />
                    </IconButton>
                </div>
            </Hidden>
        </Toolbar>
    </AppBar>
);

Header.defaultProps = {
    siteTitle: ``,
};

export default Header;
