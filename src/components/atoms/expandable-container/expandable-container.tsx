'use client';

import { useEffect, useRef, useState } from 'react';
import cn from '@/utils/cn';
import { DivPropsT } from '@/interfaces/html';

interface ExpandableContainerProps extends DivPropsT {
    isOpen: boolean;
    direction?: 'up' | 'down' | 'left' | 'right';
}

const ExpandableContainer = ({ isOpen, direction = 'down', className, children }: ExpandableContainerProps) => {
    const isVertical = ['up', 'down']?.includes(direction);
    const containerRef = useRef<HTMLDivElement>(null);
    const [size, setSize] = useState<string>('0px');
    const transitionClass = isVertical ? 'transition-[height]' : 'transition-[width]';
    const sizeStyle = isVertical ? { height: size } : { width: size };

    useEffect(() => {
        if (!isOpen) {
            setSize('0px');
            return;
        }

        if (containerRef?.current) {
            if (isVertical) {
                setSize(`${containerRef?.current?.scrollHeight}px`);
                return;
            }
            setSize(`100%`);
        }
    }, [isOpen, direction]);

    return (
        <div
            ref={containerRef}
            className={cn(
                'fixed',
                direction === 'down' ? 'left-0 top-0 w-full' : '',
                direction === 'up' ? 'bottom-0 left-0 w-full' : '',
                direction === 'left' ? 'right-0 top-0' : '',
                direction === 'right' ? 'left-0 top-0' : '',
                transitionClass,
                'duration-300',
                'overflow-hidden',
                className,
            )}
            style={sizeStyle}
        >
            {children}
        </div>
    );
};

export default ExpandableContainer;
