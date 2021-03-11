import React from 'react';
import { graphql, Link, PageProps, navigate } from 'gatsby';
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
            <div>
                <div style={{ width: '100%' }}>
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
                    <p>{data.contentfulPage.stickypost.summary.summary}</p>
                    <Link
                        tw="bg-gray-200 hover:bg-gray-300 focus:bg-gray-300 rounded-sm shadow hover:shadow-md focus:shadow-md px-4 py-2 uppercase text-sm"
                        to={`/articles/${data.contentfulPage.stickypost.slug}`}
                    >
                        Learn More
                    </Link>
                </div>
                <div>
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
                </div>
                <div style={{ width: '100%' }}>
                    <p tw="text-gray-900 font-sans font-semibold">Latest</p>
                    <h2 tw="text-gray-900 text-4xl">
                        {data.allContentfulPost.nodes[0].title}
                    </h2>
                    <p>
                        <b>45 Minute Video</b> | Prophecy • Current Events
                    </p>
                    <p>{data.allContentfulPost.nodes[0].summary.summary}</p>
                    <Link
                        tw="bg-gray-200 hover:bg-gray-300 focus:bg-gray-300 rounded-sm shadow hover:shadow-md focus:shadow-md px-4 py-2 uppercase text-sm"
                        to={`/articles/${data.allContentfulPost.nodes[0].slug}`}
                    >
                        View
                    </Link>
                    <Link
                        tw="bg-gray-200 hover:bg-gray-300 focus:bg-gray-300 rounded-sm shadow hover:shadow-md focus:shadow-md px-4 py-2 uppercase text-sm"
                        to={'/articles/'}
                    >
                        More
                    </Link>
                </div>
                <div>
                    <h2 tw="text-gray-900 text-4xl">Stay in Touch</h2>
                    <form>
                        <input
                            tw="w-full p-2"
                            type="text"
                            placeholder="Your Name"
                        ></input>
                        <input
                            tw="w-full p-2"
                            type="text"
                            placeholder="Your Email"
                        ></input>
                        <button
                            tw="bg-gray-200 hover:bg-gray-300 focus:bg-gray-300 rounded-sm shadow hover:shadow-md focus:shadow-md px-4 py-2 uppercase text-sm"
                            disabled
                        >
                            Subscribe
                        </button>
                    </form>
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
