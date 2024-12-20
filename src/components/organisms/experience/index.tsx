import cn from '@/utils/cn';
import { SectionPropsT } from '@/interfaces/html';
import ExperienceItem from '@/components/molecules/experience-item';
import { ExperienceConfig } from '@/constants/personal';

const Experience = ({ className, ...props }: SectionPropsT) => {
    return (
        <>
            <section className={cn('grid place-content-center', className)} {...props}>
                <ul className={cn('relative')}>
                    <div
                        className={cn(
                            'hidden md:block',
                            'absolute left-1/2 translate-x-[-50%]',
                            'h-full',
                            'border border-sky-500 dark:border-sky-400',
                        )}
                    />
                    <div className="space-y-4">
                        {ExperienceConfig?.map((data) => {
                            return (
                                <li
                                    key={data?.companyName}
                                    className={cn('relative', 'md:grid md:grid-cols-2', 'group')}
                                >
                                    <div
                                        className={cn(
                                            'hidden md:block',
                                            'rounded-full',
                                            'bg-sky-500 dark:bg-sky-400',
                                            'absolute left-1/2 top-1/2 h-4 w-4 translate-x-[-50%] translate-y-[-50%]',
                                        )}
                                    />
                                    <ExperienceItem
                                        className={cn(
                                            'm-1 p-2 md:m-3',
                                            'md:group-even:col-end-3',
                                            // 'md:group-odd:justify-end',
                                        )}
                                        logoSrc={data?.logoSrc}
                                        title={data?.title}
                                        companyUrl={data?.companyUrl}
                                        companyName={data?.companyName}
                                        employmentStartDate={data?.employmentStartDate}
                                        employmentEndDate={data?.employmentEndDate}
                                    />
                                </li>
                            );
                        })}
                    </div>
                </ul>
            </section>
        </>
    );
};

export default Experience;
