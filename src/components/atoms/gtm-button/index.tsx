'use client';

import { ButtonHTMLAttributes, MouseEvent } from 'react';
import { CustomEventName, GTMEventKey, sendGTM } from '@/utils/gtm';

interface GTMButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    gtmEvent?: {
        [GTMEventKey.EVENT_NAME]: CustomEventName;
        [GTMEventKey.CLICK_ITEM]: string;
        [GTMEventKey.SECTION]: string;
    };
}

const GTMButton = ({ gtmEvent, onClick, children, ...props }: GTMButtonProps) => {
    const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
        if (gtmEvent) sendGTM(gtmEvent);
        if (onClick) onClick(event);
    };

    return (
        <button onClick={handleClick} {...props}>
            {children}
        </button>
    );
};

export default GTMButton;
