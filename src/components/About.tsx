import Image from "next/image";
import { creatorSkills, siteConfig } from "@/data/site-data";
import { CodeIcon, InstagramIcon, SparkleIcon } from "./Icons";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section className="section about-section" id="about">
      <div className="container about-grid">
        <Reveal className="about-visual">
          <div className="about-frame">
            <Image
              src="/images/instagram-profile.png"
              alt="Emaura Creatives Instagram profile"
              fill
              sizes="(max-width: 900px) 82vw, 38vw"
              className="about-image"
            />
            <div className="about-frame-overlay" />
          </div>

          <div className="experience-card">
            <strong>2+</strong>
            <span>Years of hands-on experience</span>
          </div>

          <div className="developer-card">
            <CodeIcon />
            <span>
              <small>Creative + technical</small>
              <strong>Web & mobile development</strong>
            </span>
          </div>
        </Reveal>

        <Reveal className="about-copy" delay={120}>
          <span className="section-kicker section-kicker-gold">
            About the creator
          </span>
          <h2>Creativity supported by technical thinking.</h2>

          <p className="about-lead">
            I’m {siteConfig.creatorName}, a self-employed UGC creator with more than
            two years of hands-on experience creating product content for modern
            brands.
          </p>

          <p>
            Alongside UGC creation, I also have practical experience in web development
            and mobile application development. I work with VS Code and GitHub, which
            helps me approach content, digital presentation and client projects with a
            structured, detail-focused mindset.
          </p>

          <div className="skills-cloud">
            {creatorSkills.map((skill) => (
              <span key={skill}>
                <SparkleIcon />
                {skill}
              </span>
            ))}
          </div>

          <a
            className="button button-outline-light"
            href={siteConfig.instagramUrl}
            target="_blank"
            rel="noreferrer"
          >
            <InstagramIcon />
            Follow {siteConfig.handle}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
