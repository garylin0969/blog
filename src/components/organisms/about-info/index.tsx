import cn from '@/utils/cn';
import { DivPropsT } from '@/interfaces/html';
import { aboutInfoConfig } from '@/constants/personal';

interface AboutInfoProps extends DivPropsT {
    info?: string[];
}

const AboutInfo = ({ info = aboutInfoConfig, className, ...props }: AboutInfoProps) => {
    return (
        <div className={cn('text-center text-lg', className)} {...props}>
            {info?.map((data) => <p key={data}>{data}</p>)}
        </div>
    );
};

export default AboutInfo;
