import React, { useState, useCallback } from "react";

const TOTAL_SLIDES = 18;

const slides = Array.from({ length: TOTAL_SLIDES }, (_, i) => {
  const num = String(i + 1).padStart(2, "0");
  return `/images/work-experience-slides/slide-${num}.webp`;
});

export function SlideCarousel() {
  const [current, setCurrent] = useState(0);

  const prev = useCallback(
    () => setCurrent((c) => (c === 0 ? slides.length - 1 : c - 1)),
    []
  );
  const next = useCallback(
    () => setCurrent((c) => (c === slides.length - 1 ? 0 : c + 1)),
    []
  );

  return (
    <div className="slide-carousel">
      <div className="slide-carousel-viewport">
        <button
          className="slide-carousel-arrow slide-carousel-arrow-left"
          onClick={prev}
          aria-label="Previous slide"
        >
          &#8249;
        </button>
        <img
          src={slides[current]}
          alt={`Slide ${current + 1} of ${slides.length}`}
          className="slide-carousel-image"
          draggable={false}
        />
        <button
          className="slide-carousel-arrow slide-carousel-arrow-right"
          onClick={next}
          aria-label="Next slide"
        >
          &#8250;
        </button>
      </div>
      <div className="slide-carousel-pagination">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`slide-carousel-dot${i === current ? " active" : ""}`}
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
      <div className="slide-carousel-counter">
        {current + 1} / {slides.length}
      </div>
    </div>
  );
}
