import cn from '@/utils/cn';
import Container from '@/components/atoms/container';
import InfoCard from '@/components/organisms/info-card';
import AboutInfo from '@/components/organisms/about-info';
import DividerTitle from '@/components/molecules/divider-title';
import ExperienceItem from '@/components/molecules/experience-item';
import { experienceConfig } from '@/constants/personal';

const AboutPage = () => {
    return (
        <Container>
            <div className="my-8">
                <InfoCard />
            </div>
            <div className="mx-auto max-w-3xl">
                <AboutInfo />
            </div>
            <DividerTitle className="my-8" align="center" title="Experience" />
            <div className={cn('relative', 'flex-col items-center md:flex')}>
                <div className={cn('absolute left-1/2', 'h-full', 'border border-gray-400', 'hidden md:block')} />
                {experienceConfig?.map((data) => {
                    return (
                        <ExperienceItem
                            key={data?.companyName}
                            className="md:odd:translate-x-[-60%] md:even:translate-x-[60%]"
                            logoSrc={data?.logoSrc}
                            title={data?.title}
                            companyUrl={data?.companyUrl}
                            companyName={data?.companyName}
                            employmentStartDate={data?.employmentStartDate}
                            employmentEndDate={data?.employmentEndDate}
                        />
                    );
                })}
            </div>
        </Container>
    );
};

export default AboutPage;
