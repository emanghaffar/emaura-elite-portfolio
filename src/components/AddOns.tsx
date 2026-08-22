import { addOns } from "@/data/site-data";
import { ArrowUpRightIcon } from "./Icons";

export default function AddOns() {
  return (
    <section className="addons-section">
      <div className="container addons-shell">
        <div className="addons-heading">
          <div>
            <span className="section-kicker section-kicker-gold">
              Optional add-ons
            </span>
            <h2>Extend the package when your campaign needs more.</h2>
          </div>
          <p>
            Add-ons are quoted with the selected package and confirmed before
            production begins.
          </p>
        </div>

        <div className="addons-list">
          {addOns.map((addOn, index) => (
            <article key={addOn.item}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{addOn.item}</strong>
              <p>{addOn.price}</p>
              <ArrowUpRightIcon />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
