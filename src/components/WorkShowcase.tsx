"use client";

import { useRef, useState } from "react";
import { portfolioItems, siteConfig } from "@/data/site-data";
import {
  ArrowUpRightIcon,
  MutedIcon,
  PauseIcon,
  PlayIcon,
  VolumeIcon,
} from "./Icons";

export default function WorkShowcase() {
  const refs = useRef<Record<number, HTMLVideoElement | null>>({});
  const [playingIds, setPlayingIds] = useState<number[]>([]);
  const [soundId, setSoundId] = useState<number | null>(null);

  function setPlaying(id: number, playing: boolean) {
    setPlayingIds((current) =>
      playing
        ? Array.from(new Set([...current, id]))
        : current.filter((value) => value !== id),
    );
  }

  function play(id: number) {
    const video = refs.current[id];
    if (!video) return;
    video.volume = 0.25;
    video.play().then(() => setPlaying(id, true)).catch(() => undefined);
  }

  function pause(id: number) {
    const video = refs.current[id];
    if (!video) return;
    video.pause();
    setPlaying(id, false);
  }

  function togglePlay(id: number) {
    const video = refs.current[id];
    if (!video) return;
    if (video.paused) play(id);
    else pause(id);
  }

  function toggleSound(id: number) {
    const target = refs.current[id];
    if (!target) return;

    Object.entries(refs.current).forEach(([key, video]) => {
      if (video && Number(key) !== id) video.muted = true;
    });

    const shouldEnable = target.muted;
    target.volume = 0.25;
    target.muted = !shouldEnable;
    setSoundId(shouldEnable ? id : null);
    play(id);
  }

  return (
    <section className="section work-section" id="work">
      <div className="container">
        <div className="section-heading section-heading-split">
          <div>
            <span className="section-kicker">Selected work</span>
            <h2>Creative made to stop the scroll.</h2>
          </div>
          <div>
            <p>
              Hover to preview on desktop. On mobile, use the play and sound controls.
              Video volume is intentionally limited to 25% for a comfortable portfolio
              experience.
            </p>
            <a
              className="text-link"
              href={siteConfig.instagramUrl}
              target="_blank"
              rel="noreferrer"
            >
              View complete Instagram portfolio
              <ArrowUpRightIcon />
            </a>
          </div>
        </div>

        <div className="work-grid">
          {portfolioItems.map((item, index) => {
            const isPlaying = playingIds.includes(item.id);
            const hasSound = soundId === item.id;

            return (
              <article
                className="work-card"
                key={item.id}
                onMouseEnter={() => play(item.id)}
                onMouseLeave={() => pause(item.id)}
              >
                <div className="work-media">
                  <video
                    ref={(video) => {
                      refs.current[item.id] = video;
                    }}
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    poster={item.poster}
                  >
                    <source src={item.video} type="video/mp4" />
                  </video>

                  <div className="work-shade" />
                  <span className="work-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="work-category">{item.category}</span>

                  <div className="video-controls">
                    <button
                      type="button"
                      onClick={() => togglePlay(item.id)}
                      aria-label={isPlaying ? "Pause video" : "Play video"}
                    >
                      {isPlaying ? <PauseIcon /> : <PlayIcon />}
                    </button>
                    <button
                      type="button"
                      onClick={() => toggleSound(item.id)}
                      aria-label={hasSound ? "Mute video" : "Play video with sound"}
                    >
                      {hasSound ? <VolumeIcon /> : <MutedIcon />}
                    </button>
                  </div>
                </div>

                <div className="work-content">
                  <span>{item.brand}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </article>
            );
          })}
        </div>

        <div className="asset-notice">
          <strong>Portfolio media note</strong>
          <p>
            These animated motion previews were created from the Instagram screenshots
            currently available. Replace the files inside <code>public/videos</code> with
            your original videos using the same filenames for the final portfolio.
          </p>
        </div>
      </div>
    </section>
  );
}
