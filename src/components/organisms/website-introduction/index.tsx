import cn from '@/utils/cn';
import { DivPropsT } from '@/interfaces/html';
import DisplayElement from '@/components/molecules/display-element';
// import GSAPTyping from './gsap-typing';

const WebsiteIntroduction = ({ className, ...props }: DivPropsT) => {
    return (
        <div className={cn('h-full w-full', 'flex items-center justify-center', 'md:text-2xl', className)} {...props}>
            <DisplayElement tag="body">
                <DisplayElement tag="main">
                    <DisplayElement tag="h1" wrap={false} className="mb-8">
                        <span className="font-bold dark:text-white md:text-5xl">Hi, my name is Gary Lin</span>
                    </DisplayElement>
                    <DisplayElement tag="p" wrap={false}>
                        <span className="font-bold dark:text-white md:text-5xl">A Frontend Developer</span>
                    </DisplayElement>
                </DisplayElement>
            </DisplayElement>
        </div>
    );
};

export default WebsiteIntroduction;
