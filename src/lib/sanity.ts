import { createClient } from '@sanity/client';
import { PUBLIC_SANITY_PROJECT_ID, PUBLIC_SANITY_DATASET } from '$env/static/public';

const client = createClient({
    projectId: PUBLIC_SANITY_PROJECT_ID,
    dataset: PUBLIC_SANITY_DATASET,
    apiVersion: '2025-01-19', // use a UTC date string
    useCdn: true, // `false` if you want to ensure fresh data
});

export default client;