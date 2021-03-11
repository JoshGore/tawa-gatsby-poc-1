import React from 'react';
import 'twin.macro';
import tw from 'twin.macro';

interface IEvent {
    title: string;
    presenter: string;
    datetime: Date;
    description: string;
}

const Event: React.FC<IEvent> = ({
    title,
    presenter,
    datetime,
    description,
}) => {
    return (
        <div tw="flex py-2 border-b">
            <div tw="text-center px-4 font-medium tracking-wider">
                <p tw="text-3xl leading-none">
                    {datetime.getDate().toString().padStart(2, '0')}
                </p>
                <p tw="text-xl leading-none">
                    {datetime.toLocaleString('default', {
                        month: 'short',
                    })}
                </p>
            </div>
            <div>
                <h3 tw="text-gray-900 font-sans text-xl font-bold">{title}</h3>
                <p tw="text-gray-600 font-sans text-sm">
                    <b>
                        {datetime.toLocaleString('en-US', {
                            hour: 'numeric',
                            minute: 'numeric',
                            hour12: true,
                        })}
                    </b>{' '}
                    | Tawa Christadelphian Ecclesia • {presenter}
                </p>
                <p tw="text-gray-900 font-sans text-sm">{description}</p>
            </div>
        </div>
    );
};

export default Event;
