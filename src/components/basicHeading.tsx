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
        <div tw="pt-8 max-w-screen-sm mx-auto px-5">
            <h1 tw="text-4xl font-medium font-serif pb-6">{title}</h1>
            <p tw="sm:text-xl text-gray-600 italic pb-6">{subtitle}</p>
            {image && (
                <div
                    tw="aspect-w-16 aspect-h-9 mb-6"
                    style={{
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
