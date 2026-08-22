import { siteConfig } from "@/data/site-data";
import { ArrowUpRightIcon, InstagramIcon, SparkleIcon } from "./Icons";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="container contact-grid">
        <div className="contact-copy">
          <span className="section-kicker section-kicker-gold">
            Start a collaboration
          </span>
          <h2>Let’s turn your product into content people remember.</h2>
          <p>
            Share the product, campaign objective, preferred package and deadline. The
            final quote will confirm deliverables, usage and production timing.
          </p>

          <div className="contact-socials">
            <a href={siteConfig.instagramUrl} target="_blank" rel="noreferrer">
              <InstagramIcon />
              <span>
                <small>Instagram</small>
                <strong>{siteConfig.handle}</strong>
              </span>
              <ArrowUpRightIcon />
            </a>

            <div className="contact-status">
              <SparkleIcon />
              <span>
                <small>Availability</small>
                <strong>Remote brand collaborations</strong>
              </span>
            </div>
          </div>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
