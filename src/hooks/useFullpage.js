import { useState, useEffect, useCallback, useRef } from 'react';

/**
 * Fullpage scroll hook: intercepts wheel/touch/keyboard events
 * and programmatically scrolls to the next/previous section.
 */
export function useFullpage(sectionIds) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const indexRef = useRef(0);
  const isScrolling = useRef(false);
  const COOLDOWN = 1200; // ms between allowed scrolls

  const scrollToIndex = useCallback((index) => {
    if (index < 0 || index >= sectionIds.length) return;
    if (isScrolling.current) return;

    isScrolling.current = true;
    indexRef.current = index;
    setCurrentIndex(index);

    const el = document.getElementById(sectionIds[index]);
    if (el) {
      window.scrollTo({ top: el.offsetTop, behavior: 'smooth' });
    }

    setTimeout(() => {
      isScrolling.current = false;
    }, COOLDOWN);
  }, [sectionIds]);

  const scrollToSection = useCallback((id) => {
    const idx = sectionIds.indexOf(id);
    if (idx !== -1) scrollToIndex(idx);
  }, [sectionIds, scrollToIndex]);

  useEffect(() => {
    // ---- Wheel ----
    const handleWheel = (e) => {
      if (window.innerWidth < 768) return; // Allow native scroll on mobile
      e.preventDefault();
      if (isScrolling.current) return;
      const direction = e.deltaY > 0 ? 1 : -1;
      scrollToIndex(indexRef.current + direction);
    };

    // ---- Touch ----
    let touchStartY = 0;
    const handleTouchStart = (e) => {
      if (window.innerWidth < 768) return;
      touchStartY = e.touches[0].clientY;
    };
    const handleTouchMove = (e) => {
      if (window.innerWidth < 768) return;
      e.preventDefault(); // prevent native scroll on touch
    };
    const handleTouchEnd = (e) => {
      if (window.innerWidth < 768) return;
      if (isScrolling.current) return;
      const diff = touchStartY - e.changedTouches[0].clientY;
      if (Math.abs(diff) > 50) {
        scrollToIndex(indexRef.current + (diff > 0 ? 1 : -1));
      }
    };

    // ---- Keyboard ----
    const handleKeyDown = (e) => {
      if (window.innerWidth < 768) return;
      if (['ArrowDown', 'PageDown', 'Space'].includes(e.code)) {
        e.preventDefault();
        scrollToIndex(indexRef.current + 1);
      } else if (['ArrowUp', 'PageUp'].includes(e.code)) {
        e.preventDefault();
        scrollToIndex(indexRef.current - 1);
      } else if (e.code === 'Home') {
        e.preventDefault();
        scrollToIndex(0);
      } else if (e.code === 'End') {
        e.preventDefault();
        scrollToIndex(sectionIds.length - 1);
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: false });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [scrollToIndex, sectionIds]);

  return {
    currentIndex,
    activeSection: sectionIds[currentIndex],
    scrollToSection,
    scrollToIndex,
  };
}
