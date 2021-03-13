import React from 'react';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';

import 'twin.macro';
import tw, { css } from 'twin.macro';
import { string } from 'prop-types';

interface IIframeHeading {
    title: string;
    subtitle: string;
    url: string;
}

const IframeHeading: React.FC<IIframeHeading> = ({
    title,
    subtitle,
    url,
}) => {
    const processUrl = (url: string) => {
        var urlEl = new URL(url);
        if (!urlEl.searchParams.get('rel')) {
            urlEl.searchParams.append('rel', '0');
        }
        return urlEl.toString();
    };
    return (
        <>
            <div
                style={{
                    position: 'relative',
                    width: `100%`,
                    marginLeft: 0,
                    marginRight: 0,
                    height: '60vh',
                    overflow: 'hidden',
                }}
            >
                <iframe
                    height="100%"
                    width="100%"
                    src={processUrl(url)}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
            <div tw="mx-auto max-w-screen-sm p-5">
                <h1 tw="text-5xl sm:text-7xl font-bold font-serif">{title}</h1>
                <p tw="sm:text-2xl">{subtitle}</p>
            </div>
        </>
    );
};

export default IframeHeading;
