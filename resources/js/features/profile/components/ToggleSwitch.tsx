import { FC } from 'react';

type ToggleSwitchProps = {
    checked: boolean;
    onChange: () => void;
};

const ToggleSwitch: FC<ToggleSwitchProps> = ({ checked, onChange }) => (
    <button
        type="button"
        onClick={onChange}
        className={`relative inline-flex h-9 w-16 shrink-0 items-center rounded-full transition-colors duration-200 ${
            checked ? 'bg-blue-600' : 'bg-slate-300'
        }`}
        aria-pressed={checked}
    >
        <span className="sr-only">Toggle setting</span>
        <span
            className={`inline-block h-7 w-7 translate-x-1 transform rounded-full bg-white shadow transition duration-200 ${
                checked ? 'translate-x-8' : 'translate-x-1'
            }`}
        />
    </button>
);

export default ToggleSwitch;
