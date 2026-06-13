export const calculatePasswordStrength = (
    password: string,
): { strength: 'weak' | 'medium' | 'strong'; percentage: number } => {
    if (!password) return { strength: 'weak', percentage: 0 };

    let strength = 0;
    if (password.length >= 8) strength++;
    if (password.length >= 12) strength++;
    if (/[A-Z]/.test(password) && /[a-z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) strength++;

    if (strength <= 2) return { strength: 'weak', percentage: 33 };
    if (strength <= 3) return { strength: 'medium', percentage: 66 };
    return { strength: 'strong', percentage: 100 };
};
