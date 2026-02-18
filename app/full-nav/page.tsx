"use client";
import { Button } from "@/components/ui/button";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import { Bebas_Neue } from "next/font/google";
import { useRef, useState } from "react";

const bebasNeue = Bebas_Neue({
    subsets: ["latin"],
    weight: "400",
});

export default function FullNav() {
    const imageRef = useRef(null);
    const menuRef = useRef(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { contextSafe } = useGSAP({ scope: menuRef });
    const timeline = useRef<GSAPTimeline>(null);
    useGSAP(() => {
        gsap.to(imageRef.current, {
            duration: 2.25,
            clipPath: "circle(100%)",
            ease: "power4.inOut",
        });
        gsap.set(".anim-link", { y: 75 });
        timeline.current = gsap.timeline();
        timeline.current.to(menuRef.current, {
            duration: 1.5,
            clipPath: "circle(100% at 50% 100%)",
            ease: "power4.inOut",
        });
        timeline.current.to(".anim-link", {
            duration: 1,
            y: 0,
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
            ease: "power4.inOut",
            stagger: 0.1,
            delay: -0.75,
        });
        timeline.current?.pause();
    });
    const toggleMenu = contextSafe(() => {
        if (isMenuOpen) {
            timeline.current?.play();
            timeline.current?.reverse();

            setIsMenuOpen(false);
        } else {
            console.log("opening");
            setIsMenuOpen(true);
            timeline.current?.play();
        }
    });

    return (
        <div className={bebasNeue.className}>
            <div className="absolute z-0 h-screen w-screen">
                <Image
                    ref={imageRef}
                    sizes="100%"
                    fill
                    src="/parallax/parallax-image-6.jpg"
                    alt="background image"
                    objectFit="cover"
                    className=".image [clip-path:circle(0%)]"
                />
            </div>
            <div className="z-2 fixed right-0 top-0 p-6">
                <Button
                    className="text-xl"
                    variant="ghost"
                    onClick={toggleMenu}
                >
                    Menu
                </Button>
            </div>
            <div className="z-2 fixed left-0 top-0 p-6 text-xl">
                Christian Koch Echeverría
            </div>

            <div
                ref={menuRef}
                style={{
                    clipPath: "circle(50% at 50% -100%)",
                }}
                className="z-1 absolute flex h-full w-full items-center justify-center bg-red-800"
            >
                <div className="p-72 text-9xl">
                    <p
                        className="anim-link"
                        style={{
                            clipPath: "polygon(0 0, 100% 0)",
                        }}
                    >
                        Ideas
                    </p>
                    <p
                        className="anim-link"
                        style={{
                            clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
                        }}
                    >
                        Projects
                    </p>

                    <p
                        className="anim-link"
                        style={{
                            clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
                        }}
                    >
                        About me
                    </p>
                    <p
                        className="anim-link"
                        style={{
                            clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
                        }}
                    >
                        Contact me
                    </p>
                </div>
            </div>
        </div>
    );
}
