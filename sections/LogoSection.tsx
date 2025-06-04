"use client";
import { useRef } from "react";
import TitleHeader from "@/components/TitleHeader";
import { logoIconsList } from "../constants";

const LogoIcon = ({ icon }: { icon: LogoIconType }) => (
  <div className="flex-none flex-center marquee-item select-none" style={{ cursor: "grab" }}>
    <img
      src={icon.imgPath}
      alt={icon.imgPath}
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

  // Drag-to-scroll handlers
  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType === "mouse" && e.button !== 0) return;
    isDownRef.current = true;
    marqueeRef.current?.classList.add("marquee-interactive");
    startXRef.current = e.pageX;
    scrollLeftRef.current = marqueeRef.current?.scrollLeft || 0;
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
  };

  const handlePointerUp = () => {
    isDownRef.current = false;
    marqueeRef.current?.classList.remove("marquee-interactive");
    window.removeEventListener("pointermove", handlePointerMove);
    window.removeEventListener("pointerup", handlePointerUp);
  };

  // Infinite scroll effect
  const handleScroll = () => {
    const marquee = marqueeRef.current;
    if (!marquee) return;
    const totalWidth = marquee.scrollWidth / 2;
    // If scrolled to the end of the first set, reset to the start
    if (marquee.scrollLeft >= totalWidth) {
      marquee.scrollLeft -= totalWidth;
    }
    // If scrolled to the very start, jump to the end of the first set
    else if (marquee.scrollLeft <= 0) {
      marquee.scrollLeft += totalWidth;
    }
  };

  return (
    <section id="skills" className="section-padding md:pb-20 pb-10">
      <TitleHeader title="Skills" sub="⚙️ My field of expertise" />
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