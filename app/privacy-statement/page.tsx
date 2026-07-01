import type { Metadata } from "next";
import { SiteFooter } from "../components/site-footer";
import { SiteHeader } from "../components/site-header";

export const metadata: Metadata = {
  title: "Privacy Statement | Neo Cut Media",
  description:
    "Neo Cut Media privacy statement covering how contact details and project information are handled.",
};

export default function PrivacyStatementPage() {
  return (
    <main className="content-page">
      <SiteHeader />

      <section className="page-hero section legal-hero">
        <span>Privacy Statement</span>
        <h1>How we handle contact and project information.</h1>
        <p>
          This statement explains how Neo Cut Media collects and uses
          information shared through inquiries, project conversations, and
          creative work.
        </p>
      </section>

      <section className="legal-content section">
        <h2>Information We Collect</h2>
        <p>
          We may collect your name, business name, email address, phone number,
          social media links, project details, content requirements, files, and
          other information you choose to share with us.
        </p>

        <h2>How We Use Information</h2>
        <p>
          We use this information to respond to inquiries, prepare proposals,
          plan creative work, deliver services, manage project communication,
          and maintain business records.
        </p>

        <h2>Sharing Information</h2>
        <p>
          We do not sell personal information. We may share information with
          trusted service providers only when needed to operate the business,
          deliver work, process files, or comply with legal obligations.
        </p>

        <h2>Project Files</h2>
        <p>
          Files, brand assets, footage, references, and campaign materials shared
          with Neo Cut Media are used for the agreed project purpose unless a
          separate written agreement says otherwise.
        </p>

        <h2>Contact</h2>
        <p>
          Questions about this privacy statement can be sent to{" "}
          <a href="mailto:umair@neocutmedia.com">umair@neocutmedia.com</a>.
        </p>
      </section>

      <SiteFooter />
    </main>
  );
}
