import type { Image, PortableTextBlock, Slug } from '@sanity/types';
import type { DatetimeDefinition } from '@sanity/types';

export type Poem = {
    title: string;
    slug: Slug;
    date: DatetimeDefinition;
    content: PortableTextBlock[];
};

export type Book = {
    title: string;
    slug: Slug;
    status: "finished" | "paused" | "ongoing";
    date: DatetimeDefinition;
    image: Image;
    preface: PortableTextBlock[];
    pages: { title: string; slug: Slug }[];
}