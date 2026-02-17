'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={handleClick}
      aria-label="Scroll to top"
      style={{ touchAction: 'manipulation', WebkitTapHighlightColor: 'transparent' }}
      className={`fixed bottom-20 md:bottom-6 right-6 z-50 size-12 rounded-full bg-white/90 shadow-lg flex items-center justify-center transition-opacity duration-300 cursor-pointer ${
        visible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <Image
        src="/images/arrow-down.svg"
        alt="Scroll to top"
        width={20}
        height={20}
        className="rotate-180"
      />
    </button>
  );
}
