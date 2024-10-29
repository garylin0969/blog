import cn from '@/utils/cn';
import Container from '@/components/atoms/container';

const HomePage = () => {
    return (
        <main className="flex-grow">
            <Container className="h-full">
                <div className={cn('h-full w-full', 'text-center', 'flex flex-col justify-center', 'text-8xl')}>
                    <p>Frontend</p>
                    <p>Developer</p>
                </div>
            </Container>
        </main>
    );
};

export default HomePage;
