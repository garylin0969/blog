import cn from '@/utils/cn';
import { DivProps } from '@/interfaces/html';

const tagColor = 'text-slate-400';
const tagTextColor = 'text-red-400';

interface RenderTagProps {
    tag: keyof JSX.IntrinsicElements | ''; // 限制 tag 屬性為合法的 HTML 標籤
    isClose?: boolean;
}

const RenderTag = ({ tag = '', isClose = false }: RenderTagProps) => (
    <>
        <span className={tagColor}>{isClose ? `</` : `<`}</span>
        <span className={tagTextColor}>{tag}</span>
        <span className={tagColor}>{`>`}</span>
    </>
);

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
        <div className={cn(className)} {...props}>
            {wrap && (
                <>
                    <p className={tagClassName}>
                        <RenderTag tag={tag} />
                    </p>
                    <div className="pl-[2em]">{children}</div>
                    <p className={tagClassName}>
                        <RenderTag tag={tag} isClose />
                    </p>
                </>
            )}
            {!wrap && (
                <>
                    <span className={cn('pl-[2em] pr-2', tagClassName)}>
                        <RenderTag tag={tag} />
                    </span>
                    {children}
                    <span className={cn('pl-2', tagClassName)}>
                        <RenderTag tag={tag} isClose />
                    </span>
                </>
            )}
        </div>
    );
};

export default DisplayElement;
