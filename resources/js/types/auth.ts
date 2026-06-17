export type User = {
    id: number;
    name: string;
    email: string;
    provider: string;
    provider_id: string;
    avatar?: string;
    email_verified_at: string | null;
    created_at: string;
    updated_at: string;
    [key: string]: any; // This allows for additional properties...
};

export type Auth = {
    user: User;
};
