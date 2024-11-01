import cn from '@/utils/cn';
import IconLink from '@/components/atoms/icon-link';
import { iconConfig } from '@/constants/header';

const IconLinks = () => {
    return (
        <div className={cn('px-2', 'flex gap-1', 'border-x-2 border-slate-200 dark:border-slate-800')}>
            {iconConfig?.map((data) => {
                return <IconLink key={data?.link} link={data?.link} icon={data?.icon} />;
            })}
        </div>
    );
};

export default IconLinks;
