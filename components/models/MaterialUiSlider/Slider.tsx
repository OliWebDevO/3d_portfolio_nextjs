'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import './effect-material.css';
import './index.css';
import Link from 'next/link';
import type { SwiperOptions } from 'swiper/types';
import '@/app/globals.css';
import TitleHeader from '@/components/TitleHeader';
import { useTranslation } from '@/hooks/useTranslation';

const images = [
  { src: '/images/library.png', label: 'Library' },
  { src: '/images/ag2.png', label: 'ArtGallery' },
  { src: '/images/annick1.png', label: 'Annick' },
  { src: '/images/lenoyer1.png', label: 'Lenoyer' },
  { src: '/images/portfolioCover1.png', label: 'Portfolio' },
];

export default function Slider() {
  const { t } = useTranslation();
  const swiperRef = useRef<HTMLDivElement>(null);
  const [slidesPerView, setSlidesPerView] = useState<number>(2);

  // Responsive slidesPerView: 2 for desktop, 1 for mobile
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 768) {
        setSlidesPerView(1);
      } else {
        setSlidesPerView(2);
      }
    }
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    let swiperInstance: Swiper | undefined;
    let destroyed = false;

    import('./effect-material.esm.js').then((mod) => {
      if (destroyed) return;
      const EffectMaterial = mod.default || mod;
      if (swiperRef.current) {
        swiperInstance = new Swiper(swiperRef.current, {
          modules: [EffectMaterial, Navigation],
          effect: 'material',
          materialEffect: {
            slideSplitRatio: 0.65,
          },
          grabCursor: true,
          slidesPerView,
          centeredSlides: false,
          spaceBetween: 16,
          speed: 600,
          navigation: {
            nextEl: '.swiper-button-next-custom',
            prevEl: '.swiper-button-prev-custom',
          },
        } as unknown as SwiperOptions);
      }
    });

    return () => {
      destroyed = true;
      if (swiperInstance) swiperInstance.destroy();
    };
  }, [slidesPerView]);

    return (
    <section id="work" className='relative'>
        <TitleHeader 
          title={t.slider.title} 
          sub={t.slider.subtitle} 
          cn=' pt-20 pb-14'  
        />
      <div className="demo-slider">
        {/* Custom Navigation Arrows - positioned relative to slider */}
        <div className="swiper-button-prev-custom">
          <div className="arrow-nav-wrapper">
            <Image
              src="/images/arrow-right.svg"
              alt="Previous"
              width={24}
              height={24}
              className="arrow-nav-icon rotate-180"
            />
          </div>
        </div>
        
        <div className="swiper-button-next-custom">
          <div className="arrow-nav-wrapper">
            <Image
              src="/images/arrow-right.svg"
              alt="Next"
              width={24}
              height={24}
              className="arrow-nav-icon"
            />
          </div>
        </div>

        <div className="swiper" ref={swiperRef}>
          <div className="swiper-wrapper">
            {images.map((img, idx) => (
              <div className="swiper-slide" key={idx}>
                <div className="swiper-material-wrapper">
                  <div className="swiper-material-content">
                    <img
                      className="demo-material-image"
                      data-swiper-material-scale="1.25"
                      src={img.src}
                      alt={img.label}
                    />
                    <Link
                      href={`/projects/${img.label.toLowerCase().replace(/\s+/g, '-')}`}
                      className="demo-material-label swiper-material-animate-opacity"
                    >
                      {img.label}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}