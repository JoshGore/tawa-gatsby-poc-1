import React from 'react';
import { graphql, Link, PageProps } from 'gatsby';

import {
    Paper,
    Typography,
    Button,
    Grid,
    TextField,
    Container,
} from '@material-ui/core';

import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';
import Event from '../components/event';
import ArticleListEntry from '../components/articleListEntry';
import FullBleedHeading from '../components/fullBleedHeading';
import { string } from 'prop-types';
import Heading from '../components/heading';

interface IndexPageProps extends PageProps {
    data: {
        allContentfulPost: {
            nodes: {
                slug: string;
                title: string;
                summary: {
                    summary: string;
                };
            }[];
        };
    };
}

const IndexPage: React.FC<IndexPageProps> = ({ data }) => {
    return (
        <Layout>
            <SEO title="Articles" />
            <Heading title="All Articles" subtitle="subtitle" type='simple' />
            <Container disableGutters={true}>
                <Paper>
                    {data.allContentfulPost.nodes.map(post => (
                        <ArticleListEntry
                            title={post.title}
                            summary={post.summary.summary}
                            slug={post.slug}
                        ></ArticleListEntry>
                    ))}
                </Paper>
            </Container>
        </Layout>
    );
};

export default IndexPage;

export const pageQuery = graphql`
    query ArticlesQuery {
        allContentfulPost {
            nodes {
                slug
                title
                summary {
                    summary
                }
            }
        }
    }
`;
