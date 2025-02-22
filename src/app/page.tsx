import Container from '@/components/atoms/container';
import WebsiteIntroduction from '@/components/organisms/website-introduction';
import LatestArticles from '@/components/organisms/latest-articles';

const HomePage = () => {
    return (
        <Container className="h-full p-6">
            <div className="flex h-full flex-col justify-evenly space-y-6">
                <WebsiteIntroduction />
                <LatestArticles />
            </div>
        </Container>
    );
};

export default HomePage;
