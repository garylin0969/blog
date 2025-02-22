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
                'shadow-lg transition-shadow duration-300 hover:shadow-xl',
                'rounded-xl border border-purple-100 dark:border-white/30',
                'overflow-hidden',
                'flex flex-col',
                'bg-gradient-to-br from-white to-purple-50/30 dark:from-slate-900 dark:to-slate-900',
                className,
            )}
            {...props}
        >
            <BaseLink href={projectUrl} className="overflow-hidden">
                <Image
                    src={imageUrl}
                    className={cn(
                        'aspect-[3/2] object-cover',
                        'transition duration-300 hover:scale-105',
                        'hover:brightness-110',
                    )}
                    width={3000}
                    height={2000}
                    alt={projectName}
                />
            </BaseLink>
            <div
                className={cn(
                    'flex-grow',
                    'p-6',
                    'border-t border-purple-100 dark:border-white/30',
                    'flex flex-col justify-between',
                )}
            >
                <div>
                    <div className={cn('mb-2')}>
                        <BaseLink href={projectUrl}>
                            <span className={cn('text-2xl font-bold tracking-tighter')}>{projectName}</span>
                        </BaseLink>
                    </div>
                    <p className={cn('mb-6', 'flex flex-wrap gap-2')}>
                        {projectTags?.map((tag) => (
                            <span key={tag} className="text-primary-light/80 dark:text-slate-400">
                                #{tag}
                            </span>
                        ))}
                    </p>
                </div>
                <div className={cn('mt-auto flex justify-end')}>
                    <BaseLink href={projectUrl}>
                        <span className="sr-only">Read more about ${projectName}</span>
                        <BaseButton>Read more</BaseButton>
                    </BaseLink>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
