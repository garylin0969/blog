import { aboutSectionTitleConfig } from '@/configs/components/section-title.config';
import Container from '@/components/atoms/container';
import SectionTitle from '@/components/molecules/section-title';
import InfoCard from '@/components/organisms/info-card';
import AboutInfo from '@/components/organisms/about-info';
import Experience from '@/components/organisms/experience';
import Skills from '@/components/organisms/skills';
import Projects from '@/components/organisms/projects';

const { experience: experienceConfig, skills: skillsConfig, projects: projectsConfig } = aboutSectionTitleConfig;

const AboutPage = () => {
    return (
        <Container className="space-y-8">
            <InfoCard className="mt-6" />
            <AboutInfo className="mx-auto max-w-3xl" />
            <SectionTitle
                align={experienceConfig?.align}
                title={experienceConfig?.title}
                showDivider={experienceConfig?.showDivider}
            />
            <Experience />
            <SectionTitle
                align={skillsConfig?.align}
                title={skillsConfig?.title}
                showDivider={skillsConfig?.showDivider}
            />
            <Skills />
            <SectionTitle
                align={projectsConfig?.align}
                title={projectsConfig?.title}
                showDivider={projectsConfig?.showDivider}
            />
            <Projects className="pb-6" />
        </Container>
    );
};

export default AboutPage;
