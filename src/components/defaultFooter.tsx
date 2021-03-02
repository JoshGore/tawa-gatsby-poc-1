import { Typography } from '@material-ui/core';
import { Link } from 'gatsby';
import React from 'react';

const DefaultFooter: React.FC = () => {
    return (
        <div style={{ marginTop: `2rem` }}>
            <Typography variant="h2">More Info</Typography>
            <Link to="/">Home</Link>
            <br />
            <Link to="#">About Us</Link>
            <br />
            <Link to="#">Presentations</Link>
            <br />
            <Link to="/articles/">Articles</Link>
            <br />© {new Date().getFullYear()}, Tawa Christadelphian Ecclesia
        </div>
    );
};

export default DefaultFooter;