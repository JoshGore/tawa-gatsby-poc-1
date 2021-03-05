import { ButtonBase, Grid, Typography } from '@material-ui/core';
import React from 'react';
import { Link, navigate } from 'gatsby';
import TouchRipple from '@material-ui/core/ButtonBase/TouchRipple';

interface IArticleListEntry {
    slug: string;
    title: string;
    summary: string;
}

const ArticleListEntry: React.FC<IArticleListEntry> = ({
    slug,
    title,
    summary,
}) => {
    // slug link
    return (
        <Grid container>
            <Grid item>
                <Typography variant="subtitle2">
                    Basics • The Kingdom
                </Typography>
                    <div
                        style={{ cursor: 'pointer' }}
                        onClick={() => navigate(slug)}
                    >
                        <Typography variant="h3">{title}</Typography>
                        <Typography variant="subtitle2">
                            5 Minute Read • 10/12/2021
                        </Typography>
                        <Typography variant="body2">{summary}</Typography>
                    </div>
            </Grid>
        </Grid>
    );
};

export default ArticleListEntry;
