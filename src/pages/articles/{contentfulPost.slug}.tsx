import React from 'react';
import { graphql, Link, PageProps } from 'gatsby';
import { BLOCKS } from '@contentful/rich-text-types';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import { Options } from '@contentful/rich-text-react-renderer';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
import 'twin.macro';
import tw from 'twin.macro';

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
    const options: Options = {
        renderNode: {
            [BLOCKS.EMBEDDED_ASSET]: node => (
                <GatsbyImage
                    image={node.data.target.gatsbyImageData}
                    alt={node.data.target.title}
                />
            ),
        },
    };
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
            <div tw="prose max-w-screen-sm mx-auto font-serif text-gray-900 px-5">
                {renderRichText(data.contentfulPost.body, options)}
            </div>
        </Layout>
    );
};

export default IndexPage;

// fix image query
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
                references {
                    ... on ContentfulAsset {
                        __typename
                        contentful_id
                        gatsbyImageData(
                            width: 1920
                            layout: FULL_WIDTH
                            quality: 100
                            resizingBehavior: FILL
                            placeholder: BLURRED
                        )
                        title
                    }
                }
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
