"use client";

import { FormEvent, useState } from "react";
import { ArrowUpRightIcon } from "./Icons";

export default function ContactForm() {
  const [message, setMessage] = useState("");
function handleSubmit(event: FormEvent<HTMLFormElement>) {
  event.preventDefault();

  const form = new FormData(event.currentTarget);

  const name = String(form.get("name") ?? "");
  const email = String(form.get("email") ?? "");
  const brand = String(form.get("brand") ?? "");
  const packageName = String(form.get("package") ?? "");
  const details = String(form.get("details") ?? "");

  const subject = encodeURIComponent(
    `Project Inquiry from ${name}${brand ? ` - ${brand}` : ""}`
  );

  const body = encodeURIComponent(
`Name: ${name}
Email: ${email}
Brand / Company: ${brand}
Package: ${packageName}

Project Details:
${details}`
  );

  window.location.href =
    `mailto:emanghaffar57@gmail.com?subject=${subject}&body=${body}`;

  setMessage("Opening your email app...");
}

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="field-row">
        <label>
          Your name
          <input
            type="text"
            name="name"
            autoComplete="name"
            maxLength={80}
            required
            placeholder="Name"
          />
        </label>

        <label>
          Brand / company
          <input
            type="text"
            name="brand"
            autoComplete="organization"
            maxLength={100}
            placeholder="Brand name"
          />
        </label>
      </div>

      <label>
        Work email
        <input
          type="email"
          name="email"
          autoComplete="email"
          maxLength={150}
          required
          placeholder="you@brand.com"
        />
      </label>

      <label>
        Package or service
        <select name="package" defaultValue="">
          <option value="" disabled>
            Select an option
          </option>
          <option>Starter Content Package</option>
          <option>Conversion Campaign Bundle</option>
          <option>Monthly Content Package</option>
          <option>Custom UGC project</option>
        </select>
      </label>

      <label>
        Project details
        <textarea
          name="details"
          rows={5}
          maxLength={1500}
          required
          placeholder="Tell me about the product, deliverables, deadline and usage."
        />
      </label>

      <button className="button contact-submit" type="submit">
        Send project inquiry
        <ArrowUpRightIcon />
      </button>

      {message && (
        <p className="form-message" role="status">
          {message}
        </p>
      )}
    </form>
  );
}
