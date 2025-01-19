import { createClient } from '@sanity/client';

const client = createClient({
    projectId: 'kcartf0h', // replace with your project ID
    dataset: 'production', // replace with your dataset name
    apiVersion: '2025-01-19', // use a UTC date string
    useCdn: true, // `false` if you want to ensure fresh data
});

export default client;