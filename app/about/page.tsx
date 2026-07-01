import type { Metadata } from "next";
import { ArrowRight, Clapperboard, Layers, Rocket, Sparkles } from "lucide-react";
import { SiteFooter } from "../components/site-footer";
import { SiteHeader } from "../components/site-header";

export const metadata: Metadata = {
  title: "About Us | Neo Cut Media",
  description:
    "Learn about Neo Cut Media, a content creation, branding, and video studio helping growing brands build consistent creative systems.",
};

const principles = [
  {
    title: "Clear Strategy",
    description:
      "We start by understanding the brand, audience, offer, and platform before shaping content ideas.",
    icon: Sparkles,
  },
  {
    title: "Consistent Creative",
    description:
      "Every edit, graphic, and campaign asset is built to feel connected to the same visual direction.",
    icon: Layers,
  },
  {
    title: "Platform-Ready Output",
    description:
      "We prepare content for the places it needs to live, from social channels and websites to ads and launch campaigns.",
    icon: Clapperboard,
  },
  {
    title: "Growth Support",
    description:
      "Our work is designed to help brands keep publishing polished content without slowing the team down.",
    icon: Rocket,
  },
];

export default function AboutPage() {
  return (
    <main className="content-page">
      <SiteHeader />

      <section className="page-hero section">
        <span>About Us</span>
        <h1>Creative support for brands that need sharper content and steadier execution.</h1>
        <p>
          Neo Cut Media is a content creation, branding, and video studio for
          founders, businesses, and creative teams. We help turn scattered ideas
          into polished assets with a clear visual direction, clean edits, and a
          practical content workflow.
        </p>
        <a className="button button-dark primary-button" href="/contact">
          Work With Us
          <ArrowRight size={18} />
        </a>
      </section>

      <section className="page-section section">
        <div className="section-heading">
          <span>How We Think</span>
          <h2>Built around strategy, production, and delivery.</h2>
          <p>
            We support the full content pipeline so your brand can move from
            planning to publishing with fewer gaps between each step.
          </p>
        </div>

        <div className="feature-grid">
          {principles.map((item) => {
            const Icon = item.icon;

            return (
              <article className="feature-card" key={item.title}>
                <div className="card-icon" aria-hidden="true">
                  <Icon size={22} />
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="page-section section">
        <div className="statement-panel">
          <span>What We Create</span>
          <h2>Content systems that look polished, feel consistent, and are ready to use.</h2>
          <p>
            Our work can include content strategy, branding support, short-form
            and long-form video editing, motion graphics, social media assets,
            campaign creative, thumbnails, captions, and platform-ready exports.
          </p>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
