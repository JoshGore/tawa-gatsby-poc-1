import { Typography } from '@material-ui/core';
import React from 'react';
import Image from './image';
import {
    GatsbyImage,
    getImage,
    GatsbyImageProps,
    IGatsbyImageData,
} from 'gatsby-plugin-image';

interface IFullBleedHeading {
    title: string;
    subtitle: string;
    image: IGatsbyImageData;
    alt?: string;
    textColor?: string;
}

const FullBleedHeading: React.FC<IFullBleedHeading> = ({
    title,
    subtitle,
    image,
    alt,
    textColor,
}) => {
    return (
        <div
            style={{
                position: 'relative',
                width: `100%`,
                marginLeft: 0,
                marginRight: 0,
                marginBottom: `1.45rem`,
                height: '60vh',
                overflow: 'hidden',
            }}
        >
            <GatsbyImage
                image={image}
                alt={alt || ''}
                style={{ width: '100%', height: '100%' }}
                imgStyle={{ objectFit: 'cover' }}
            />
            <div
                style={{
                    position: 'absolute',
                    bottom: 0,
                    margin: '20px',
                    color: textColor,
                }}
            >
                <Typography variant="h1">{title}</Typography>
                <Typography variant="subtitle1">{subtitle}</Typography>
            </div>
        </div>
    );
};

export default FullBleedHeading;
