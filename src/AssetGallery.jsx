import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Autoplay,
  EffectCoverflow,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "./AssetGallery.css";

// IMPORT IMAGES FROM src/assets as objects
import img01 from "./assets/kc-college-01.jpg";
import img1 from "./assets/kc-college-10.jpg";
import img02 from "./assets/kc-college-02.jpg";
import img03 from "./assets/kc-college-03.jpg";
import img04 from "./assets/kc-college-04.jpg";
import img05 from "./assets/kc-college-05.jpg";
import img06 from "./assets/kc-college-06.jpg";
import img07 from "./assets/kc-college-07.jpg";
import img08 from "./assets/kc-college-08.jpg";
import img09 from "./assets/kc-college-09.jpg";

const assets = [
  { src: img01, title: "Campus A" },
  { src: img1, title: "Student Life" },
  { src: img02, title: "Campus B" },
  { src: img03, title: "Library" },
  { src: img04, title: "Lecture Hall" },
  { src: img05, title: "Lab" },
  { src: img06, title: "Auditorium" },
  { src: img07, title: "Courtyard" },
  { src: img08, title: "Sports Ground" },
  { src: img09, title: "Cafeteria" },
];

export default function AssetGallery() {
  const containerRef = useRef(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    let raf = null;

    function handleMove(e) {
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      const cx = x - 0.5;
      const cy = y - 0.5;

      if (raf) cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        el.style.setProperty("--mx", (cx * 2).toFixed(3));
        el.style.setProperty("--my", (cy * 2).toFixed(3));
      });
    }

    function handleLeave() {
      if (raf) cancelAnimationFrame(raf);
      el.style.setProperty("--mx", "0");
      el.style.setProperty("--my", "0");
    }

    el.addEventListener("mousemove", handleMove);
    el.addEventListener("mouseleave", handleLeave);
    el.addEventListener("touchmove", handleMove, { passive: true });
    el.addEventListener("touchend", handleLeave);

    return () => {
      el.removeEventListener("mousemove", handleMove);
      el.removeEventListener("mouseleave", handleLeave);
      el.removeEventListener("touchmove", handleMove);
      el.removeEventListener("touchend", handleLeave);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section className="asset-gallery-section" ref={containerRef}>
      <div className="gallery-bg">
        <div className="blob blob-1" aria-hidden></div>
        <div className="blob blob-2" aria-hidden></div>
        <svg className="stars" viewBox="0 0 200 200" aria-hidden>
          <g fill="white" opacity="0.14">
            <circle cx="20" cy="30" r="1.6" />
            <circle cx="80" cy="60" r="1.2" />
            <circle cx="140" cy="20" r="1.4" />
            <circle cx="170" cy="100" r="1.0" />
          </g>
        </svg>
      </div>

      <div className="gallery-header">
        <h2 className="gallery-title">Campus Gallery</h2>
        <p className="gallery-subtitle">Snapshots from campus life and facilities</p>
      </div>

      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        speed={800}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3200, disableOnInteraction: false }}
        slidesPerView={1}
        breakpoints={{ 640: { slidesPerView: 1.4 }, 912: { slidesPerView: 2.1 }, 1200: { slidesPerView: 3 } }}
        coverflowEffect={{ rotate: 30, depth: 140, modifier: 1 }}
        className="gallery-swiper"
      >
        {assets.map((a, i) => (
          <SwiperSlide key={i} className="asset-slide">
            <div
              className="image-wrapper"
              style={{
                transform: `translate3d(calc(var(--mx) * ${8 + (i % 3)}px), calc(var(--my) * ${6 + (i % 2) * 4}px), 0)`,
              }}
            >
              <img src={a.src} alt={`Asset ${i + 1}`} className="asset-image" />
              <div className="glow" aria-hidden />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
