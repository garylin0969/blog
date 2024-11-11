import { LinkPropsT } from '@/interfaces/html';
import cn from '@/utils/cn';

const BaseLink = ({ href, className, children, ...props }: LinkPropsT) => {
    return (
        <a
            href={href}
            className={cn('cursor-pointer hover:text-sky-500 dark:hover:text-sky-400', className)}
            target="_blank"
            rel="noreferrer noopener"
            {...props}
        >
            {children}
        </a>
    );
};

export default BaseLink;
