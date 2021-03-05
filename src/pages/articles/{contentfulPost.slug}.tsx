import React from 'react';
import { graphql, Link, PageProps } from 'gatsby';
import {
    ContentfulRichTextGatsbyReference,
    renderRichText,
    RenderRichTextData,
} from 'gatsby-source-contentful/rich-text';

import {
    Paper,
    Typography,
    Button,
    Grid,
    TextField,
    Container,
} from '@material-ui/core';

import {
    GatsbyImage,
    getImage,
    GatsbyImageProps,
    IGatsbyImageData,
} from 'gatsby-plugin-image';

import Layout from '../../components/layout';
import SEO from '../../components/seo';
// import FullBleedHeading from '../../components/fullBleedHeading';
import Heading from '../../components/heading';

interface ArticlePageProps extends PageProps {
    data: {
        contentfulPost: {
            slug: string;
            title: string;
            summary: {
                summary: string;
            };
            body: {
                raw: string;
                references: [];
            };
            splashImage: { gatsbyImageData: IGatsbyImageData; title: string };
            headerType: 'simple' | 'full bleed';
            headerTextColor: string;
        };
    };
}

const IndexPage: React.FC<ArticlePageProps> = ({ data }) => {
    return (
        <Layout>
            <SEO title={data.contentfulPost.title} />
            
            <Heading
                title={data.contentfulPost.title}
                subtitle={data.contentfulPost.summary.summary}
                image={data.contentfulPost.splashImage.gatsbyImageData}
                alt={data.contentfulPost.splashImage.title}
                type={data.contentfulPost.headerType}
                textColor={data.contentfulPost.headerTextColor || 'whitesmoke'}
            />
            <Container disableGutters={true}>
                <Paper>{renderRichText(data.contentfulPost.body)}</Paper>
            </Container>
        </Layout>
    );
};

export default IndexPage;

export const query = graphql`
    query($id: String) {
        contentfulPost(id: { eq: $id }) {
            slug
            title
            summary {
                summary
            }
            body {
                raw
            }
            splashImage {
                gatsbyImageData(width: 1920, layout: FULL_WIDTH, quality: 100, resizingBehavior: FILL)
                title
            }
            headerType
            headerTextColor
        }
    }
`;
