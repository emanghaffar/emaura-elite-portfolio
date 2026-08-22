import { processSteps } from "@/data/site-data";
import Reveal from "./Reveal";

export default function Process() {
  return (
    <section className="section process-section">
      <div className="container">
        <div className="section-heading section-heading-split">
          <div>
            <span className="section-kicker">Creative process</span>
            <h2>A clear process from brief to delivery.</h2>
          </div>
          <p>
            Each stage is designed to keep the concept focused, the timeline visible
            and approvals easy to manage.
          </p>
        </div>

        <div className="process-grid">
          {processSteps.map((step, index) => (
            <Reveal delay={index * 80} key={step.number}>
              <article>
                <span>{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
