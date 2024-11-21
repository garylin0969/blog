import { Metadata } from 'next';
import Container from '@/components/atoms/container';
import InfoCard from '@/components/molecules/info-card';
import AboutInfo from '@/components/organisms/about-info';
import DividerTitle from '@/components/molecules/divider-title';
import Experience from '@/components/organisms/experience';
import Projects from '@/components/organisms/projects';

export const metadata: Metadata = {
    title: 'GaryLin | About',
};

const AboutPage = () => {
    return (
        <Container className="space-y-6">
            <InfoCard className="mt-6" />
            <AboutInfo className="mx-auto max-w-3xl" />
            <DividerTitle align="center" title="Experience" />
            <Experience />
            <DividerTitle align="center" title="Projects" />
            <Projects className="pb-6" />
        </Container>
    );
};

export default AboutPage;
