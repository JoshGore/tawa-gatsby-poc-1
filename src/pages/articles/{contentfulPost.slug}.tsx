import React from 'react';
import { graphql, Link, PageProps } from 'gatsby';
import { renderRichText } from 'gatsby-source-contentful/rich-text';

import { IGatsbyImageData } from 'gatsby-plugin-image';

import Layout from '../../components/layout';
import SEO from '../../components/seo';
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
            <div>
                <div>{renderRichText(data.contentfulPost.body)}</div>
            </div>
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
                gatsbyImageData(
                    width: 1920
                    layout: FULL_WIDTH
                    quality: 100
                    resizingBehavior: FILL
                )
                title
            }
            headerType
            headerTextColor
        }
    }
`;
