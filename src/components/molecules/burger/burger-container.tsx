'use client';

import { useEffect, useRef, useState } from 'react';
import cn from '@/utils/cn';
import { DivPropsT } from '@/interfaces/html';

interface BurgerContainerProps extends DivPropsT {
    isOpen: boolean;
    direction?: 'up' | 'down' | 'left' | 'right';
}

// BurgerContainer 元件，用於控制展開和收合方向
const BurgerContainer = ({ isOpen, direction = 'down', className, children }: BurgerContainerProps) => {
    const isVertical = ['up', 'down']?.includes(direction); // 判斷方向是否為垂直方向
    const containerRef = useRef<HTMLDivElement>(null); // 用於獲取容器的引用
    const [size, setSize] = useState<string>('0px'); // 用於管理容器的大小
    const transitionClass = isVertical ? 'transition-[height]' : 'transition-[width]'; // 根據方向設置過渡類別
    const sizeStyle = isVertical ? { height: size } : { width: size }; // 根據方向設置大小樣式

    useEffect(() => {
        if (!isOpen) {
            setSize('0px'); // 收合時設置大小為 0
            return;
        }

        if (containerRef?.current) {
            // 判斷方向是否為垂直方向
            if (isVertical) {
                setSize(`${containerRef?.current?.scrollHeight}px`); // 設置高度
                return;
            }

            setSize(`100%`); // 設置寬度
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

export default BurgerContainer;
