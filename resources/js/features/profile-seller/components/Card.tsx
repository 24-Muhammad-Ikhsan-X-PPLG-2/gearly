import { FC, ReactNode } from 'react';

type CardProps = {
    title: string;
    description: string;
    children: ReactNode;
};

const Card: FC<CardProps> = ({ title, description, children }) => (
    <div className="rounded-4xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/40">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
                <h2 className="text-lg font-semibold text-slate-900">
                    {title}
                </h2>
                <p className="mt-2 text-sm leading-6 text-slate-500">
                    {description}
                </p>
            </div>
        </div>
        <div className="mt-6">{children}</div>
    </div>
);

export default Card;
