'use client'
import { useRef } from "react";
import { useTranslation } from "@/hooks/useTranslation";


const FeatureCards = () => {
   const cardRefs = useRef<HTMLDivElement[]>([]);
   const { abilities } = useTranslation();

    const handleMouseMove = (index: number) => (e: React.MouseEvent<HTMLDivElement>) => {
      const card = cardRefs.current[index];
      if (!card) return;
      //Get the mouse position 
      const rect = card.getBoundingClientRect();
      const mouseX = e.clientX - rect.left - rect.width / 2;
      const mouseY = e.clientY - rect.top - rect.height / 2;
      // Calculate the angle
      let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);
      angle = (angle + 360) % 360;
  
      card.style.setProperty('--start', (angle + 60).toString());
    };
  
  return (
    
    <div className="w-full padding-x-lg md:pb-40 pb20">
        <div className="mx-auto grid-3-cols 3xl:px-20 2xl:px-10 xl:px-6">
            {abilities.map((ability, index) => (
              <div 
              key={ability.imgPath} 
              className=" bg-black-100 card  rounded-xl p-8 flex flex-col gap-4"
              onMouseMove={handleMouseMove(index)}
              ref={(el) => {
                if (el) cardRefs.current[index] = el;
              }}
              >
                <div className="glow" />
                <div className="size-14 flex items-center justify-center rounded-full">
                    <img src={ability.imgPath} alt={ability.title} />
                </div>
                  <h3 className="text-2xl font-semibold text-white">{ability.title}</h3>
                  <p className="text-white-50 text-lg">{ability.desc}</p>
              </div>
            ))}
        </div>
    </div>
  )
}

export default FeatureCards