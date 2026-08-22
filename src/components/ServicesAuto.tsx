"use client";

import { useEffect, useState } from "react";
import { services } from "@/data/site-data";
import { ArrowUpRightIcon, CheckIcon } from "./Icons";

const intervalMs = 4800;

export default function ServicesAuto() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeService = services[activeIndex];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % services.length);
    }, intervalMs);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="section services-section" id="services">
      <div className="container">
        <div className="section-heading section-heading-split services-heading">
          <div>
            <span className="section-kicker section-kicker-gold">Services</span>
            <h2>One creator. Multiple content angles.</h2>
          </div>
          <p>
            The service experience automatically rotates through every content format.
            Select any option to explore it immediately.
          </p>
        </div>

        <div className="service-automation">
          <div className="service-selector" role="tablist" aria-label="UGC services">
            {services.map((service, index) => (
              <button
                key={service.number}
                type="button"
                role="tab"
                aria-selected={activeIndex === index}
                className={activeIndex === index ? "active" : ""}
                onClick={() => setActiveIndex(index)}
              >
                <span>{service.number}</span>
                <div>
                  <strong>{service.title}</strong>
                  <small>{service.short}</small>
                </div>
                <ArrowUpRightIcon />
                {activeIndex === index && (
                  <span
                    key={`progress-${activeIndex}`}
                    className="service-progress"
                    style={{ animationDuration: `${intervalMs}ms` }}
                  />
                )}
              </button>
            ))}
          </div>

          <article className="service-stage" key={activeService.number}>
            <span className="service-stage-number">{activeService.number}</span>
            <span className="service-stage-label">{activeService.short}</span>
            <h3>{activeService.title}</h3>
            <p>{activeService.description}</p>
            <ul>
              {activeService.deliverables.map((deliverable) => (
                <li key={deliverable}>
                  <CheckIcon />
                  {deliverable}
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}
