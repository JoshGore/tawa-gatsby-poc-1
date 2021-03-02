import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import {
    GatsbyImage,
    getImage,
    GatsbyImageProps,
    IGatsbyImageData,
} from 'gatsby-plugin-image';

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.com/docs/use-static-query/
 */
interface IImage {
    style?: React.CSSProperties;
    imgStyle?: React.CSSProperties;
}

const Image: React.FC<IImage> = ({ style, imgStyle }) => {
    const data = useStaticQuery(graphql`
        query {
            placeholderImage: file(
                relativePath: { eq: "bible_open_table.jpg" }
            ) {
                childImageSharp {
                    gatsbyImageData(
                        layout: FULL_WIDTH
                        quality: 100
                        width: 1080
                    )
                }
            }
        }
    `);
    console.log(data);

    if (!data?.placeholderImage?.childImageSharp?.gatsbyImageData) {
        return <div>Picture not found</div>;
    }

    return (
        <GatsbyImage
            style={style}
            imgStyle={imgStyle}
            image={data.placeholderImage.childImageSharp.gatsbyImageData}
            alt="default image"
        />
    );
};

export default Image;
