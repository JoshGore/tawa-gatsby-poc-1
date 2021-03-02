import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Header from './header';
import './layout.css';
import { Container, Typography, Link } from '@material-ui/core';
import FullBleedHeading from './fullBleedHeading';
import { GatsbyImageProps } from 'gatsby-image';
import DefaultFooter from '../components/defaultFooter';

interface ILayout {
    footer?: React.ReactNode;
}

const Layout: React.FC<ILayout> = ({ children, footer }) => {
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
            <main>{children}</main>
            <div
                style={{
                    width: '100%',
                }}
            >
                <footer>{footer || <DefaultFooter />}</footer>
            </div>
        </>
    );
};

export default Layout;
