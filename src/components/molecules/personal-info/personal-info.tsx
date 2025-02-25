import { author } from '@/constants/personal';
import Avatar from '@/components/atoms/avatar';
import cn from '@/utils/cn';

const PersonalInfo = () => {
    return (
        <>
            <div className={cn('flex justify-center')}>
                <Avatar />
            </div>
            <div className={cn('text-center text-4xl font-bold tracking-wider')}>{author}</div>
        </>
    );
};

export default PersonalInfo;
