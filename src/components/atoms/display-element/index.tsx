import cn from '@/utils/cn';
import { DivProps } from '@/interfaces/html';

interface DisplayElementProps extends DivProps {
    tag?: keyof JSX.IntrinsicElements | ''; // 限制 tag 屬性為合法的 HTML 標籤
    tagClassName?: string;
}

const DisplayElement = ({ tag = '', tagClassName, className, children, ...props }: DisplayElementProps) => {
    return (
        <div className={cn('whitespace-pre', className)} {...props}>
            <p className={tagClassName}>{`<${tag}>`}</p>
            <div className="pl-[2em]">{children}</div>
            <p className={tagClassName}>{`</${tag}>`}</p>
        </div>
    );
};

export default DisplayElement;
