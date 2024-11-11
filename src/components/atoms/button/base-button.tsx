import cn from '@/utils/cn';
import { ButtonPropsT } from '@/interfaces/html';

const BaseButton = ({ className, children, ...props }: ButtonPropsT) => {
    return (
        <button
            className={cn(
                'px-4 py-2',
                'rounded-md',
                'text-sm font-semibold text-white',
                'bg-sky-500',
                'hover:bg-sky-600 dark:hover:bg-sky-400',
                className,
            )}
            {...props}
        >
            {children}
        </button>
    );
};

export default BaseButton;
