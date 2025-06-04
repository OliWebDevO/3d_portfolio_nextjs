"use client";
import { useRef } from "react";
import TitleHeader from "@/components/TitleHeader";
import { logoIconsList } from "../constants";

const LogoIcon = ({
  icon,
  onPointerDown,
}: {
  icon: LogoIconType;
  onPointerDown: (e: React.PointerEvent<HTMLDivElement>) => void;
}) => (
  <div
    className="flex-none flex-center marquee-item"
    onPointerDown={onPointerDown}
    style={{ cursor: "grab" }}
  >
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

  // Use window events so drag works even if pointer leaves the marquee
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

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    isDownRef.current = true;
    marqueeRef.current?.classList.add("marquee-interactive");
    startXRef.current = e.pageX;
    scrollLeftRef.current = marqueeRef.current?.scrollLeft || 0;
    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerup", handlePointerUp);
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
          style={{ touchAction: "pan-x" }}
        >
          <div className="marquee-box md:gap-12 gap-5">
            {logoIconsList.map((icon) => (
              <LogoIcon
                key={icon.id}
                icon={icon}
                onPointerDown={handlePointerDown}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoSection;