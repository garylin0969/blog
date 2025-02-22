import cn from '@/utils/cn';
import { DivPropsT } from '@/interfaces/html';
import DisplayElement from '@/components/molecules/display-element';
// import GSAPTyping from './gsap-typing';

const WebsiteIntroduction = ({ className, ...props }: DivPropsT) => {
    return (
        <div className={cn('w-full', 'flex items-center justify-center', 'md:text-2xl', className)} {...props}>
            <div className="flex flex-col items-center justify-center space-y-2 md:hidden">
                <h1 className="text-2xl font-bold">Hi, my name is Gary Lin</h1>
                <p className="text-xl">A Frontend Developer</p>
            </div>
            <DisplayElement tag="body" className="hidden md:block">
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
