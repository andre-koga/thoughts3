import { loadAllBooks } from '$lib/sanityCalls';

export const load = async () => {
    const books = await loadAllBooks();
    return {
        books
    };
};