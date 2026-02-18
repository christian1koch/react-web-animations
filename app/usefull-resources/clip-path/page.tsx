"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import { useRef } from "react";

export default function ClipPathPage() {
    const imageRef = useRef(null);
    useGSAP(() => {
        gsap.to(imageRef.current, {
            duration: 2.25,
            clipPath: "circle(100%)",
            ease: "power4.inOut",
        });
    });
    return (
        <div className="">
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
            <div className="z-2 fixed right-0 top-0 p-6">Menu</div>
            <div>
                <p>Projects</p>
                <p>Ideas</p>
                <p>About me</p>
                <p>Contact me</p>
            </div>
        </div>
    );
}
