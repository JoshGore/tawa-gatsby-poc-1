import React from 'react';
import { graphql, Link, PageProps } from 'gatsby';

import { Paper, Typography, Button, Grid, TextField } from '@material-ui/core';

import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';
import Event from '../components/event';

interface IndexPageProps extends PageProps {
    data: {
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
    };
}

const IndexPage: React.FC<IndexPageProps> = ({ data }) => {
    return (
        <Layout>
            <SEO title="Home" />
            <div
                style={{
                    width: `100%`,
                    marginLeft: 0,
                    marginRight: 0,
                    marginBottom: `1.45rem`,
                }}
            >
                <Image />
            </div>
            <Paper style={{ width: '100%' }}>
                <Typography variant="subtitle1">Who Are We?</Typography>
                <Typography variant="h2">The Tawa Christadelphians</Typography>
                <Typography variant="subtitle2">
                    <b>6 Minute Read</b> | Christadelphians • Doctrine •
                    Fundamentals
                </Typography>
                <Typography variant="body1">
                    ipsum dolor sit amet consectetur, adipisicing elit.
                    Accusantium nostrum eaque repellendus ad sint illum quo
                    officiis! Hic, iusto nulla sint dolorum voluptatum quod quos
                    dolores placeat veniam saepe obcaecati!
                </Typography>
                <Button variant="contained">Learn More</Button>
            </Paper>
            <Paper>
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
                <Typography variant="h2">Armageddon</Typography>
                <Typography variant="subtitle2">
                    <b>45 Minute Video</b> | Prophecy • Current Events
                </Typography>
                <Typography variant="body1">
                    ipsum dolor sit amet consectetur, adipisicing elit.
                    Accusantium nostrum eaque repellendus ad sint illum quo
                    officiis! Hic, iusto nulla sint dolorum voluptatum quod quos
                    dolores placeat veniam saepe obcaecati!
                </Typography>
                <Button variant="contained">View</Button>
                <Button variant="contained">More</Button>
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
        </Layout>
    );
};

export default IndexPage;

export const pageQuery = graphql`
    query HomeQuery {
        allContentfulEvent {
            nodes {
                presenter
                title
                date
                description {
                    description
                }
            }
        }
    }
`;
