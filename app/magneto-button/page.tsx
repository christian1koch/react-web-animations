// Based on https://www.youtube.com/watch?v=vqXLGX0szIQ&t=14691s Evato Tuts+ - Motion Design for the Web
// Based on https://dennissnellenberg.com/ button
"use client";
import { Button } from "@/components/ui/button";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";

export default function MagnetoButtonPage() {
    const MAGNETO_STRENGTH = 90;
    const MAGNETO_TEXT_STRENGTH = 80;
    const textRef = useRef<HTMLSpanElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);
    const colorOverlay = useRef<HTMLSpanElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const { contextSafe } = useGSAP({ scope: containerRef });

    const colorButton = contextSafe((shouldColor: boolean) => {
        if (!buttonRef.current || !colorOverlay.current) {
            throw new Error("Button not found!");
        }
        const movY = colorOverlay.current.offsetTop + 20;
        if (shouldColor) {
            return gsap.to(colorOverlay.current, {
                y: movY,
                scale: 10,
                duration: 1,
            });
        }
        return gsap.to(colorOverlay.current, {
            y: movY,
            scale: 0,
            duration: 1,
        });
    });

    const onHover = contextSafe(
        (event: React.MouseEvent<HTMLButtonElement>) => {
            if (!buttonRef.current) {
                throw new Error("Button not found!");
            }
            const boundBox = buttonRef.current?.getBoundingClientRect();

            const newX =
                (event.clientX - boundBox.left) /
                    buttonRef.current.offsetWidth -
                0.5;
            const newY =
                (event.clientY - boundBox.top) /
                    buttonRef.current.offsetHeight -
                0.5;
            colorButton(true);

            gsap.to(buttonRef.current, {
                duration: 1,
                x: newX * MAGNETO_STRENGTH,
                y: newY * MAGNETO_STRENGTH,
                ease: "power4.out",
            });
            gsap.to(textRef.current, {
                duration: 1,
                x: newX * MAGNETO_TEXT_STRENGTH,
                y: newY * MAGNETO_TEXT_STRENGTH,
                ease: "power4.out",
            });
        }
    );

    const onMouseLeave = contextSafe(
        (event: React.MouseEvent<HTMLButtonElement>) => {
            if (!buttonRef.current) {
                throw new Error("Button not found!");
            }
            gsap.to(buttonRef.current, {
                duration: 1,
                x: 0,
                y: 0,
                ease: "elastic.out",
            });
            gsap.to(textRef.current, {
                duration: 1,
                x: 0,
                y: 0,
                ease: "elastic.out",
            });
            colorButton(false);
        }
    );

    return (
        <div
            className="flex h-screen w-full items-center justify-center bg-stone-800"
            ref={containerRef}
        >
            <Button
                onMouseMove={onHover}
                onMouseLeave={onMouseLeave}
                ref={buttonRef}
                className="static h-32 w-32 overflow-hidden rounded-[50%]"
            >
                <span
                    className="z-1 absolute h-10 w-10 rounded-[50%] bg-blue-400"
                    ref={colorOverlay}
                ></span>
                <span
                    className="z-2 font-semibold text-stone-900"
                    ref={textRef}
                >
                    Hover me!
                </span>
            </Button>
        </div>
    );
}
