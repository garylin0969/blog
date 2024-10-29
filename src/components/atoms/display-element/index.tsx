import cn from '@/utils/cn';
import { DivProps } from '@/interfaces/html';

interface DisplayElementProps extends DivProps {
    tag?: keyof JSX.IntrinsicElements | ''; // 限制 tag 屬性為合法的 HTML 標籤
    tagClassName?: string;
    wrap?: boolean; // 控制是否換行
}

const DisplayElement = ({
    tag = '',
    tagClassName,
    wrap = true,
    className,
    children,
    ...props
}: DisplayElementProps) => {
    return (
        <div className={cn('whitespace-pre', className)} {...props}>
            {wrap && (
                <>
                    <p className={tagClassName}>{`<${tag}>`}</p>
                    <div className="pl-[2em]">{children}</div>
                    <p className={tagClassName}>{`</${tag}>`}</p>
                </>
            )}
            {!wrap && (
                <>
                    <span className={cn('pl-[2em] pr-2', tagClassName)}>{`<${tag}>`}</span>
                    {children}
                    <span className={cn('pl-2', tagClassName)}>{`</${tag}>`}</span>
                </>
            )}
        </div>
    );
};

export default DisplayElement;
