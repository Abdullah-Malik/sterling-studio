import type { Metadata } from "next";
import { SiteFooter } from "../components/site-footer";
import { SiteHeader } from "../components/site-header";

export const metadata: Metadata = {
  title: "Media Release & Usage Rights | Neo Cut Media",
  description:
    "Neo Cut Media media release and usage rights information for footage, images, testimonials, project assets, and portfolio use.",
};

export default function MediaReleasePage() {
  return (
    <main className="content-page">
      <SiteHeader />

      <section className="page-hero section legal-hero">
        <span>Media Release</span>
        <h1>Media usage, permissions, and portfolio rights.</h1>
        <p>
          This page explains how media, client materials, and completed work may
          be used when Neo Cut Media creates content for a project.
        </p>
      </section>

      <section className="legal-content section">
        <h2>Client-Provided Media</h2>
        <p>
          By providing footage, images, audio, logos, testimonials, or other
          materials, the client confirms they have permission for Neo Cut Media
          to use those materials for the agreed project.
        </p>

        <h2>Talent and Location Permissions</h2>
        <p>
          Clients are responsible for securing any required permissions from
          people, locations, venues, brands, or third parties appearing in
          supplied materials unless otherwise agreed in writing.
        </p>

        <h2>Usage of Completed Work</h2>
        <p>
          Completed deliverables may be used by the client for the agreed brand,
          campaign, platform, or business purpose. Broader usage, resale, or
          transfer may require written approval or a separate license.
        </p>

        <h2>Portfolio Display</h2>
        <p>
          Unless a project is confidential or restricted by written agreement,
          Neo Cut Media may reference completed work in its portfolio, proposals,
          social media, or promotional materials.
        </p>

        <h2>Contact</h2>
        <p>
          Media release questions can be sent to{" "}
          <a href="mailto:umair@neocutmedia.com">umair@neocutmedia.com</a>.
        </p>
      </section>

      <SiteFooter />
    </main>
  );
}
