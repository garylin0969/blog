'use client';

import type { RefObject } from 'react';
import { useEffect } from 'react';

const useClickOutside = (reference: RefObject<HTMLElement>, callback: () => void, enabled = true) => {
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (reference?.current && !reference.current.contains(event.target as Node)) {
                callback();
            }
        };

        if (enabled) document.addEventListener('mousedown', handleClickOutside, { passive: true });

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [reference, callback]);
};

export default useClickOutside;
