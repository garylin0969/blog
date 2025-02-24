import { BasicInfoConfig } from '@/constants/personal';
import InfoItem from '@/components/atoms/info-item';
import cn from '@/utils/cn';

const BasicInfoList = () => {
    return (
        <div className={cn('flex justify-center')}>
            <div>
                {BasicInfoConfig?.map((data) => (
                    <InfoItem key={data?.text} icon={data?.icon} link={data?.link} text={data?.text} />
                ))}
            </div>
        </div>
    );
};

export default BasicInfoList;
