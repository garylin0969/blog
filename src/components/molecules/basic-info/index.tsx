import { ReactNode } from 'react';
import cn from '@/utils/cn';
import { DivProps } from '@/interfaces/html';

interface BasicInfoProps extends DivProps {
    icon?: ReactNode;
    link?: string;
    text?: string;
}

const BasicInfo = ({ icon, link, text, className, ...props }: BasicInfoProps) => {
    return (
        <div className={cn('flex items-center', 'text-sm dark:text-slate-200', className)} {...props}>
            {icon && <div className="mr-2">{icon}</div>}
            <div>
                {link ? (
                    <a href={link} target="_blank" rel="noreferrer noopener">
                        {text}
                    </a>
                ) : (
                    <span>{text}</span>
                )}
            </div>
        </div>
    );
};

export default BasicInfo;
