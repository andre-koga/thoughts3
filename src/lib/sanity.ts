import { createClient } from '@sanity/client';
import { SANITY_PROJECT_ID, SANITY_DATASET } from '$env/static/private';

const client = createClient({
    projectId: SANITY_PROJECT_ID,
    dataset: SANITY_DATASET,
    apiVersion: '2025-01-19', // use a UTC date string
    useCdn: true, // `false` if you want to ensure fresh data
});

export default client;