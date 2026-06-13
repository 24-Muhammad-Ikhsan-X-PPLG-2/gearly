import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { RegisterFormData, registerSchema } from '../scheme';
import { zodResolver } from '@hookform/resolvers/zod';

const useRegister = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);

    const form = useForm<RegisterFormData>({
        resolver: zodResolver(registerSchema),
        defaultValues: {
            fullName: '',
            username: '',
            email: '',
            password: '',
            confirmPassword: '',
            acceptTerms: false,
        },
    });
    const {
        formState: { isSubmitting },
    } = form;

    const passwordValue = form.watch('password');

    const handleSubmit = async (data: RegisterFormData) => {
        await new Promise((resolve) => setTimeout(resolve, 900));
        form.reset();
    };
    return {
        showPassword,
        setShowPassword,
        showConfirm,
        setShowConfirm,

        isSubmitting,
        passwordValue,
        handleSubmit,
        form,
    };
};

export default useRegister;
