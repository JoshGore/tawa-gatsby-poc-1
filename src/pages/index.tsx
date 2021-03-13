import React from 'react';
import { graphql, Link, PageProps } from 'gatsby';
import 'twin.macro';
import tw from 'twin.macro';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Event from '../components/event';
import Heading from '../components/heading';
import { IGatsbyImageData } from 'gatsby-plugin-image';

interface IndexPageProps extends PageProps {
    data: {
        contentfulPage: {
            // optional?
            splashImage: { gatsbyImageData: IGatsbyImageData; title: string };
            title: string;
            subtitle: {
                subtitle: string;
            };
            stickyPostSubTitle: string;
            stickypost: {
                slug: string;
                title: string;
                summary: {
                    summary: string;
                };
            };
        };
        allContentfulEvent: {
            nodes: {
                presenter: string;
                title: string;
                date: string;
                description: {
                    description: string;
                };
            }[];
        };
        allContentfulPost: {
            nodes: {
                title: string;
                summary: {
                    summary: string;
                };
                slug: string;
            }[];
        };
    };
}

const Button: React.FC<{ to: string }> = ({ to, children }) => (
    <Link
        tw="bg-gray-200 hover:bg-gray-300 focus:bg-gray-300 rounded-sm shadow hover:shadow-md focus:shadow-md px-4 py-2 uppercase text-sm transition-all block text-center"
        to={to}
    >
        {children}
    </Link>
);

const Card: React.FC = ({ children }) => (
    <div tw="bg-white rounded-lg shadow-xl px-5 py-5 mb-5 sm:mb-10">
        {children}
    </div>
);

const IndexPage: React.FC<IndexPageProps> = ({ data }) => {
    return (
        <Layout>
            <SEO title="Home" />
            <Heading
                title={'Lorem ipsum dolor sit amet'}
                subtitle={
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Erat nam at lectus urna. Arcu dictum varius duis at consectetur lorem.'
                }
                type={'full bleed'}
                textColor="white"
                image={data.contentfulPage.splashImage?.gatsbyImageData}
            />
            <div tw="bg-gradient-to-t from-gray-200 to-gray-50 py-10 px-2">
                <div tw="max-w-screen-sm mx-auto">
                    <Card>
                        <p tw="text-gray-900 font-sans font-semibold">
                            {data.contentfulPage.stickyPostSubTitle}
                        </p>
                        <h2 tw="text-gray-900 text-4xl">
                            {data.contentfulPage.stickypost.title}
                        </h2>
                        <p>
                            <b>6 Minute Read</b> | Christadelphians • Doctrine •
                            Fundamentals
                        </p>
                        <p tw="py-5">
                            {data.contentfulPage.stickypost.summary.summary}
                        </p>
                        <div tw="grid">
                            <div tw="justify-self-end">
                                <Button
                                    to={`/articles/${data.contentfulPage.stickypost.slug}`}
                                >
                                    More About Us
                                </Button>
                            </div>
                        </div>
                    </Card>
                    <Card>
                        <div
                            style={{
                                marginTop: '10px',
                                borderBottom: '1px solid #f1f1f1',
                                padding: 10,
                            }}
                        >
                            <div>
                                <h2 tw="text-gray-900 text-4xl">
                                    What's coming up?
                                </h2>
                            </div>
                        </div>
                        {data.allContentfulEvent.nodes.map(event => (
                            <Event
                                title={event.title}
                                presenter={event.presenter}
                                description={event.description.description}
                                datetime={new Date(event.date)}
                            ></Event>
                        ))}
                    </Card>
                    <Card>
                        <p tw="text-gray-900 font-sans font-semibold">Latest</p>
                        <h2 tw="text-gray-900 text-4xl">
                            {data.allContentfulPost.nodes[0].title}
                        </h2>
                        <p>
                            <b>45 Minute Video</b> | Prophecy • Current Events
                        </p>
                        <p>{data.allContentfulPost.nodes[0].summary.summary}</p>
                        <div tw="flex justify-between pt-5">
                            <div tw="justify-self-start w-36">
                                <Button
                                    to={`/articles/${data.allContentfulPost.nodes[0].slug}`}
                                >
                                    View
                                </Button>
                            </div>
                            <div tw="justify-self-end w-36">
                                <Button to={`/articles/`}>More Articles</Button>
                            </div>
                        </div>
                    </Card>
                    <Card>
                        <h2 tw="text-gray-900 text-4xl">Stay in Touch</h2>
                        <form>
                            <input
                                tw="w-full p-2"
                                type="text"
                                placeholder="Your Name"
                                aria-label="Your Name"
                            ></input>
                            <input
                                tw="w-full p-2"
                                type="text"
                                placeholder="Your Email"
                                aria-label="Your Email"
                            ></input>
                            <button
                                tw="bg-gray-200 hover:bg-gray-300 focus:bg-gray-300 rounded-sm shadow hover:shadow-md focus:shadow-md px-4 py-2 uppercase text-sm transition-all"
                                disabled
                            >
                                Subscribe
                            </button>
                        </form>
                    </Card>
                </div>
            </div>
        </Layout>
    );
};

export default IndexPage;

export const pageQuery = graphql`
    query HomeQuery {
        allContentfulEvent(sort: { fields: date, order: ASC }) {
            nodes {
                presenter
                title
                date
                description {
                    description
                }
            }
        }
        allContentfulPost(sort: { order: DESC, fields: createdAt }) {
            nodes {
                title
                summary {
                    summary
                }
                slug
            }
        }
        contentfulPage(type: {}, slug: { eq: "/" }) {
            title
            subtitle {
                subtitle
            }
            stickyPostSubTitle
            stickypost {
                slug
                title
                summary {
                    summary
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
        }
    }
`;
