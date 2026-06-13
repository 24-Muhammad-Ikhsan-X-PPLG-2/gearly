import { ComponentType } from 'react';

const SocialSignupButton = ({
    label,
    icon: Icon,
}: {
    label: string;
    icon: ComponentType<any>;
}) => {
    return (
        <button
            type="button"
            className="group inline-flex w-full cursor-pointer items-center justify-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 transition hover:border-blue-300 hover:bg-slate-50 focus:ring-2 focus:ring-blue-200 focus:outline-none"
        >
            <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-slate-100 text-slate-700 transition group-hover:bg-blue-50">
                <Icon size={16} />
            </span>
            <span>{label}</span>
        </button>
    );
};

export default SocialSignupButton;
