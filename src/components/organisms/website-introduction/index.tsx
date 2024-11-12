import cn from '@/utils/cn';
import { DivPropsT } from '@/interfaces/html';
import DisplayElement from '@/components/molecules/display-element';

const WebsiteIntroduction = ({ className, ...props }: DivPropsT) => {
    return (
        <div className={cn('h-full w-full', 'flex items-center justify-center', 'text-2xl', className)} {...props}>
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
    );
};

export default WebsiteIntroduction;
