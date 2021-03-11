import { Link, navigate } from 'gatsby';
import React, { useState } from 'react';
import 'twin.macro';
import tw, { css } from 'twin.macro';
import LogoBible from '../images/bible.svg';
const Header = ({ siteTitle }: { siteTitle: string }) => {
    const [open, setOpen] = useState(false);
    return (
        <header tw="sm:flex sm:justify-between sm:px-4 sm:py-3 sm:items-center shadow">
            <div tw="flex items-center justify-between px-4 py-2 sm:p-0">
                <div tw="flex items-center">
                    <img src={LogoBible} tw="h-12 m-0 p-0 px-2" />
                    <Link
                        to="/"
                        tw="hover:bg-gray-100 focus:bg-gray-100 hover:text-gray-900 focus:text-gray-900 px-4 py-2 block text-gray-900 rounded-sm text-2xl font-semibold"
                    >
                        <h1>{siteTitle}</h1>
                    </Link>
                </div>
                <div tw="sm:hidden">
                    <button
                        type="button"
                        tw="block text-gray-400 hover:text-gray-900 focus:text-gray-900"
                        onClick={() => setOpen(!open)}
                    >
                        <svg tw="h-6 w-6 fill-current" viewBox="0 0 24 24">
                            {open && (
                                <path
                                    fill-rule="evenodd"
                                    d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                                />
                            )}
                            {!open && (
                                <path
                                    fill-rule="evenodd"
                                    d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                                />
                            )}
                        </svg>
                    </button>
                </div>
            </div>
            <div
                tw="px-4 pt-2 pb-4 sm:flex sm:p-0"
                css={[open ? tw`block` : tw`hidden`]}
            >
                <Link
                    to="/articles"
                    tw="hover:bg-gray-100 focus:bg-gray-100 hover:text-gray-900 focus:text-gray-900 hover:shadow focus:shadow px-4 py-2 uppercase text-sm block text-gray-400 rounded-sm"
                >
                    Articles
                </Link>
                <Link
                    to="/articles/who-are-we"
                    tw="hover:bg-gray-100 focus:bg-gray-100 hover:text-gray-900 focus:text-gray-900 hover:shadow focus:shadow px-4 py-2 uppercase text-sm block text-gray-400 rounded-sm"
                >
                    About
                </Link>
            </div>
        </header>
    );
};
export default Header;
