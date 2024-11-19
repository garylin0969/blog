import { Post } from '@/interfaces/post';
import fs from 'fs';
import matter from 'gray-matter';
import path, { join } from 'path';

const baseDirectory = join(process.cwd(), '_posts');

function getFiles(dirPath: string, arrayOfFiles: string[] = []): string[] {
    if (!fs?.existsSync(dirPath)) {
        console.error(`Directory not found: ${dirPath}`);
        return arrayOfFiles;
    }

    const files = fs?.readdirSync(dirPath);

    files?.forEach((file) => {
        const fullPath = path?.join(dirPath, file);
        if (fs?.statSync(fullPath)?.isDirectory()) {
            arrayOfFiles = getFiles(fullPath, arrayOfFiles);
        } else if (fullPath?.endsWith('.md')) {
            arrayOfFiles?.push(fullPath);
        }
    });

    return arrayOfFiles;
}

export function getPostSlugs(postsDirectory: string) {
    const files = getFiles(postsDirectory);
    return files?.map((file) => path?.relative(postsDirectory, file));
}

export function getPostBySlug(slug: string, postsDirectory: string = baseDirectory) {
    const realSlug = slug?.replace(/\.md$/, '');
    const fullPath = join(postsDirectory, `${realSlug}.md`);
    const fileContents = fs?.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return { ...data, slug: realSlug, content } as Post;
}

export function getPosts(category: string = 'all'): Post[] {
    // const postsDirectory = category === 'all' ? baseDirectory : join(baseDirectory, category);

    const postsDirectory = baseDirectory;
    const slugs = getPostSlugs(postsDirectory);
    const posts = slugs
        ?.map((slug) => getPostBySlug(slug, postsDirectory))
        // sort posts by date in descending order
        // ?.sort((post1, post2) => (post1?.date > post2?.date ? -1 : 1))
        ?.filter((post) => {
            if (category !== 'all') {
                return post?.category?.toLocaleLowerCase() === category?.toLocaleLowerCase();
            } else {
                return true;
            }
        });
    return posts;
}
