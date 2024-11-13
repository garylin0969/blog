import cn from '@/utils/cn';
import Avatar from '@/components/atoms/avatar';
import InfoItem from '@/components/molecules/info-item';
import SocialIconLinks from '@/components/molecules/social-icon-links';
import { author, basicInfoConfig } from '@/constants/personal';

interface InfoCardProps {
    className?: string;
}

const InfoCard = ({ className }: InfoCardProps) => {
    return (
        <div className={cn('space-y-6 p-3', 'dark:text-slate-200', className)}>
            <div className={cn('flex justify-center')}>
                <Avatar />
            </div>
            <div className={cn('text-center font-serif text-4xl font-bold tracking-wider')}>{author}</div>
            <div className={cn('flex justify-center')}>
                <div>
                    {basicInfoConfig?.map((data) => {
                        return <InfoItem key={data?.text} icon={data?.icon} link={data?.link} text={data?.text} />;
                    })}
                </div>
            </div>
            <div className={cn('flex justify-center')}>
                <SocialIconLinks className="text-2xl" />
            </div>
        </div>
    );
};

export default InfoCard;
