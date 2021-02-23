import React from 'react';
import { graphql, Link, PageProps } from 'gatsby';

import { Paper, Typography, Button, Grid, TextField } from '@material-ui/core';

import Layout from '../../components/layout';
import SEO from '../../components/seo';

interface ArticlePageProps extends PageProps {
    data: {
        contentfulPost: {
            slug: string;
            title: string;
            body: {
                raw: string;
            }
        }
    }
}

const IndexPage: React.FC<ArticlePageProps> = ({ data }) => {
    return (
        <Layout>
            <SEO title="Home" />
            {data.contentfulPost.body.raw}
        </Layout>
    );
};

export default IndexPage;

export const query = graphql`
    query($id: String) {
        contentfulPost(id: { eq: $id }) {
            slug
            title
            body {
                raw
            }
        }
    }
`;
