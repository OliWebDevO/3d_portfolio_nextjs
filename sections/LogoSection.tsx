"use client";
import { useRef } from "react";
import Image from "next/image";
import TitleHeader from "@/components/TitleHeader";
import { logoIconsList } from "../constants";
import { useTranslation } from "@/hooks/useTranslation";

const LogoIcon = ({ icon }: { icon: LogoIconType }) => (

  <div className="flex-none flex-center marquee-item select-none" style={{ cursor: "grab" }}>
    <Image
      src={icon.imgPath}
      alt={`Logo ${icon.id}`}
      width={100}
      height={100}
      draggable={false}
      onDragStart={e => e.preventDefault()}
    />
  </div>
);

const LogoSection = () => {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const isDownRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);
  const { t } = useTranslation(); 

  // For momentum
  const lastXRef = useRef(0);
  const lastTimeRef = useRef(0);
  const velocityRef = useRef(0);
  const momentumFrame = useRef<number | null>(null);

  // Drag-to-scroll handlers with velocity tracking
  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType === "mouse" && e.button !== 0) return;
    isDownRef.current = true;
    marqueeRef.current?.classList.add("marquee-interactive");
    startXRef.current = e.pageX;
    scrollLeftRef.current = marqueeRef.current?.scrollLeft || 0;
    lastXRef.current = e.pageX;
    lastTimeRef.current = performance.now();
    velocityRef.current = 0;
    if (momentumFrame.current) {
      cancelAnimationFrame(momentumFrame.current);
      momentumFrame.current = null;
    }
    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerup", handlePointerUp);
  };

  const handlePointerMove = (e: PointerEvent) => {
    if (!isDownRef.current) return;
    e.preventDefault();
    const x = e.pageX;
    const walk = x - startXRef.current;
    if (marqueeRef.current) {
      marqueeRef.current.scrollLeft = scrollLeftRef.current - walk;
    }
    // Calculate velocity
    const now = performance.now();
    const dx = x - lastXRef.current;
    const dt = now - lastTimeRef.current;
    if (dt > 0) {
      velocityRef.current = dx / dt;
    }
    lastXRef.current = x;
    lastTimeRef.current = now;
  };

  const handlePointerUp = () => {
    isDownRef.current = false;
    marqueeRef.current?.classList.remove("marquee-interactive");
    window.removeEventListener("pointermove", handlePointerMove);
    window.removeEventListener("pointerup", handlePointerUp);
    // Start momentum
    momentumScroll();
  };

  // Momentum/inertia scroll
  const momentumScroll = () => {
    const marquee = marqueeRef.current;
    if (!marquee) return;
    let velocity = velocityRef.current * 16; // scale to px/frame (assuming ~60fps)
    const friction = 0.95; // Lower = more friction, higher = longer glide

    function animate() {
      if (!marquee) return;
      if (Math.abs(velocity) > 0.1) {
        marquee.scrollLeft -= velocity;
        velocity *= friction;
        // Infinite scroll logic
        const totalWidth = marquee.scrollWidth / 2;
        if (marquee.scrollLeft >= totalWidth) {
          marquee.scrollLeft -= totalWidth;
        } else if (marquee.scrollLeft <= 0) {
          marquee.scrollLeft += totalWidth;
        }
        momentumFrame.current = requestAnimationFrame(animate);
      } else {
        momentumFrame.current = null;
      }
    }
    animate();
  };

  // Infinite scroll effect
  const handleScroll = () => {
    const marquee = marqueeRef.current;
    if (!marquee) return;
    const totalWidth = marquee.scrollWidth / 2;
    if (marquee.scrollLeft >= totalWidth) {
      marquee.scrollLeft -= totalWidth;
    } else if (marquee.scrollLeft <= 0) {
      marquee.scrollLeft += totalWidth;
    }
  };

  return (
    <section id="skills" className="section-padding md:pb-20 pb-10">
      <TitleHeader title={t.skills.title} sub={t.skills.subtitle} />
      <div className="md:my-15 my-25 relative overflow-hidden">
        <div className="gradient-edge"></div>
        <div className="gradient-edge"></div>
        <div
          className="marquee h-52"
          ref={marqueeRef}
          onPointerDown={handlePointerDown}
          onScroll={handleScroll}
          style={{ touchAction: "pan-x", overflowX: "auto", whiteSpace: "nowrap" }}
        >
          <div className="marquee-box md:gap-12 gap-5" style={{ display: "flex", width: "max-content" }}>
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