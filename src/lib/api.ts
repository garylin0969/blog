import { Post } from '@/interfaces/post';
import fs from 'fs';
import matter from 'gray-matter';
import path, { join } from 'path';

const postsDirectory = join(process.cwd(), '_posts');

function getAllFiles(dirPath: string, arrayOfFiles: string[] = []): string[] {
    const files = fs.readdirSync(dirPath);

    files.forEach((file) => {
        const fullPath = path.join(dirPath, file);
        if (fs.statSync(fullPath).isDirectory()) {
            arrayOfFiles = getAllFiles(fullPath, arrayOfFiles);
        } else if (fullPath.endsWith('.md')) {
            arrayOfFiles.push(fullPath);
        }
    });

    return arrayOfFiles;
}

export function getPostSlugs() {
    const files = getAllFiles(postsDirectory);
    return files.map((file) => path.relative(postsDirectory, file));
}

export function getPostBySlug(slug: string) {
    const realSlug = slug.replace(/\.md$/, '');
    const fullPath = join(postsDirectory, `${realSlug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return { ...data, slug: realSlug, content } as Post;
}

export function getAllPosts(): Post[] {
    const slugs = getPostSlugs();
    const posts = slugs
        .map((slug) => getPostBySlug(slug))
        // sort posts by date in descending order
        .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
    return posts;
}
