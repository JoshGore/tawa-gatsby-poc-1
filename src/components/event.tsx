import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import styled from '@emotion/styled';
import TouchRipple from '@material-ui/core/ButtonBase/TouchRipple';

interface IEvent {
    title: string;
    presenter: string;
    datetime: Date;
    description: string;
}

const Event: React.FC<IEvent> = ({
    title,
    presenter,
    datetime,
    description,
}) => {
    return (
        <Grid container style={{ marginTop: '10px', borderBottom: "1px solid #f1f1f1", padding: 10 }}>
            <Grid item>
                <Grid
                    container
                    direction="column"
                    alignItems="center"
                    style={{
                        height: '100%',
                        width: '100px',
                        fontFamily:
                            '"Roboto", "Helvetica", "Arial", sans-serif',
                    }}
                >
                    <Grid item>
                        <span
                            style={{
                                fontSize: '40px',
                                lineHeight: 1,
                                textAlign: 'center',
                            }}
                        >
                            {datetime.getDate().toString().padStart(2, '0')}
                        </span>
                    </Grid>
                    <Grid item>
                        <span
                            style={{
                                fontSize: '25px',
                                lineHeight: 0.9,
                                textAlign: 'center',
                            }}
                        >
                            {datetime.toLocaleString('default', {
                                month: 'short',
                            })}
                        </span>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs>
                <h3
                    style={{
                        fontSize: '2rem',
                        fontFamily:
                            '"Roboto", "Helvetica", "Arial", sans-serif',
                        fontWeight: 400,
                        lineHeight: 1,
                        marginBottom: '0.5rem',
                    }}
                >
                    {title}
                </h3>
                <p style={{
                        fontSize: '1rem',
                        fontFamily:
                            '"Roboto", "Helvetica", "Arial", sans-serif',
                        fontWeight: 500,
                        lineHeight: 1,
                        marginBottom: '0.5rem',
                    }}>
                    <b>
                        {datetime.toLocaleString('en-US', {
                            hour: 'numeric',
                            minute: 'numeric',
                            hour12: true,
                        })}
                    </b>{' '}
                   | Tawa Christadelphian Ecclesia • {presenter}
                </p>
                <p style={{
                        fontSize: '1rem',
                        fontFamily:
                            '"Roboto", "Helvetica", "Arial", sans-serif',
                        fontWeight: 400,
                        lineHeight: 1,
                        marginBottom: '0.25rem',
                    }}>{description}</p>
            </Grid>
        </Grid>
    );
};

export default Event;
