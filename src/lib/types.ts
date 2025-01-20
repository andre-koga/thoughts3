import type { PortableTextBlock } from '@portabletext/types';

export interface Poem {
    _id: string;
    title: string;
    content?: PortableTextBlock[];
    slug?: { current: string };
    date?: Date;
}