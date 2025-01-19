import { loadPoem } from '$lib/sanityCalls';

export const load = async ({ params }) => {
    const poem = await loadPoem(params.poem);
    return {
        poem
    };
};