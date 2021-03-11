import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import tw, { GlobalStyles } from 'twin.macro';
import 'twin.macro';
import Header from './header';
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
        <GlobalStyles />
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
