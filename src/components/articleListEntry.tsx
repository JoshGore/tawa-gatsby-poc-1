import React from 'react';
import { Link, navigate } from 'gatsby';
import 'twin.macro';
import tw from 'twin.macro';

interface IArticleListEntry {
    slug: string;
    title: string;
    summary: string;
    isLast?: boolean;
}

const ArticleListEntry: React.FC<IArticleListEntry> = ({
    slug,
    title,
    summary,
    isLast = false
}) => {
    // slug link
    return (
        <div tw="px-4 py-2 border-gray-300" css={[!isLast && tw`border-b`]}>
            <p tw="text-gray-900 font-sans font-semibold text-xs">
                Basics • The Kingdom
            </p>
            <div style={{ cursor: 'pointer' }} onClick={() => navigate(slug)}>
                <h3 tw="text-gray-900 font-sans text-xl font-bold">{title}</h3>
                <p tw="text-gray-500 text-sm">5 Minute Read • 10/12/2021</p>
                <p tw="font-sans text-sm">{summary}</p>
            </div>
        </div>
    );
};

export default ArticleListEntry;
