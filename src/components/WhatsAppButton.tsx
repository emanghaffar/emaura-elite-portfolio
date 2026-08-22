"use client";

import { siteConfig } from "@/data/site-data";

function WhatsAppIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M20.5 11.7a8.5 8.5 0 0 1-12.6 7.4L3 20.4l1.3-4.7A8.5 8.5 0 1 1 20.5 11.7Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M8 7.8c.3-.4.6-.5 1-.5h.6c.3 0 .5.2.6.4l1 2.2c.1.3.1.6-.1.8l-.8 1c.8 1.6 2.1 2.9 3.7 3.7l1-.8c.2-.2.5-.2.8-.1l2.2 1c.3.1.5.3.5.6v.6c0 .4-.2.8-.5 1-.7.4-1.5.6-2.3.5-4.7-.4-8.4-4.1-8.8-8.8-.1-.6.2-1.2.5-1.6Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function WhatsAppButton() {
  const whatsappUrl = `https://wa.me/${
    siteConfig.whatsappNumber
  }?text=${encodeURIComponent(siteConfig.whatsappMessage)}`;

  return (
    <a
      className="whatsapp-float"
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact Emaura Creatives on WhatsApp"
    >
      <span className="whatsapp-icon">
        <WhatsAppIcon />
      </span>

      <span className="whatsapp-copy">
        <small>Quick contact</small>
        <strong>WhatsApp</strong>
      </span>

      <span className="whatsapp-status" aria-hidden="true" />
    </a>
  );
}