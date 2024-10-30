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
        <div className={cn({ 'md:flex md:items-center': !wrap }, className)} {...props}>
            <p className={cn('block', { 'md:inline-block md:pl-[2em] md:pr-2': !wrap }, tagClassName)}>
                <RenderTag tag={tag} />
            </p>
            <div className={cn('pl-[2em]', { 'md:inline-block md:p-0': !wrap })}>{children}</div>
            <p className={cn('block', { 'md:inline-block md:pl-2': !wrap }, tagClassName)}>
                <RenderTag tag={tag} isClose />
            </p>
        </div>
    );
};

export default DisplayElement;