import { Typography } from '@material-ui/core';
import React from 'react';
import Image from './image';
import {
    GatsbyImage,
    getImage,
    GatsbyImageProps,
    IGatsbyImageData,
} from 'gatsby-plugin-image';
import FullBleedHeading from './fullBleedHeading';
import BasicHeading from './basicHeading';

export interface IHeading {
    title: string;
    subtitle: string;
    image?: IGatsbyImageData;
    alt?: string;
    type: 'full bleed' | 'simple';
    textColor?: string;
}

const Heading: React.FC<IHeading> = ({
    title,
    subtitle,
    image,
    alt,
    type,
    textColor,
}) => {
    return (
        <>
            {image && type == 'full bleed' && (
                <FullBleedHeading
                    title={title}
                    subtitle={subtitle}
                    image={image}
                    alt={alt}
                    textColor={textColor}
                />
            )}
            {(!image || type == 'simple') && (
                <BasicHeading
                    title={title}
                    subtitle={subtitle}
                    image={image}
                    alt={alt}
                />
            )}
        </>
    );
};

export default Heading;
