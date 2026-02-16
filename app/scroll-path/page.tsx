// Inspired on https://mindmarket.com/

// Watch GSAP Effortlessly Draw This SVG Path on Scroll Without Breaking a Sweat by Codegrid
// link: https://www.youtube.com/watch?v=PAf8gN7p2eg&list=PLWYTDmLWs-7HHxrf5_Aofaal2u9dlu6G1

"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin);

export default function ScrollPathPage() {
    const containerRef = useRef<HTMLDivElement>(null);
    const pathRef = useRef<SVGPathElement>(null);

    useGSAP(
        () => {
            gsap.fromTo(
                pathRef.current,
                { drawSVG: "0%" },
                {
                    drawSVG: "100%",
                    ease: "none",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top top",
                        end: "bottom bottom",
                        scrub: true,
                    },
                }
            );
        },
        { scope: containerRef }
    );

    return (
        <div ref={containerRef} className="relative min-h-[300vh]">
            <svg
                className="sticky top-0 w-full"
                viewBox="0 0 1310 3612"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    ref={pathRef}
                    d="M669.375 70.0184C669.375 70.0184 139.526 228.683 80.3752 509.518C22.9987 781.928 213.459 946.845 414.875 1139.02C629.58 1343.87 983.245 1179.67 1108.88 1448.52C1223.49 1693.8 1122.93 1904.88 968.875 2127.52C798.926 2373.12 389.185 2220.49 304.875 2507.02C230.123 2761.06 674.699 2916.01 776.458 2947.88C789.634 2952.01 803.491 2950 815.071 2942.48C893.969 2891.25 1203.98 2676.88 1236.38 2452.02C1304.45 1979.46 184.06 1985.1 84.3752 2452.02C18.1985 2761.99 279.562 2773.97 412.875 3061.52C498.008 3245.15 540.984 3350.66 608.375 3541.52"
                    stroke="#9DF6B9"
                    strokeWidth="200"
                    strokeLinecap="round"
                />
            </svg>
        </div>
    );
}
