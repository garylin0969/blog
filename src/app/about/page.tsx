import cn from '@/utils/cn';
import Container from '@/components/atoms/container';
import InfoCard from '@/components/organisms/info-card';
import AboutInfo from '@/components/organisms/about-info';
import DividerTitle from '@/components/molecules/divider-title';
import Experience from '@/components/organisms/experience';

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
            <Experience />
        </Container>
    );
};

export default AboutPage;
