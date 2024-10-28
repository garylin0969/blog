'use client';

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { MdLightMode } from 'react-icons/md';
import { BsFillMoonFill } from 'react-icons/bs';

const ThemeSwitch = () => {
    const { systemTheme, theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState<boolean>(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const currentTheme: string | undefined = theme === 'system' ? systemTheme : theme;

    return (
        <>
            {!mounted && <div className="h-5 w-5" />}
            {mounted &&
                (currentTheme === 'dark' ? (
                    <MdLightMode
                        className="cursor-pointer text-xl hover:text-amber-500"
                        onClick={() => setTheme('light')}
                    />
                ) : (
                    <BsFillMoonFill
                        className="cursor-pointer text-xl hover:text-amber-500"
                        onClick={() => setTheme('dark')}
                    />
                ))}
        </>
    );
};

export default ThemeSwitch;
