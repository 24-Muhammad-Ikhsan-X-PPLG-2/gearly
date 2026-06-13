export async function fetchApi({
    data = {},
    method = 'GET',
    url,
}: {
    url: string;
    method?: string;
    data?: object;
}) {
    const csrf = document
        .querySelector('meta[name="csrf-token"]')
        ?.getAttribute('content');
    const res = await fetch(url, {
        method,
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
            'X-CSRF-TOKEN': csrf ?? '',
            Accept: 'application/json',
        },
        credentials: 'same-origin',
    });
    return await res.json();
}
