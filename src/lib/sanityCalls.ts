import client from '$lib/sanity';
import type { Book, Poem } from '$lib/sanityTypes';

export async function loadAllBooks(): Promise<Book[]> {
    const query =
        '*[_type == "book"] | order(publishedAt desc)';
    const books = await client.fetch(query);
    return books;
}

export async function loadBook(slug: string): Promise<Book> {
    const query = `*[_type == "book" && slug.current == $slug][0] {..., "pages": pages[] -> {title, slug}}`;
    const book = await client.fetch(query, { slug });
    return book;
}

export async function loadAllPoems(): Promise<Poem[]> {
    const query =
        '*[_type == "page"] | order(publishedAt desc)';
    const pages = await client.fetch(query);
    return pages;
}

export async function loadPoem(slug: string): Promise<Poem> {
    const query = `*[_type == "page" && slug.current == $slug][0]`;
    const page = await client.fetch(query, { slug });
    return page;
}