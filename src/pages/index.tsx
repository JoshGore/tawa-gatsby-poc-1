import React from 'react';
import { graphql, Link, PageProps, navigate } from 'gatsby';

import {
    Paper,
    Typography,
    Button,
    Grid,
    TextField,
    Container,
} from '@material-ui/core';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Event from '../components/event';
import Heading from '../components/heading';
import { IGatsbyImageData } from 'gatsby-plugin-image';

interface IndexPageProps extends PageProps {
    data: {
        contentfulPage: {
            splashImage?: { gatsbyImageData: IGatsbyImageData; title: string };
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
            <Container disableGutters={true}>
                <Paper style={{ width: '100%' }}>
                    <Typography variant="subtitle1">
                        {data.contentfulPage.stickyPostSubTitle}
                    </Typography>
                    <Typography variant="h2">
                        {data.contentfulPage.stickypost.title}
                    </Typography>
                    <Typography variant="subtitle2">
                        <b>6 Minute Read</b> | Christadelphians • Doctrine •
                        Fundamentals
                    </Typography>
                    <Typography variant="body1">
                        {data.contentfulPage.stickypost.summary.summary}
                    </Typography>
                    <Button
                        variant="contained"
                        onClick={() =>
                            navigate(
                                `/articles/${data.contentfulPage.stickypost.slug}`
                            )
                        }
                    >
                        Learn More
                    </Button>
                </Paper>
                <Paper>
                    <Grid
                        container
                        style={{
                            marginTop: '10px',
                            borderBottom: '1px solid #f1f1f1',
                            padding: 10,
                        }}
                    >
                        <Grid item>
                            <Typography variant="h2">
                                What's coming up?
                            </Typography>
                        </Grid>
                    </Grid>
                    {data.allContentfulEvent.nodes.map(event => (
                        <Event
                            title={event.title}
                            presenter={event.presenter}
                            description={event.description.description}
                            datetime={new Date(event.date)}
                        ></Event>
                    ))}
                </Paper>
                <Paper style={{ width: '100%' }}>
                    <Typography variant="subtitle1">Latest</Typography>
                    <Typography variant="h2">
                        {data.allContentfulPost.nodes[0].title}
                    </Typography>
                    <Typography variant="subtitle2">
                        <b>45 Minute Video</b> | Prophecy • Current Events
                    </Typography>
                    <Typography variant="body1">
                        {data.allContentfulPost.nodes[0].summary.summary}
                    </Typography>
                    <Button
                        variant="contained"
                        onClick={() =>
                            navigate(
                                `/articles/${data.allContentfulPost.nodes[0].slug}`
                            )
                        }
                    >
                        View
                    </Button>
                    <Button
                        variant="contained"
                        onClick={() => navigate('/articles/')}
                    >
                        More
                    </Button>
                </Paper>
                <Paper>
                    <h2>Stay in Touch</h2>
                    <form>
                        <TextField
                            variant="outlined"
                            label="Your Name"
                            fullWidth
                        ></TextField>
                        <TextField
                            variant="outlined"
                            label="Your Email"
                            fullWidth
                        ></TextField>
                        <Button variant="contained">Subscribe</Button>
                    </form>
                </Paper>
            </Container>
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
                gatsbyImageData(width: 1920, layout: FULL_WIDTH, quality: 100, resizingBehavior: FILL)
                title
            }
        }
    }
`;
