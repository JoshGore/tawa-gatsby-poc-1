import React from 'react';
import { graphql, Link, PageProps } from 'gatsby';
import 'twin.macro';
import tw from 'twin.macro';
import Layout from '../components/layout';
import SEO from '../components/seo';
import ArticleListEntry from '../components/articleListEntry';
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
    // dropshadow and gradeint
    return (
        <Layout>
            <SEO title="Articles" />
            <div tw="bg-gradient-to-t from-gray-200 p-2">
                <Heading
                    title="All Articles"
                    subtitle="subtitle"
                    type="simple"
                />
                <div tw="rounded-lg bg-white shadow-sm pt-5 overflow-hidden max-w-screen-sm mx-auto">
                    {data.allContentfulPost.nodes.map((post, i) => (
                        <ArticleListEntry
                            title={post.title}
                            summary={post.summary.summary}
                            slug={post.slug}
                            isLast={
                                data.allContentfulPost.nodes.length == i + 1
                            }
                        />
                    ))}
                    <div tw="px-4 py-2 border-gray-300">
                        <button tw="bg-gray-100 hover:bg-gray-200 focus:bg-gray-100 text-gray-900 hover:shadow focus:shadow px-4 py-2 uppercase text-sm block rounded transition-all">
                            More
                        </button>
                    </div>
                </div>
            </div>
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
