import { Grid, Typography } from '@material-ui/core';
import React from 'react';

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
        <Grid container>
            <Grid item>
                <div>
                    <span
                        style={{
                            fontSize: '60px',
                            textAlign: 'center',
                        }}
                    >
                        {datetime.getDate().toString().padStart(1, '0')}
                    </span>
                </div>
                <div>
                    <span
                        style={{
                            fontSize: '30px',
                            textAlign: 'center',
                        }}
                    >
                        {datetime.toLocaleString('default', { month: 'short' })}
                    </span>
                </div>
            </Grid>
            <Grid item xs>
                <Typography variant="h3">{title}</Typography>
                <Typography variant="subtitle2">
                    <b>{datetime.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })}</b> | Tawa Christadelphian Ecclesia • {presenter}
                </Typography>
                <Typography variant="body2">
                    {description}
                </Typography>
            </Grid>
        </Grid>
    );
};

export default Event;
