"use client";

import Image from "next/image";
import { PointerEvent, useRef } from "react";
import { ArrowUpRightIcon, SparkleIcon } from "./Icons";

export default function HeroMotion() {
  const sceneRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);
  const lastParticleAt = useRef(0);

  function createFairyParticle(
    event: PointerEvent<HTMLDivElement>,
    x: number,
    y: number,
  ) {
    const now = performance.now();
    if (now - lastParticleAt.current < 34) return;
    lastParticleAt.current = now;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const trail = trailRef.current;
    if (!trail) return;

    const particle = document.createElement("span");
    const size = 5 + Math.random() * 9;
    const driftX = -22 + Math.random() * 44;
    const driftY = -20 - Math.random() * 42;
    const rotation = Math.random() * 180;

    particle.className = Math.random() > 0.36
      ? "fairy-particle fairy-star"
      : "fairy-particle fairy-dot";

    particle.style.left = `${x}px`;
    particle.style.top = `${y}px`;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.setProperty("--fairy-x", `${driftX}px`);
    particle.style.setProperty("--fairy-y", `${driftY}px`);
    particle.style.setProperty("--fairy-r", `${rotation}deg`);

    trail.appendChild(particle);
    particle.addEventListener("animationend", () => particle.remove(), {
      once: true,
    });
  }

  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    const scene = sceneRef.current;
    if (!scene) return;

    const rect = scene.getBoundingClientRect();
    const relativeX = event.clientX - rect.left;
    const relativeY = event.clientY - rect.top;
    const x = relativeX / rect.width - 0.5;
    const y = relativeY / rect.height - 0.5;

    scene.style.setProperty("--portrait-x", `${x * 12}px`);
    scene.style.setProperty("--portrait-y", `${y * 12}px`);
    scene.style.setProperty("--portrait-rx", `${y * -2.4}deg`);
    scene.style.setProperty("--portrait-ry", `${x * 3}deg`);

    createFairyParticle(event, relativeX, relativeY);
  }

  function resetPointer() {
    const scene = sceneRef.current;
    if (!scene) return;

    scene.style.setProperty("--portrait-x", "0px");
    scene.style.setProperty("--portrait-y", "0px");
    scene.style.setProperty("--portrait-rx", "0deg");
    scene.style.setProperty("--portrait-ry", "0deg");
  }

  return (
    <div
      ref={sceneRef}
      className="portrait-hero-scene"
      onPointerMove={handlePointerMove}
      onPointerLeave={resetPointer}
      aria-label="Animated Emaura Creatives hero portrait"
    >
      <div ref={trailRef} className="fairy-trail-layer" aria-hidden="true" />

      <div className="portrait-purple-aura portrait-purple-aura-one" />
      <div className="portrait-purple-aura portrait-purple-aura-two" />
      <div className="portrait-orbit portrait-orbit-one" />
      <div className="portrait-orbit portrait-orbit-two" />

      <div className="portrait-hero-card">
        <div className="portrait-image-shell">
          <Image
            src="/images/hero-portrait-final.png"
            alt="Emaura Creatives content creator portrait"
            fill
            priority
            sizes="(max-width: 900px) 90vw, 42vw"
            className="portrait-image"
          />
          <div className="portrait-image-shade" />
        </div>

        <div className="portrait-top-label">
          <span>Creative portfolio</span>
          <span>UGC · Digital creative</span>
        </div>

        <div className="portrait-glass-card">
          <SparkleIcon />
          <span>
            <small>Verified portfolio</small>
            <strong>20+ brand collaborations</strong>
          </span>
        </div>

        <a className="portrait-work-link" href="#work">
          Explore work
          <ArrowUpRightIcon />
        </a>

        <span className="portrait-page-number">01</span>
      </div>
    </div>
  );
}
