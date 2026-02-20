"use client";
import { useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import TitleHeader from "@/components/TitleHeader";
import { logoIconsList } from "../constants";
import { useTranslation } from "@/hooks/useTranslation";

const LogoIcon = ({ icon }: { icon: LogoIconType }) => (
  <div className="flex-none flex-center marquee-item select-none">
    <Image
      src={icon.imgPath}
      alt="Tech logo"
      width={100}
      height={100}
      loading="lazy"
      draggable={false}
      onDragStart={(e) => e.preventDefault()}
    />
  </div>
);

const LogoSection = () => {
  const boxRef = useRef<HTMLDivElement>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);
  const momentumRef = useRef<gsap.core.Tween | null>(null);
  const isDownRef = useRef(false);
  const startXRef = useRef(0);
  const startProgressRef = useRef(0);
  const lastXRef = useRef(0);
  const lastTimeRef = useRef(0);
  const velocityRef = useRef(0);
  const { t } = useTranslation();

  useEffect(() => {
    const box = boxRef.current;
    if (!box) return;

    const totalWidth = box.scrollWidth / 2;

    const tween = gsap.to(box, {
      x: -totalWidth,
      duration: 60,
      ease: "none",
      repeat: -1,
    });

    tweenRef.current = tween;
    return () => {
      tween.kill();
      momentumRef.current?.kill();
    };
  }, []);

  const handlePointerDown = (e: React.PointerEvent) => {
    if (e.pointerType !== "mouse") return;
    if (e.button !== 0) return;

    momentumRef.current?.kill();
    isDownRef.current = true;
    startXRef.current = e.pageX;
    lastXRef.current = e.pageX;
    lastTimeRef.current = performance.now();
    velocityRef.current = 0;
    startProgressRef.current = tweenRef.current?.progress() || 0;
    tweenRef.current?.pause();

    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerup", handlePointerUp);
  };

  const handlePointerMove = (e: PointerEvent) => {
    if (!isDownRef.current || !tweenRef.current || !boxRef.current) return;
    e.preventDefault();

    const now = performance.now();
    const dt = now - lastTimeRef.current;
    if (dt > 0) {
      velocityRef.current = (e.pageX - lastXRef.current) / dt;
    }
    lastXRef.current = e.pageX;
    lastTimeRef.current = now;

    const totalWidth = boxRef.current.scrollWidth / 2;
    const dx = e.pageX - startXRef.current;
    const progressDelta = -dx / totalWidth;
    let newProgress = startProgressRef.current + progressDelta;
    newProgress = ((newProgress % 1) + 1) % 1;
    tweenRef.current.progress(newProgress);
  };

  const handlePointerUp = () => {
    isDownRef.current = false;
    window.removeEventListener("pointermove", handlePointerMove);
    window.removeEventListener("pointerup", handlePointerUp);

    const tween = tweenRef.current;
    const box = boxRef.current;
    if (!tween || !box) return;

    const velocity = velocityRef.current;
    const totalWidth = box.scrollWidth / 2;
    const glideDistance = velocity * 800;
    const progressGlide = -glideDistance / totalWidth;
    const targetProgress = ((tween.progress() + progressGlide) % 1 + 1) % 1;

    const momentum = gsap.to(tween, {
      progress: targetProgress,
      duration: 1.2,
      ease: "power3.out",
      onUpdate: () => {
        tween.progress(((tween.progress() % 1) + 1) % 1);
      },
      onComplete: () => {
        tween.resume();
      },
    });

    momentumRef.current = momentum;
  };

  return (
    <section id="skills" className="section-padding md:pb-20 pb-10">
      <TitleHeader title={t.skills.title} sub={t.skills.subtitle} />
      <div className="md:my-15 my-25 relative overflow-hidden">
        <div className="gradient-edge"></div>
        <div className="gradient-edge"></div>
        <div
          className="marquee h-52 md:cursor-grab active:md:cursor-grabbing"
          onPointerDown={handlePointerDown}
        >
          <div className="marquee-box md:gap-12 gap-5" ref={boxRef}>
            {logoIconsList.concat(logoIconsList).map((icon, idx) => (
              <LogoIcon key={icon.id + "-" + idx} icon={icon} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoSection;
