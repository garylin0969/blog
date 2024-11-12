import cn from '@/utils/cn';
import { DivPropsT } from '@/interfaces/html';
import DisplayElement from '@/components/molecules/display-element';
import GSAPTyping from './gsap-typing';

const WebsiteIntroduction = ({ className, ...props }: DivPropsT) => {
    return (
        <div className={cn('h-full w-full', 'flex items-center justify-center', 'text-2xl', className)} {...props}>
            <DisplayElement tag="body">
                <DisplayElement tag="main">
                    <GSAPTyping />
                </DisplayElement>
            </DisplayElement>
        </div>
    );
};

export default WebsiteIntroduction;
