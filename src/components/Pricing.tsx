import { pricingPackages } from "@/data/site-data";
import { ArrowUpRightIcon, CheckIcon, SparkleIcon } from "./Icons";
import Reveal from "./Reveal";

export default function Pricing() {
  return (
    <section className="section pricing-section" id="packages">
      <div className="container">
        <div className="section-heading centered-heading">
          <span className="section-kicker">Packages & rates</span>
          <h2>Choose the level of creative support your brand needs.</h2>
          <p>
            Every package has defined deliverables, production timing and usage terms
            so the collaboration stays clear from the beginning.
          </p>
        </div>

        <div className="pricing-grid">
          {pricingPackages.map((plan, index) => (
            <Reveal delay={index * 100} key={plan.name}>
              <article className={`pricing-card ${plan.featured ? "featured" : ""}`}>
                {plan.featured && (
                  <span className="popular-badge">
                    <SparkleIcon />
                    Most popular
                  </span>
                )}

                <span className="plan-index">0{index + 1}</span>
                <span className="plan-name">{plan.name}</span>
                <h3>{plan.price}</h3>
                <p className="plan-audience">{plan.audience}</p>

                <ul className="plan-features">
                  {plan.features.map((feature) => (
                    <li key={feature}>
                      <CheckIcon />
                      {feature}
                    </li>
                  ))}
                </ul>

                {"angles" in plan && plan.angles && (
                  <div className="campaign-angles">
                    <strong>Three campaign angles</strong>
                    {plan.angles.map((angle) => (
                      <span key={angle}>{angle}</span>
                    ))}
                  </div>
                )}

                <div className="price-summary">
                  <span>
                    <small>Original value</small>
                    <strong>{plan.originalValue}</strong>
                  </span>
                  <span>
                    <small>Client saving</small>
                    <strong>{plan.saving}</strong>
                  </span>
                </div>

                <a className="package-button" href="#contact">
                  {plan.button}
                  <ArrowUpRightIcon />
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
