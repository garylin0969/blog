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
                            <DisplayElement tag="h1" wrap={false}>
                                <p className="inline-block">Hi, my name is Emily.</p>
                            </DisplayElement>
                            <DisplayElement tag="p" wrap={false}>
                                <p className="inline-block">I am a frontend developer.</p>
                            </DisplayElement>
                        </DisplayElement>
                    </DisplayElement>
                </div>
            </Container>
        </main>
    );
};

export default HomePage;
