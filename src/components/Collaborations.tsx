import { collaborations } from "@/data/site-data";
import Reveal from "./Reveal";
import { ArrowUpRightIcon } from "./Icons";

const repeated = [...collaborations, ...collaborations];

type Brand = (typeof collaborations)[number];

function BrandTile({
  brand,
  index,
  alternate = false,
  direction,
}: {
  brand: Brand;
  index: number;
  alternate?: boolean;
  direction: "up" | "down";
}) {
  const className = [
    "brand-tile",
    alternate ? "brand-tile-alt" : "",
    brand.status === "pending" ? "brand-tile-pending" : "",
  ]
    .filter(Boolean)
    .join(" ");

  const content = (
    <>
      <span>
        {String((index % collaborations.length) + 1).padStart(2, "0")}
      </span>
      <div>
        <strong>{brand.name}</strong>
        <small>{brand.handle || brand.category}</small>
        <small
          className={`brand-status ${
            brand.status === "pending" ? "pending" : ""
          }`}
        >
          {brand.status === "pending"
            ? "Confirmation pending"
            : brand.status === "verified-note"
              ? "Product content verified"
              : "Verified collaboration"}
        </small>
      </div>
      {brand.url && <ArrowUpRightIcon className="brand-arrow" />}
    </>
  );

  if (brand.url) {
    return (
      <a
        className={className}
        href={brand.url}
        target="_blank"
        rel="noreferrer"
        aria-label={`Open ${brand.name} on Instagram`}
        key={`${direction}-${brand.name}-${index}`}
      >
        {content}
      </a>
    );
  }

  return (
    <article className={className} key={`${direction}-${brand.name}-${index}`}>
      {content}
    </article>
  );
}

export default function Collaborations() {
  return (
    <section className="collaboration-section">
      <div className="container collaboration-grid">
        <Reveal className="collaboration-copy">
          <span className="section-kicker section-kicker-gold">
            Collaborate with
          </span>

          <h2>A growing portfolio of brand collaborations.</h2>

          <p>
            The directory now includes all 20 verified brand accounts from your
            spreadsheet, plus three visible brand names whose Instagram accounts still
            need confirmation. Hover over the moving directory to pause it, or select a
            verified brand to open its Instagram profile.
          </p>

          <div className="collaboration-summary" aria-label="Collaboration totals">
            <span>
              <strong>20</strong>
              Verified brands
            </span>
            <span>
              <strong>3</strong>
              Pending confirmation
            </span>
          </div>

          <a href="#contact" className="text-link-light">
            Build a campaign together
            <ArrowUpRightIcon />
          </a>
        </Reveal>

        <div className="vertical-marquee" aria-label="Brand collaborations">
          <div className="marquee-mask">
            <div className="marquee-column marquee-up">
              {repeated.map((brand, index) => (
                <BrandTile
                  brand={brand}
                  index={index}
                  direction="up"
                  key={`up-${brand.name}-${index}`}
                />
              ))}
            </div>
          </div>

          <div className="marquee-mask">
            <div className="marquee-column marquee-down">
              {repeated.map((brand, index) => (
                <BrandTile
                  brand={brand}
                  index={index}
                  alternate
                  direction="down"
                  key={`down-${brand.name}-${index}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
