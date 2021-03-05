import { Container, Typography } from '@material-ui/core';
import React from 'react';
import Image from './image';
import {
    GatsbyImage,
    getImage,
    GatsbyImageProps,
    IGatsbyImageData,
} from 'gatsby-plugin-image';

interface IBasicHeading {
    title: string;
    subtitle: string;
    image?: IGatsbyImageData;
    alt?: string;
}

const FullBleedHeading: React.FC<IBasicHeading> = ({
    title,
    subtitle,
    image,
    alt,
}) => {
    return (
        <Container disableGutters={true}>
            <Typography variant="h1">{title}</Typography>
            <Typography variant="subtitle1">{subtitle}</Typography>
            {image && (
                <div
                    style={{
                        width: '100%',
                        paddingTop: '56.25%',
                        position: 'relative',
                    }}
                >
                    <GatsbyImage
                        image={image}
                        alt={alt || ''}
                        style={{
                            position: 'absolute',
                            top: 0,
                            bottom: 0,
                            left: 0,
                            right: 0,
                        }}
                        imgStyle={{ objectFit: 'cover' }}
                    />
                </div>
            )}
        </Container>
    );
};

export default FullBleedHeading;
