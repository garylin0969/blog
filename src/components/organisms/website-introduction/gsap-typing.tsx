'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import DisplayElement from '@/components/molecules/display-element';

/* ------使用範例請參考 docs/gsap-reference.md ------ */

gsap.registerPlugin(TextPlugin);

const h1Texts = ['Hi, my name is Gary Lin', '嗨，我是 Gary Lin'];
const pTexts = ['I am a Frontend Developer', '我是一名前端工程師'];

const GSAPTyping = () => {
    const h1TextRef = useRef<HTMLSpanElement>(null);
    const pTextRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const typingTimeline = gsap.timeline({ repeat: -1, yoyo: true, repeatDelay: 1 });
        h1Texts.forEach((h1Text, index) => {
            typingTimeline
                .to(h1TextRef.current, {
                    duration: 2,
                    text: h1Text,
                    ease: 'none',
                })
                .to(pTextRef.current, {
                    duration: 2,
                    text: pTexts[index],
                    ease: 'none',
                });
        });
    }, []);

    return (
        <>
            <DisplayElement tag="h1" wrap={false} className="mb-8">
                <span className="font-bold dark:text-white md:text-5xl" ref={h1TextRef} />
            </DisplayElement>
            <DisplayElement tag="p" wrap={false}>
                <span className="font-bold dark:text-white md:text-5xl" ref={pTextRef} />
            </DisplayElement>
        </>
    );
};

export default GSAPTyping;
