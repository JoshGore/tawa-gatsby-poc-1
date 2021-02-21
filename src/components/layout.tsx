/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import Header from './header';
import './layout.css';
import { Container, Typography, Link } from '@material-ui/core';

const Layout: React.FC = ({ children }) => {
    const data = useStaticQuery(graphql`
        query SiteTitleQuery {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `);

    return (
        <>
            <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
            <Container disableGutters={true}>
                <main>{children}</main>
            </Container>
            <div
                style={{
                    width: '100%',
                }}
            >
                <footer
                    style={{
                        marginTop: `2rem`,
                    }}
                >
                  <Typography variant="h2">More Info</Typography>
                  <Link href="#">About Us</Link><br />
                  <Link href="#">Presentations</Link><br />
                  <Link href="#">Articles</Link><br />
                    © {new Date().getFullYear()}, Tawa Christadelphian Ecclesia
                </footer>
            </div>
        </>
    );
};

export default Layout;
