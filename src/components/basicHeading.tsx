import React from 'react';
import 'twin.macro';
import tw from 'twin.macro';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';

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
        <div tw="pt-8 pb-6">
            <h1 tw="text-7xl font-bold font-serif">{title}</h1>
            <p tw="text-2xl">{subtitle}</p>
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
        </div>
    );
};

export default FullBleedHeading;
