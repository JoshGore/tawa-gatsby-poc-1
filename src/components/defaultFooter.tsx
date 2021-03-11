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
                <div>
                    <div style={{ paddingTop: '10px', paddingBottom: '10px' }}>
                        <h2>More Info</h2>
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
                </div>
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
