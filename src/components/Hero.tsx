import { siteConfig, stats } from "@/data/site-data";
import { ArrowUpRightIcon, InstagramIcon, SparkleIcon } from "./Icons";
import HeroMotion from "./HeroMotion";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-light hero-light-one" />
      <div className="hero-light hero-light-two" />

      <div className="container hero-grid">
        <div className="hero-copy">
          <div className="eyebrow">
            <SparkleIcon />
            UGC creator · Product storyteller · Digital creative
          </div>

          <h1>
            Content that feels <em>human.</em>
            <br />
            Creative that <span>sells.</span>
          </h1>

          <p>{siteConfig.introduction}</p>

          <div className="hero-actions">
            <a className="button button-primary" href="#work">
              Explore selected work
              <ArrowUpRightIcon />
            </a>
            <a
              className="button button-secondary"
              href={siteConfig.instagramUrl}
              target="_blank"
              rel="noreferrer"
            >
              <InstagramIcon />
              Instagram
            </a>
          </div>

          <div className="availability">
            <span />
            {siteConfig.location}
          </div>
        </div>

        <HeroMotion />
      </div>

      <div className="container stats-strip" aria-label="Creator statistics">
        {stats.map((stat) => (
          <div className="stat-item" key={stat.label}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
