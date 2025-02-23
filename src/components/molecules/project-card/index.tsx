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
        <BaseLink href={projectUrl} className="group hover:text-inherit">
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
                <div className="overflow-hidden">
                    <Image
                        src={imageUrl}
                        className={cn(
                            'aspect-[3/2] object-cover',
                            'transition duration-300 group-hover:scale-110',
                            'group-hover:brightness-110',
                        )}
                        width={3000}
                        height={2000}
                        alt={projectName}
                    />
                </div>
                <div className={cn('flex-grow space-y-6', 'p-6')}>
                    <div>
                        <h3
                            className={cn(
                                'text-2xl font-bold tracking-tighter',
                                'group-hover:text-sky-500 dark:group-hover:text-sky-400',
                            )}
                        >
                            {projectName}
                        </h3>
                    </div>
                    <div className={cn('flex flex-wrap gap-2')}>
                        {projectTags?.map((tag) => (
                            <span
                                key={tag}
                                className={cn(
                                    'px-2 py-1',
                                    'text-sm',
                                    'rounded-md',
                                    'bg-slate-100 dark:bg-slate-800',
                                    'text-slate-600 dark:text-slate-300',
                                    'border border-slate-200 dark:border-slate-700',
                                    'transition-colors',
                                    'hover:bg-slate-200 dark:hover:bg-slate-700',
                                )}
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </BaseLink>
    );
};

export default ProjectCard;
