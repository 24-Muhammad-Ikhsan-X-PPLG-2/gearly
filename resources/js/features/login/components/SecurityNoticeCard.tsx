import { ShieldCheck } from 'lucide-react';

const SecurityNoticeCard = () => {
    return (
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-4 shadow-sm">
            <div className="flex items-center gap-3">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                    <ShieldCheck size={24} />
                </div>
                <div>
                    <p className="text-sm font-semibold text-slate-900">
                        Enterprise-grade security
                    </p>
                    <p className="text-sm text-slate-600">
                        Your account is protected with encrypted authentication
                        and secure session controls.
                    </p>
                </div>
            </div>
        </div>
    );
};
export default SecurityNoticeCard;
