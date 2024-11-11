import Image from 'next/image';
import { DivPropsT } from '@/interfaces/html';
import cn from '@/utils/cn';
import { BaseLink } from '@/components/atoms/link';
import { BaseButton } from '@/components/atoms/button';

interface ProjectCardProps extends DivPropsT {
    imageUrl?: string;
    projectUrl?: string;
    projectName?: string;
    projectTags?: string[];
}

const ProjectCard = ({
    className,
    imageUrl = '',
    projectUrl = '',
    projectName = '',
    projectTags = [],
    ...props
}: ProjectCardProps) => {
    return (
        <div
            className={cn(
                'h-full w-full max-w-sm',
                'shadow',
                'rounded-xl border dark:border-white/30',
                'overflow-hidden',
                className,
            )}
            {...props}
        >
            <BaseLink href={projectUrl}>
                <Image
                    src={imageUrl}
                    className={cn('aspect-[3/2] object-cover', 'transition duration-300 hover:scale-105')}
                    width={3000}
                    height={2000}
                    alt={projectName}
                />
            </BaseLink>
            <div className={cn('p-6', 'border-t dark:border-white/30')}>
                <div className={cn('mb-2')}>
                    <BaseLink href={projectUrl}>
                        <span className={cn('text-2xl font-bold tracking-tighter')}>{projectName}</span>
                    </BaseLink>
                </div>
                <p className={cn('mb-6', 'flex flex-wrap gap-2')}>
                    {projectTags?.map((tag) => {
                        return <span key={tag}>#{tag}</span>;
                    })}
                </p>
                <div className={cn('flex justify-end')}>
                    <BaseLink href={projectUrl}>
                        <BaseButton>Read more</BaseButton>
                    </BaseLink>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
