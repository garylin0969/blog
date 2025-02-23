import cn from '@/utils/cn';
import { SectionPropsT } from '@/interfaces/html';
import ExperienceItem from '@/components/molecules/experience-item';
import { ExperienceConfig } from '@/constants/personal';

const Experience = ({ className, ...props }: SectionPropsT) => {
    return (
        <section className={cn('grid place-content-center', className)} {...props}>
            <ul className={cn('relative')}>
                <div
                    className={cn(
                        'absolute left-1/2 hidden h-full translate-x-[-50%] border border-sky-500 dark:border-sky-400 md:block',
                    )}
                />
                <div className="space-y-4">
                    {ExperienceConfig?.map(
                        ({ companyName, logoSrc, title, companyUrl, employmentStartDate, employmentEndDate }) => (
                            <li key={companyName} className={cn('group relative md:grid md:grid-cols-2')}>
                                <div
                                    className={cn(
                                        'absolute left-1/2 top-1/2 hidden h-4 w-4 translate-x-[-50%] translate-y-[-50%] rounded-full bg-sky-500 dark:bg-sky-400 md:block',
                                    )}
                                />
                                <ExperienceItem
                                    className={cn('m-1 p-2 md:m-3 md:group-even:col-end-3')}
                                    logoSrc={logoSrc}
                                    title={title}
                                    companyUrl={companyUrl}
                                    companyName={companyName}
                                    employmentStartDate={employmentStartDate}
                                    employmentEndDate={employmentEndDate}
                                />
                            </li>
                        ),
                    )}
                </div>
            </ul>
        </section>
    );
};

export default Experience;
