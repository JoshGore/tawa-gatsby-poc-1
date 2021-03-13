import React from 'react';
import { IGatsbyImageData } from 'gatsby-plugin-image';
import FullBleedHeading from './fullBleedHeading';
import BasicHeading from './basicHeading';
import IFrameHeading from './iFrameHeading';

export interface IHeading {
    title: string;
    subtitle: string;
    image?: IGatsbyImageData;
    alt?: string;
    type: 'full bleed' | 'simple' | 'YouTube';
    textColor?: string;
    url?: string;
}

const Heading: React.FC<IHeading> = ({
    title,
    subtitle,
    image,
    alt,
    type,
    textColor,
    url,
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
            {type != 'YouTube' && (!image || type == 'simple') && (
                <BasicHeading
                    title={title}
                    subtitle={subtitle}
                    image={image}
                    alt={alt}
                />
            )}
            {type == 'YouTube' && (
                <IFrameHeading title={title} subtitle={subtitle} url={url} />
            )}
        </>
    );
};

export default Heading;
