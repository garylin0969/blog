import { Metadata } from 'next';
import Container from '@/components/atoms/container';
import InfoCard from '@/components/molecules/info-card';
import AboutInfo from '@/components/organisms/about-info';
import DividerTitle from '@/components/molecules/divider-title';
import Experience from '@/components/organisms/experience';
import Projects from '@/components/organisms/projects';

export const metadata: Metadata = {
    title: 'GaryLin | About',
    openGraph: {
        title: 'GaryLin | About',
        description: 'Hi, , my name is Gary Lin, a Frontend Developer.',
        url: 'https://www.garylin.dev/about',
        images: [
            {
                url: '/assets/default-open-graph.jpg',
                width: 1200,
                height: 630,
            },
        ],
        locale: 'zh_TW',
        type: 'website',
    },
};

const AboutPage = () => {
    return (
        <Container className="space-y-8">
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
