"use client";

import { useEffect } from "react";
import { assetUrl, mediaKind } from "../portfolio-data";

type ProjectMediaGalleryProps = {
  media: string[];
  projectTitle: string;
};

export function ProjectMediaGallery({ media, projectTitle }: ProjectMediaGalleryProps) {
  useEffect(() => {
    const videos = Array.from(
      document.querySelectorAll<HTMLVideoElement>("[data-autoplay-video]"),
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target as HTMLVideoElement;

          if (entry.isIntersecting) {
            video.play().catch(() => undefined);
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.45 },
    );

    videos.forEach((video) => observer.observe(video));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="project-media-grid">
      {media.map((asset) => {
        const src = assetUrl(asset);

        return (
          <figure className="project-media-card" key={asset}>
            {mediaKind(asset) === "video" ? (
              <video
                src={src}
                controls
                data-autoplay-video
                loop
                muted
                playsInline
                preload="metadata"
              />
            ) : (
              <img src={src} alt={`${projectTitle} portfolio asset`} loading="lazy" />
            )}
          </figure>
        );
      })}
    </div>
  );
}
