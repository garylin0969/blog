import { DivProps } from '@/interfaces/html';
import cn from '@/utils/cn';

interface ContainerProps extends DivProps {}

const Container = ({ className, children, ...props }: ContainerProps) => {
    return (
        <div className={cn('mx-auto max-w-6xl px-4', className)} {...props}>
            {children}
        </div>
    );
};

export default Container;
