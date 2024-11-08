import cn from '@/utils/cn';
import Container from '@/components/atoms/container';
import InfoCard from '@/components/organisms/info-card';
import AboutInfo from '@/components/organisms/about-info';
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
            <Experience />
        </Container>
    );
};

export default AboutPage;
