import cn from '@/utils/cn';
import Container from '@/components/atoms/container';
import InfoCard from '@/components/organisms/info-card';
import AboutInfo from '@/components/organisms/about-info';

const AboutPage = () => {
    return (
        <Container>
            <div className="my-9">
                <InfoCard />
            </div>
            <AboutInfo />
        </Container>
    );
};

export default AboutPage;
