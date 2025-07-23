import { FaInfoCircle } from 'react-icons/fa';
import { cn } from '@/utils/shadcn';

const LINK_PROPS = {
    target: '_blank',
    rel: 'noopener noreferrer',
} as const;

interface NoticeBarProps {
    className?: string;
    message?: string;
    link?: string;
}

// 公告
const NoticeBar = ({ className, message, link }: NoticeBarProps) => {
    if (!message) return null;

    const Component = link ? 'a' : 'span';

    return (
        <div className={cn('bg-primary/10 text-primary h-8 py-1', className)}>
            <div className="container mx-auto">
                <div className="flex items-center justify-center gap-x-2">
                    <FaInfoCircle />
                    <Component href={link} {...(link && LINK_PROPS)}>
                        {message}
                    </Component>
                </div>
            </div>
        </div>
    );
};

export default NoticeBar;
