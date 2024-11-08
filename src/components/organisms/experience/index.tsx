import cn from '@/utils/cn';
import DividerTitle from '@/components/molecules/divider-title';
import ExperienceItem from '@/components/molecules/experience-item';
import { experienceConfig } from '@/constants/personal';

const Experience = () => {
    return (
        <>
            <DividerTitle className="my-8" align="center" title="Experience" />
            <section className="flex justify-center">
                <ul className={cn('relative')}>
                    <div
                        className={cn(
                            'hidden md:block',
                            'absolute left-1/2 translate-x-[-50%]',
                            'h-full',
                            'border border-gray-400',
                        )}
                    />
                    {experienceConfig?.map((data) => {
                        return (
                            <li key={data?.companyName} className={cn('relative', 'md:grid md:grid-cols-2', 'group')}>
                                <div
                                    className={cn(
                                        'hidden md:block',
                                        'rounded-full bg-white',
                                        'absolute left-1/2 top-1/2 h-4 w-4 translate-x-[-50%] translate-y-[-50%]',
                                    )}
                                />
                                <ExperienceItem
                                    className={cn('p-3 md:p-5', 'md:group-even:col-end-3', 'md:group-odd:justify-end')}
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
                </ul>
            </section>
        </>
    );
};

export default Experience;
