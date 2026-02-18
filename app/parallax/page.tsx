"use client";
import { useGSAP } from "@gsap/react";
import { Button } from "@/components/ui/button";
import gsap from "gsap";
import ReactLenis, { useLenis } from "lenis/react";
import { Instrument_Serif } from "next/font/google";
import Image from "next/image";
import { useRef } from "react";

const instrumentSerif = Instrument_Serif({
    subsets: ["latin"],
    weight: "400",
    style: ["normal", "italic"],
});

export default function ParallaxExample() {
    return (
        <>
            <ReactLenis root />
            <div className={`${instrumentSerif.className} h-full w-full`}>
                <Section>
                    <ImageWrapper>
                        <ParallaxImage
                            src="/parallax/parallax-image-1.jpg"
                            alt="parallax-image-1"
                        />
                    </ImageWrapper>
                </Section>
                <NavWrapper className="px-10 text-2xl">
                    <p>Tour</p>
                    <p>Updates</p>
                    <p>Contact</p>
                    <p>Merch</p>
                </NavWrapper>
                <Section>
                    <div className="w-2xl absolute left-0 top-0 z-10 h-1/2">
                        <ParallaxImage
                            src="/parallax/parallax-image-2.jpg"
                            alt="parallax-image-2"
                            className="object-center"
                        />
                    </div>
                    {/* Projects Brief */}
                    <ProjectsBrief>
                        <p className="z-20 max-w-lg font-semibold">
                            Zeena D'Costa breakdown of Epigenetics Epidimiology
                            has been the new recorder metric to be able to
                            understand the world around us. The project is a
                            collection of data visualizations and interactive
                            experiences that explore the relationship between
                            plants and life.
                        </p>
                    </ProjectsBrief>
                    {/* Project Cover */}

                    <ImageWrapper>
                        <ParallaxImage
                            src="/parallax/parallax-image-4.jpg"
                            alt="parallax-image-4"
                            className="w-full object-bottom"
                        />
                    </ImageWrapper>

                    {/* Project List */}
                    <div className="font-semi right-1/12 absolute top-1/2 z-20 text-center">
                        <div>
                            <ProjectTitle>Plant Epigenetics</ProjectTitle>
                            <p>Jacs / Cell / Nature Biotechnology</p>
                        </div>
                        <div>
                            <ProjectTitle>
                                Sunflour Drought Resistance
                            </ProjectTitle>
                            <p>Nucleic Acid Research / Cell </p>
                        </div>
                        <div>
                            <ProjectTitle>Plant Ecophysiology</ProjectTitle>
                            <p>Jacs / Nature Biotechnology</p>
                        </div>
                        <div>
                            <ProjectTitle>Plant Epigenetics</ProjectTitle>
                            <p>Cell Reports/ Cell Metabolism</p>
                        </div>
                    </div>
                </Section>
                <Section>
                    <div className="left-1/8 absolute top-1/3 max-w-md text-center text-xl font-semibold">
                        <p>INTRODUCTION</p>
                        <p>
                            Zeena D'Costa breakdown of Epigenetics Epidimiology
                            has been the new recorder metric to be able to
                            understand the world around us. The project is a
                            collection of data visualizations and interactive
                            experiences that explore the relationship between
                            plants and life.
                        </p>
                    </div>
                    <div className="absolute right-0 top-0 my-5 h-full w-1/4">
                        <ParallaxImage
                            src="/parallax/parallax-image-5.jpg"
                            alt="parallax-image-5"
                            className="object-bottom"
                        />
                    </div>
                </Section>
                <Section>
                    Banner
                    <div>
                        <ImageWrapper>
                            <ParallaxImage
                                src="/parallax/parallax-image-3.jpg"
                                alt="parallax-image-3"
                                className="object-top"
                            />
                        </ImageWrapper>
                    </div>
                    <p>Be the first</p>
                    <h1>award me a PhD</h1>
                    <p>
                        Do you wanna hear the latest news on my travels with La
                        Chema?
                    </p>
                    <Button>Join the Zeena Letter</Button>
                </Section>
                {/** Footer */}
                <Section>
                    <div>
                        <p>Instagram / Tiktok / Linkedin</p>
                    </div>

                    <div>
                        <p>Menu</p>
                        <h1>Tour</h1>
                        <h1>Updates</h1>
                        <h1>Merch</h1>
                        <h1>Contact</h1>
                    </div>
                    <p>&copy; 2024 Christian Koch Echeverría</p>
                    <div>
                        <p>
                            Join the zeena's letter <br />
                            <button>Subscribe</button>
                        </p>
                    </div>
                    <div>
                        <div>
                            <ImageWrapper>
                                <ParallaxImage
                                    src="/parallax/parallax-image-6.jpg"
                                    alt="parallax-image-6"
                                />
                            </ImageWrapper>
                        </div>
                        <p>Spotify / Apple Music / Youtube </p>
                    </div>
                </Section>
            </div>
        </>
    );
}

