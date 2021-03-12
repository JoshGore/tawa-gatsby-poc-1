import React from 'react';
import {
    GatsbyImage,
    IGatsbyImageData,
} from 'gatsby-plugin-image';

import 'twin.macro';
import tw, { css } from 'twin.macro';

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
                // marginBottom: `1.45rem`,
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
            <h1 tw="text-5xl sm:text-7xl font-bold font-serif">{title}</h1>
            <p tw="sm:text-2xl">{subtitle}</p>
            </div>
        </div>
    );
};

export default FullBleedHeading;
