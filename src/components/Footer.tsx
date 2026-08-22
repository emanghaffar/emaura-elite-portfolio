import { siteConfig } from "@/data/site-data";
import { ArrowUpRightIcon, SparkleIcon } from "./Icons";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-top">
        <div className="footer-brand">
          <span className="footer-mark">
            <SparkleIcon />
          </span>
          <div>
            <strong>{siteConfig.brandName}</strong>
            <p>UGC, product storytelling and digital creative work.</p>
          </div>
        </div>

        <nav className="footer-nav" aria-label="Footer navigation">
          <a href="#work">Work</a>
          <a href="#services">Services</a>
          <a href="#packages">Packages</a>
          <a href="#about">About</a>
        </nav>

        <a
          className="footer-link"
          href={siteConfig.instagramUrl}
          target="_blank"
          rel="noreferrer"
        >
          Instagram
          <ArrowUpRightIcon />
        </a>
      </div>

      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} {siteConfig.brandName}</span>
        <span>Self-employed UGC creator portfolio</span>
      </div>
    </footer>
  );
}
