"use client"

import { useEffect } from 'react';

const GlowCard = ({ children, identifier }) => {
  useEffect(() => {
    if (typeof document !== 'undefined') {
      const CONTAINER = document.querySelector(`.glow-container-${identifier}`);
      const CARDS = document.querySelectorAll(`.glow-card-${identifier}`);

      const CONFIG = {
        proximity: 40,
        spread: 80,
        blur: 12,
        gap: 32,
        vertical: false,
        opacity: 0,
      };

      const UPDATE = (event) => {
        for (const CARD of CARDS) {
          const CARD_BOUNDS = CARD.getBoundingClientRect();

          if (
            event?.x > CARD_BOUNDS.left - CONFIG.proximity &&
            event?.x < CARD_BOUNDS.left + CARD_BOUNDS.width + CONFIG.proximity &&
            event?.y > CARD_BOUNDS.top - CONFIG.proximity &&
            event?.y < CARD_BOUNDS.top + CARD_BOUNDS.height + CONFIG.proximity
          ) {
            CARD.style.setProperty('--active', 1);
          } else {
            CARD.style.setProperty('--active', CONFIG.opacity);
          }

          const CARD_CENTER = [
            /*...*/
          ];
        }
      };

      CONTAINER.addEventListener('mousemove', UPDATE);

      return () => {
        CONTAINER.removeEventListener('mousemove', UPDATE);
      };
    }
  }, [identifier]);

  return (
    <div className={`glow-container-${identifier} glow-container`}>
      <article className={`glow-card glow-card-${identifier} h-fit cursor-pointer border border-[#2a2e5a] transition-all duration-300 relative bg-[#101123] text-gray-200 rounded-xl hover:border-transparent w-full`}>
        <div className="glows"></div>
        {children}
      </article>
    </div>
  );
};

export default GlowCard;