const ImageWrapper = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="absolute left-0 top-0 h-full w-full">{children}</div>
    );
};

const Section = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <div
            className={`relative h-screen w-screen ${className} overflow-hidden`}
        >
            {children}
        </div>
    );
};

const NavWrapper = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <div
            className={`z-2 absolute left-1/2 top-1/2 flex w-screen translate-x-[-50%] translate-y-[-50%] items-center justify-between p-2 ${className}`}
        >
            {children}
        </div>
    );
};

const ProjectSection = ({ children }: { children: React.ReactNode }) => {
    return (
        <Section className="flex h-[125vh] w-screen gap-32">{children}</Section>
    );
};

const ProjectsBrief = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="w-xk absolute left-[35%] top-[35%] z-20 translate-x-[-50%] translate-y-[-50%] text-center text-xl font-medium">
            {children}
        </div>
    );
};

const ProjectTitle = ({ children }: { children: React.ReactNode }) => {
    return <h1 className="text-6xl tracking-wide">{children}</h1>;
};

/**
 * Parallex Image with Ai Comments to understand how to generallize this example
 */
const ParallaxImage = ({
    src,
    alt,
    className,
}: {
    src: string;
    alt: string;
    className?: string;
}) => {
    // Ref to the actual <img> DOM node that GSAP animates.
    const imageRef = useRef<HTMLImageElement | null>(null);
    // Stores a performant setter function created by gsap.quickTo for y translation.
    const quickToYRef = useRef<((value: number) => gsap.core.Tween) | null>(
        null
    );

    // useGSAP scopes setup/cleanup to this component, so animations are reverted safely on unmount.
    useGSAP(
        () => {
            // Guard because refs are null before the element is mounted.
            if (!imageRef.current) return;
            // Set a known baseline transform once before scroll updates start.
            gsap.set(imageRef.current, {
                // Start from neutral vertical offset.
                y: 0,
                // Slight overscale prevents empty edges while translating.
                scale: 1.25,
                // Hint GPU acceleration for smoother transforms.
                force3D: true,
            });
            // Create a reusable y animator: each call retargets smoothly instead of spawning manual RAF loops.
            quickToYRef.current = gsap.quickTo(imageRef.current, "y", {
                // Smoothing duration for each incoming Lenis update.
                duration: 0.6,
                // Ease for a natural catch-up feel.
                ease: "power3.out",
            });
        },
        // Scope ties GSAP context to this ref for automatic cleanup.
        { scope: imageRef }
    );

    // Lenis fires on scroll; we only compute target positions here and let GSAP tween them.
    useLenis(() => {
        // Guard until both DOM node and quickTo handler are ready.
        if (!imageRef.current || !quickToYRef.current) return;
        // Measure image position relative to the viewport on each scroll tick.
        const rect = imageRef.current.getBoundingClientRect();
        // Viewport center is our "neutral" line for parallax.
        const viewportCenter = window.innerHeight / 2;
        // Current image center in viewport coordinates.
        const imageCenter = rect.top + rect.height / 2;
        // Positive/negative distance from center drives parallax direction.
        const distanceFromCenter = viewportCenter - imageCenter;
        // Convert distance to movement and clamp to avoid extreme jumps.
        const y = gsap.utils.clamp(-120, 120, distanceFromCenter * 0.12);
        // Push target y to GSAP's quick animator.
        quickToYRef.current(y);
    });

    return (
        <Image
            ref={imageRef}
            src={src}
            fill
            sizes="100%"
            alt={alt}
            className={`absolute w-full object-cover will-change-transform ${className}`}
        />
    );
};
