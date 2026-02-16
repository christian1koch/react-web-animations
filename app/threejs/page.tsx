"use client";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useEffect, useMemo, useRef, useState } from "react";
import { Color, ShaderMaterial, Vector2 } from "three";
import { fragmentShader, vertexShader } from "@/lib/shaders";
import Image from "next/image";
import { ReactLenis, useLenis } from "lenis/react";

export default function ThreeJSExample() {
    return (
        <ReactLenis root>
            <LenisThreeScene />
        </ReactLenis>
    );
}

function LenisThreeScene() {
    const [scrollProgress, setScrollProgress] = useState(0);

    useLenis((lenis) => {
        setScrollProgress(lenis.progress);
    }, []);

    return (
        <div className="relative h-[200vh] bg-white">
            <div className="absolute inset-x-0 top-0 h-[110vh] overflow-hidden">
                <Image
                    src={"/zeena5.jpg"}
                    alt={""}
                    fill
                    sizes="100vw"
                    className="object-cover object-center"
                />
            </div>
            <Canvas className="absolute bottom-0 w-full">
                <Scene progress={scrollProgress} />
            </Canvas>
        </div>
    );
}

function Scene(props: { progress: number }) {
    const materialRef = useRef<ShaderMaterial | null>(null);
    const { size, viewport } = useThree();

    const uniforms = useMemo(
        () => ({
            uProgress: { value: 50 },
            uResolution: { value: new Vector2(size.width, size.height) },
            uColor: { value: new Color("#fff") },
            uSpread: { value: 0.3 },
        }),
        [size.width, size.height]
    );

    useFrame(() => {
        if (!materialRef.current) return;
        materialRef.current.uniforms.uProgress.value = 0.4 + props.progress;
    });

    return (
        <>
            <mesh key={size.width + size.height}>
                <planeGeometry args={[viewport.width, viewport.height]} />
                <shaderMaterial
                    ref={materialRef}
                    vertexShader={vertexShader}
                    fragmentShader={fragmentShader}
                    uniforms={uniforms}
                    transparent
                />
            </mesh>
            <ambientLight intensity={0.1} />
            <directionalLight position={[0, 0, 5]} color="red" />
        </>
    );
}
