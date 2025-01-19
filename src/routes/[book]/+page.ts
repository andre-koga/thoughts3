import { loadBook } from '$lib/sanityCalls';

export const load = async ({ params }) => {
    const book = await loadBook(params.book);
    return {
        book
    };
};