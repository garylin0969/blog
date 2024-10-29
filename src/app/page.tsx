import cn from '@/utils/cn';
import Container from '@/components/atoms/container';
import DisplayElement from '@/components/atoms/display-element';

const HomePage = () => {
    return (
        <main className="flex-grow">
            <Container className="h-full">
                <div className={cn('h-full w-full', 'flex items-center justify-center', 'text-2xl')}>
                    <DisplayElement tag="main">
                        <DisplayElement tag="span">
                            <p>Frontend</p>
                            <p>Developer</p>
                        </DisplayElement>
                    </DisplayElement>
                </div>
            </Container>
        </main>
    );
};

export default HomePage;
