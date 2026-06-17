import { ComponentType, FC, ReactNode } from 'react';

type SettingRowProps = {
    icon: ComponentType<{ size?: number }>;
    title: string;
    description: string;
    action: ReactNode;
    status?: string;
};

const SettingRow: FC<SettingRowProps> = ({
    icon: Icon,
    title,
    description,
    action,
    status,
}) => (
    <div className="rounded-4xl border border-slate-200 bg-slate-50 p-5">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-4">
                <div className="mt-1 flex h-11 w-11 items-center justify-center rounded-3xl bg-white text-slate-700 shadow-sm shadow-slate-200/30">
                    <Icon size={18} />
                </div>
                <div>
                    <p className="text-base font-semibold text-slate-900">
                        {title}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                        {description}
                    </p>
                </div>
            </div>
            <div className="flex items-center gap-4">
                {status ? (
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold tracking-[0.24em] text-slate-600 uppercase">
                        {status}
                    </span>
                ) : null}
                {action}
            </div>
        </div>
    </div>
);
export default SettingRow;
