import cn from '@/utils/cn';
import Container from '@/components/atoms/container';
import InfoCard from '@/components/molecules/info-card';
import DividerTitle from '@/components/molecules/divider-title';
import { BaseLink } from '@/components/atoms/link';

const Blog = () => {
    return (
        <Container className="flex h-full">
            <div className="h-full flex-grow">
                <ul className="my-2 flex flex-wrap gap-4 overflow-x-scroll border-y p-[10px]">
                    <li>
                        <BaseLink>All</BaseLink>
                    </li>
                    <li>
                        <BaseLink>Frontend</BaseLink>
                    </li>
                    <li>
                        <BaseLink>Life</BaseLink>
                    </li>
                </ul>
            </div>
            <aside className="hidden max-h-[calc(100svh-132px)] w-[368px] flex-col px-6 md:flex">
                <InfoCard className="mt-8" />
                <DividerTitle align="center" title="文章分類" className="my-5 md:text-xl" />
                <div className="flex-grow overflow-y-scroll">
                    <ul className="space-y-3 text-center">
                        <li>
                            <BaseLink>All</BaseLink>
                        </li>
                        <li>
                            <BaseLink>Frontend</BaseLink>
                        </li>
                        <li>
                            <BaseLink>Life</BaseLink>
                        </li>
                    </ul>
                </div>
            </aside>
        </Container>
    );
};

export default Blog;
