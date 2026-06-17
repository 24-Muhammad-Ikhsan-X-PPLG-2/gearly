import { ComponentType, FC, ReactNode } from 'react';

type SettingRowProps = {
    icon: ComponentType<{ size?: number }>;
    title: string;
    description: string;
    action: ReactNode;
};

const SettingRow: FC<SettingRowProps> = ({
    icon: Icon,
    title,
    description,
    action,
}) => (
    <div className="rounded-4xl border border-slate-200 bg-slate-50 p-5">
        <div className="flex items-start gap-4">
            <div className="flex h-11 w-11 items-center justify-center rounded-3xl bg-white text-slate-700 shadow-sm shadow-slate-200/30">
                <Icon size={18} />
            </div>
            <div className="min-w-0 flex-1">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        <p className="text-base font-semibold text-slate-900">
                            {title}
                        </p>
                        <p className="mt-2 text-sm leading-6 text-slate-500">
                            {description}
                        </p>
                    </div>
                </div>
            </div>
            <div>{action}</div>
        </div>
    </div>
);
export default SettingRow;
