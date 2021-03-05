import { Container, Typography } from '@material-ui/core';
import { Link } from 'gatsby';
import React from 'react';

const DefaultFooter: React.FC = () => {
    return (
        <>
            <div
                style={{
                    width: '100%',
                    backgroundColor: '#2f2e2e',
                    color: '#a0a09f',
                }}
            >
                <Container disableGutters={true} style={{}}>
                    <div style={{ paddingTop: '10px', paddingBottom: '10px' }}>
                        <Typography variant="h2">More Info</Typography>
                        <Link to="/">Home</Link>
                        <br />
                        <Link to="#">About Us</Link>
                        <br />
                        <Link to="#">Presentations</Link>
                        <br />
                        <Link to="/articles/">Articles</Link>
                        <br />© {new Date().getFullYear()}, Tawa Christadelphian
                        Ecclesia
                    </div>
                </Container>
            </div>
            <div
                style={{
                    width: '100%',
                    backgroundColor: '#1b1a1a',
                    height: '50px',
                }}
            ></div>
        </>
    );
};

export default DefaultFooter;
