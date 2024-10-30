import cn from '@/utils/cn';
import Container from '@/components/atoms/container';
import DisplayElement from '@/components/atoms/display-element';

const HomePage = () => {
    return (
        <main className="flex-grow">
            <Container className="h-full">
                <div className={cn('h-full w-full', 'flex items-center justify-center', 'text-2xl')}>
                    <DisplayElement tag="body">
                        <DisplayElement tag="main">
                            <DisplayElement tag="h1" wrap={false} className="mb-8">
                                <strong className="dark:text-white md:text-5xl">Hi, my name is Gary Lin</strong>
                            </DisplayElement>
                            <DisplayElement tag="p" wrap={false}>
                                <strong className="dark:text-white md:text-5xl">I am a Frontend Developer</strong>
                            </DisplayElement>
                        </DisplayElement>
                    </DisplayElement>
                </div>
            </Container>
        </main>
    );
};

export default HomePage;
