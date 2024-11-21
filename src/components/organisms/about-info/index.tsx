import cn from '@/utils/cn';
import { DivPropsT } from '@/interfaces/html';
import { AboutInfoConfig } from '@/constants/personal';

interface AboutInfoProps extends DivPropsT {
    info?: string[];
}

const AboutInfo = ({ info = AboutInfoConfig, className, ...props }: AboutInfoProps) => {
    return (
        <div className={cn('text-center text-base md:text-lg', className)} {...props}>
            {info?.map((data) => <p key={data}>{data}</p>)}
        </div>
    );
};

export default AboutInfo;
