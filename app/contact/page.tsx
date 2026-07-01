import type { Metadata } from "next";
import { ArrowRight, Mail, Phone } from "lucide-react";
import { SiteFooter } from "../components/site-footer";
import { SiteHeader } from "../components/site-header";

export const metadata: Metadata = {
  title: "Contact Us | Neo Cut Media",
  description:
    "Contact Neo Cut Media for content creation, branding, video editing, motion graphics, and creative support.",
};

export default function ContactPage() {
  return (
    <main className="content-page">
      <SiteHeader />

      <section className="page-hero section">
        <span>Contact Us</span>
        <h1>Tell us what you want to create.</h1>
        <p>
          Share your goals, timeline, and the type of content support you need.
          We will review the brief and help map the right next step.
        </p>
      </section>

      <section className="page-section section">
        <div className="contact-layout">
          <div className="contact-card">
            <div className="card-icon" aria-hidden="true">
              <Phone size={22} />
            </div>
            <h2>Phone</h2>
            <a href="tel:+2679712870">+2679712870</a>
          </div>

          <div className="contact-card">
            <div className="card-icon" aria-hidden="true">
              <Mail size={22} />
            </div>
            <h2>Email</h2>
            <a href="mailto:umair@neocutmedia.com">umair@neocutmedia.com</a>
          </div>
        </div>
      </section>

      <section className="closing-section compact-closing">
        <div className="section closing-layout">
          <div>
            <h2>Ready for a cleaner content workflow?</h2>
          </div>
          <div className="closing-copy">
            <p>
              Send a quick message with your brand, content needs, and deadline.
              We will help you choose a practical production path.
            </p>
            <a className="button button-dark closing-button" href="mailto:umair@neocutmedia.com">
              Email Neo Cut Media
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
