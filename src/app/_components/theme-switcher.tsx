'use client';

import styles from './switch.module.css';
import { memo, useEffect, useState } from 'react';

declare global {
    var updateDOM: () => void;
}

type ColorSchemePreference = 'dark' | 'light';

const STORAGE_KEY = 'nextjs-blog-starter-theme';
const modes: ColorSchemePreference[] = ['dark', 'light'];

/** to reuse updateDOM function defined inside injected script */

/** function to be injected in script tag for avoiding FOUC (Flash of Unstyled Content) */
export const NoFOUCScript = (storageKey: string) => {
    /* can not use outside constants or function as this script will be injected in a different context */
    const [DARK, LIGHT] = ['dark', 'light'];

    /** Modify transition globally to avoid patched transitions */
    const modifyTransition = () => {
        const css = document.createElement('style');
        css.textContent = '*,*:after,*:before{transition:none !important;}';
        document.head.appendChild(css);

        return () => {
            if (window) {
                /* Force restyle */
                getComputedStyle(document.body);
                /* Wait for next tick before removing */
                setTimeout(() => document.head.removeChild(css), 1);
            }
        };
    };

    const media = matchMedia(`(prefers-color-scheme: ${DARK})`);

    if (window) {
        /** function to add remove dark class */
        window.updateDOM = () => {
            const restoreTransitions = modifyTransition();
            const systemMode = media.matches ? DARK : LIGHT;
            const mode = localStorage.getItem(storageKey) ?? systemMode;
            const resolvedMode = mode === systemMode ? systemMode : mode;
            const classList = document.documentElement.classList;
            if (resolvedMode === DARK) classList.add(DARK);
            else classList.remove(DARK);
            document.documentElement.setAttribute('data-mode', mode);
            restoreTransitions();
        };
        window.updateDOM();
        media.addEventListener('change', window.updateDOM);
    }
};

let updateDOM: () => void;

/**
 * Switch button to quickly toggle user preference.
 */
export const ThemeSwitch = () => {
    const [mode, setMode] = useState<ColorSchemePreference>(
        () =>
            ((typeof localStorage !== 'undefined' && localStorage.getItem(STORAGE_KEY)) ??
                'system') as ColorSchemePreference,
    );

    useEffect(() => {
        // store global functions to local variables to avoid any interference
        updateDOM = window.updateDOM;
        /** Sync the tabs */
        addEventListener('storage', (e: StorageEvent): void => {
            e.key === STORAGE_KEY && setMode(e.newValue as ColorSchemePreference);
        });
    }, []);

    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, mode);
        updateDOM();
    }, [mode]);

    /** toggle mode */
    const handleModeSwitch = () => {
        const index = modes.indexOf(mode);
        setMode(modes[(index + 1) % modes.length]);
    };
    return <button suppressHydrationWarning className={styles.switch} onClick={handleModeSwitch} />;
};

export const ThemeScript = memo(() => (
    <script
        dangerouslySetInnerHTML={{
            __html: `(${NoFOUCScript.toString()})('${STORAGE_KEY}')`,
        }}
    />
));
