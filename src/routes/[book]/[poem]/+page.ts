import { error } from '@sveltejs/kit';
import client from '$lib/sanity';
import type { Poem } from '$lib/types';

export async function load({ params }) {
    try {
        // Get the current page/poem
        const poem = await client.fetch<Poem>(
            `*[_type == "page" && (_id == $poemId || slug.current == $poemId)][0]{
                _id,
                title,
                content,
                date,
                slug
            }`,
            { poemId: params.poem }
        );

        if (!poem) {
            throw error(404, 'Page not found');
        }

        // Get the book and its pages - using slug.current to match
        const bookWithPages = await client.fetch(
            `*[_type == "book" && slug.current == $bookId][0]{
                _id,
                title,
                "pages": pages[]-> {
                    title,
                    slug
                }
            }`,
            { bookId: params.book }
        );

        if (!bookWithPages) {
            throw error(404, 'Book not found');
        }

        return {
            poem,
            bookWithPages
        };
    } catch (err) {
        console.error('Detailed error:', err);
        throw error(500, String(err));
    }
} 