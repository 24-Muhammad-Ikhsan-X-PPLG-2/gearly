const BrandPanelRegister = () => {
    return (
        <div className="relative hidden h-full rounded-4xl bg-linear-to-br from-blue-50 via-slate-50 to-white p-8 text-slate-900 md:flex md:flex-col md:justify-between md:p-10 lg:p-12">
            <div className="absolute inset-y-0 right-0 w-24 bg-blue-100 opacity-40 blur-2xl" />
            <div className="relative z-10 space-y-8">
                <div className="space-y-4">
                    <div className="inline-flex items-center gap-3 rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm ring-1 ring-slate-200">
                        <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 text-white">
                            G
                        </span>
                        Trusted Gaming Marketplace
                    </div>
                    <div className="space-y-3">
                        <p className="text-sm tracking-[0.24em] text-blue-700 uppercase">
                            Join Gearly
                        </p>
                        <h1 className="max-w-lg text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
                            Start Trading Digital Gaming Products Today
                        </h1>
                        <p className="max-w-xl text-base leading-7 text-slate-600">
                            Join thousands of gamers buying and selling game
                            currencies, top-ups, accounts, and digital items
                            securely.
                        </p>
                    </div>
                </div>

                <div className="grid gap-3 sm:grid-cols-3">
                    {[
                        { value: '100K+', label: 'Transactions' },
                        { value: '50K+', label: 'Users' },
                        { value: '99.9%', label: 'Success Rate' },
                    ].map((item) => (
                        <div
                            key={item.label}
                            className="rounded-3xl border border-slate-200 bg-white/90 px-4 py-5 shadow-sm"
                        >
                            <p className="text-2xl font-semibold text-slate-950">
                                {item.value}
                            </p>
                            <p className="mt-1 text-sm text-slate-500">
                                {item.label}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="rounded-4xl border border-slate-200 bg-white p-5 shadow-sm">
                    <div className="flex items-center gap-3">
                        <div className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-emerald-600 text-white">
                            A
                        </div>
                        <div>
                            <p className="font-semibold text-slate-900">
                                Alex Chen
                            </p>
                            <p className="text-sm text-slate-500">New Trader</p>
                        </div>
                    </div>
                    <p className="mt-4 text-sm leading-6 text-slate-600">
                        "Creating an account was super easy. Started trading
                        game items within minutes!"
                    </p>
                </div>
            </div>
        </div>
    );
};

export default BrandPanelRegister;
