import cn from '@/utils/cn';
import Avatar from '@/components/atoms/avatar';
import BasicInfo from '@/components/molecules/basic-info';
import { author, basicInfoConfig } from '@/constants/personal';

const InfoCard = () => {
    return (
        <div className={cn('dark:text-slate-200')}>
            <div className={cn('mb-6', 'flex justify-center')}>
                <Avatar />
            </div>
            <div className={cn('mb-6', 'text-center text-4xl font-bold tracking-wider')}>{author}</div>
            <div className={cn('flex justify-center')}>
                <div>
                    {basicInfoConfig?.map((data) => {
                        return <BasicInfo key={data?.text} icon={data?.icon} link={data?.link} text={data?.text} />;
                    })}
                </div>
            </div>
        </div>
    );
};

export default InfoCard;
