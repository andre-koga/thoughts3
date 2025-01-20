import type { PortableTextBlock } from '@portabletext/types';
import type { ImageAsset } from '@sanity/types';

export interface Poem {
    _id: string;
    title: string;
    content?: PortableTextBlock[];
    slug?: { current: string };
    date?: Date;
}

interface Block {
    children: { text: string }[];
}

export interface Book {
    title: string;
    slug: { current: string };
    image: ImageAsset;
    status?: string;
    preface?: Block[];
}