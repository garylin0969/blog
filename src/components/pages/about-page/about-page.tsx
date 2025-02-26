import Container from '@/components/atoms/container';
import SectionTitle from '@/components/molecules/section-title';
import InfoCard from '@/components/organisms/info-card';
import AboutInfo from '@/components/organisms/about-info';
import Experience from '@/components/organisms/experience';
import Skills from '@/components/organisms/skills';
import Projects from '@/components/organisms/projects';

const AboutPage = () => {
    return (
        <Container className="space-y-8">
            <InfoCard className="mt-6" />
            <AboutInfo className="mx-auto max-w-3xl" />
            <SectionTitle align="center" title="Experience" />
            <Experience />
            <SectionTitle align="center" title="Skills" />
            <Skills />
            <SectionTitle align="center" title="Projects" />
            <Projects className="pb-6" />
        </Container>
    );
};

export default AboutPage;
