import type { Metadata } from "next";
import { SiteFooter } from "../components/site-footer";
import { SiteHeader } from "../components/site-header";

export const metadata: Metadata = {
  title: "Terms of Service | Neo Cut Media",
  description:
    "Neo Cut Media terms of service for creative services, project delivery, revisions, payments, and usage.",
};

export default function TermsOfServicePage() {
  return (
    <main className="content-page">
      <SiteHeader />

      <section className="page-hero section legal-hero">
        <span>Terms of Service</span>
        <h1>Terms for working with Neo Cut Media.</h1>
        <p>
          These terms outline the general working relationship for content
          creation, branding, video, and creative support services.
        </p>
      </section>

      <section className="legal-content section">
        <h2>Services</h2>
        <p>
          Neo Cut Media provides creative services that may include strategy,
          branding support, design, video editing, motion graphics, content
          planning, and platform-ready asset delivery.
        </p>

        <h2>Project Scope</h2>
        <p>
          Each project should be guided by an agreed scope, timeline, deliverable
          list, and fee. Additional requests outside the agreed scope may require
          a revised timeline or additional cost.
        </p>

        <h2>Client Materials</h2>
        <p>
          Clients are responsible for having the rights to any footage, images,
          music, logos, brand assets, copy, references, and other materials they
          provide for use in a project.
        </p>

        <h2>Revisions</h2>
        <p>
          Revisions are handled according to the agreed project scope. Feedback
          should be clear, consolidated, and provided within a reasonable time so
          the project can stay on schedule.
        </p>

        <h2>Payment</h2>
        <p>
          Payment terms, deposits, milestones, and final delivery conditions
          should be confirmed before work begins. Final editable files or exports
          may be withheld until outstanding invoices are paid.
        </p>

        <h2>Contact</h2>
        <p>
          Questions about these terms can be sent to{" "}
          <a href="mailto:umair@neocutmedia.com">umair@neocutmedia.com</a>.
        </p>
      </section>

      <SiteFooter />
    </main>
  );
}
