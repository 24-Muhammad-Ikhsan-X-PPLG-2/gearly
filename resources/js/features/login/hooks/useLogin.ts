import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { LoginScheme, LoginSchemeType } from '../scheme';
import { zodResolver } from '@hookform/resolvers/zod';
import { fetchApi } from '@/lib/fetch';

const useLogin = () => {
    const [showPassword, setShowPassword] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        setError,
    } = useForm<LoginSchemeType>({
        resolver: zodResolver(LoginScheme),
        defaultValues: {
            email: '',
            password: '',
            remember: false,
        },
        mode: 'onChange',
    });
    const handleLogin: SubmitHandler<LoginSchemeType> = async (data) => {
        const response = await fetchApi({
            url: '/auth/signin',
            method: 'POST',
            data,
        });
        if (!response.success) {
            Object.entries(response.field).forEach(([field, messages]) => {
                setError(field as keyof LoginSchemeType, {
                    type: 'server',
                    message: (messages as string[])[0],
                });
            });
            return;
        }
    };
    return {
        register,
        isSubmitting,
        showPassword,
        setShowPassword,
        handleLogin,
        handleSubmit,
        errors,
    };
};

export default useLogin;
