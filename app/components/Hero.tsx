"use client";

import { useEffect, useRef, useState } from "react";
import { Icon } from "./Icons";

export function Hero({ onTextShow }: { onTextShow?: () => void }) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    // Safety net: if autoplay is blocked or the video fails, reveal text after ~4s anyway.
    const safety = setTimeout(() => setShowText(true), 4500);

    const video = videoRef.current;
    if (!video) return () => clearTimeout(safety);

    const onTimeUpdate = () => {
      if (video.currentTime >= 3) {
        setShowText(true);
        clearTimeout(safety);
        video.removeEventListener("timeupdate", onTimeUpdate);
      }
    };
    video.addEventListener("timeupdate", onTimeUpdate);

    return () => {
      clearTimeout(safety);
      video.removeEventListener("timeupdate", onTimeUpdate);
    };
  }, []);

  // Notify the page (so the navbar can fade its blur in alongside the text)
  useEffect(() => {
    if (showText) onTextShow?.();
  }, [showText, onTextShow]);

  return (
    <header className={`hero${showText ? " show-text" : ""}`} id="top">
      <video
        ref={videoRef}
        className="hero-video"
        src="https://suxjqmfpwkkmrvhdkznr.supabase.co/storage/v1/object/sign/Videos%20de%20presentacion/Video%20Alfa%20Hero.webm?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV84ZjEyNTRiYi05OTJmLTRhMWQtOTI0MS05NDVkYTRmZWQ5YzYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJWaWRlb3MgZGUgcHJlc2VudGFjaW9uL1ZpZGVvIEFsZmEgSGVyby53ZWJtIiwiaWF0IjoxNzc3ODY1NzM2LCJleHAiOjI0MDg1ODU3MzZ9.TqSiRJYrN1Gjxfc9KP4wONu_I2ybrp-Av0Q6vBESM-8"
        poster="/assets/hero.jpeg"
        autoPlay
        muted
        playsInline
        preload="metadata"
        aria-hidden
      />
      <div className="text-scrim" />

      <div className="content">
        <div className="eyebrow light">
          <span className="dot" /> Publicidad exterior · Caracas, Venezuela
        </div>
        <h1>
          <span className="line-wrap">
            <span className="line-inner">Donde la ciudad</span>
          </span>
          <span className="line-wrap">
            <span className="line-inner">
              mira, está <span className="or">tu marca</span>.
            </span>
          </span>
        </h1>
        <p className="sub">
          Diseñamos, producimos e instalamos vallas, pantallas LED y mobiliario
          urbano en las avenidas con mayor tráfico del país. Veinte años haciendo
          marcas imposibles de ignorar.
        </p>
        <div className="ctas">
          <a className="btn btn-primary" href="#portafolio">
            Ver portafolio <Icon.arrow width="14" height="14" />
          </a>
          <a className="btn btn-secondary" href="#cotiza">
            Cotizar
          </a>
        </div>
      </div>

      <div className="badge badge-left">
        <div className="num">+20</div>
        <div className="lbl">Años de oficio</div>
      </div>
    </header>
  );
}
