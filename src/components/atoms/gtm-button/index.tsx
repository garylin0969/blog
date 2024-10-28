'use client';

import { ButtonHTMLAttributes, MouseEvent, ReactNode } from 'react';
import { CustomEventName, GTMEventKey, sendGTM } from '@/utils/gtm';

interface GTMButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    gtmEvent?: {
        [GTMEventKey.EVENT_NAME]: CustomEventName;
        [GTMEventKey.CLICK_ITEM]: string;
        [GTMEventKey.SECTION]: string;
    };
    children?: ReactNode;
}

const GTMButton = ({ gtmEvent, children, ...props }: GTMButtonProps) => {
    const onClick = (event: MouseEvent<HTMLButtonElement>) => {
        if (gtmEvent) sendGTM(gtmEvent);
        if (props.onClick) props.onClick(event);
    };

    return (
        <button {...props} onClick={onClick}>
            {children}
        </button>
    );
};

export default GTMButton;
