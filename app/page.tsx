"use client";

import {
  ArrowRight,
  Building2,
  Clapperboard,
  Clock,
  Film,
  Layers,
  Menu,
  MessageSquare,
  Play,
  Rocket,
  Scissors,
  ShieldCheck,
  Sparkles,
  UploadCloud,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";

const proofItems = [
  "10M+ views across client videos",
  "Clean drafts ready to review",
  "Made for brands, founders, and creators",
];

const bottlenecks = [
  {
    pain:
      "You spend hours trimming clips, fixing audio, adjusting colors, and putting the whole video together.",
    solution:
      "We handle the full edit and send back clean, polished videos that are ready to share.",
  },
  {
    pain:
      "Your videos can feel slow, unclear, or hard to watch, so people leave before your message lands.",
    solution:
      "We shape the pacing, sound, visuals, and opening hook so your content keeps people watching.",
  },
];

const services = [
  {
    title: "Short-Form Videos",
    tabLabel: "Short Form",
    format: "TikTok, Reels, Shorts",
    heading: "For short-form content",
    description:
      "We turn raw clips into quick, polished videos with strong hooks, captions, clean cuts, and sound that keeps people watching.",
    example: '"Cut this into 3 short clips for Instagram"',
    process: "Hook first -> tight cuts -> captions -> sound polish",
    result: "Ready-to-post clips for TikTok, Reels, and Shorts",
    icon: Sparkles,
  },
  {
    title: "Long-Form Videos",
    tabLabel: "Long Form",
    format: "YouTube & Podcasts",
    heading: "For YouTube and podcasts",
    description:
      "We clean up your footage, remove slow moments, improve the flow, and add visuals that make longer videos easier to watch.",
    example: '"Edit this podcast into a clear YouTube episode"',
    process: "Clean audio -> remove pauses -> add B-roll -> final polish",
    result: "A complete long-form video that feels clear and professional",
    icon: Film,
  },
  {
    title: "Brand & Business Videos",
    tabLabel: "Brand Videos",
    format: "Demos, Ads, Testimonials",
    heading: "For business and brand content",
    description:
      "We edit demos, ads, testimonials, and company videos so your message is easy to understand and your brand looks sharp.",
    example: '"Make this customer story feel polished and credible"',
    process: "Find the story -> clean the edit -> add brand assets -> export",
    result: "A polished business video ready for your site, ads, or sales team",
    icon: Building2,
  },
];

const pipeline = [
  {
    step: "01",
    title: "Drop Your Raw Assets",
    description:
      "Upload unedited footage, voiceovers, and custom assets to a secure cloud folder, Frame.io, or Google Drive workspace.",
    icon: UploadCloud,
  },
  {
    step: "02",
    title: "Creative Blueprint & Post-Production",
    description:
      "We review your brand guidelines, establish pacing, then manage audio cleanup, color grading, narrative cuts, and B-roll placement.",
    icon: Layers,
  },
  {
    step: "03",
    title: "Frame-by-Frame Feedback",
    description:
      "Receive a high-definition draft link and leave exact timestamped revision notes directly on the video timeline.",
    icon: MessageSquare,
  },
  {
    step: "04",
    title: "Final Asset Delivery",
    description:
      "Your optimized video file is rendered with final thumbnail and platform specs, ready to publish and drive conversions.",
    icon: Rocket,
  },
];

const portfolioTiles = [
  { label: "Creator Hook Rewrite", value: "+45%", meta: "Audience retention" },
  { label: "SaaS Product Demo", value: "48h", meta: "First draft SLA" },
  { label: "Podcast Cutdown", value: "12x", meta: "Short-form exports" },
];

const testimonials = [
  {
    quote:
      "Editing used to keep me up until 2 AM every week. Sterling Studio changed my workflow, lifted retention by 45%, and helped us hit our first 100k subscriber milestone.",
    author: "David Thorne",
    role: "Tech Entrepreneur & YouTube Creator",
  },
  {
    quote:
      "Sterling Studio treats our product demos and customer case studies with enterprise-level professionalism. They are fast, reliable, and understand how visual pacing drives signups.",
    author: "Elena Rostova",
    role: "Head of Marketing at SyncFlow Software",
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeServiceIndex, setActiveServiceIndex] = useState(0);
  const activeService = services[activeServiceIndex];
  const ActiveServiceIcon = activeService.icon;

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveServiceIndex((index) => (index + 1) % services.length);
    }, 2800);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <main>
      <header className="site-header">
        <nav className="nav-shell" aria-label="Primary navigation">
          <a className="brand" href="/" aria-label="Sterling Studio home">
            <span className="brand-wordmark">Sterling Studio</span>
          </a>

          <div
            className={["nav-center", menuOpen ? "open" : ""]
              .filter(Boolean)
              .join(" ")}
            id="mobile-navigation"
          >
            <a className="nav-link" href="#services" onClick={() => setMenuOpen(false)}>
              Services
            </a>
            <a className="nav-link" href="#portfolio" onClick={() => setMenuOpen(false)}>
              Our Portfolio
            </a>
            <a className="nav-link" href="#about" onClick={() => setMenuOpen(false)}>
              About Us
            </a>
          </div>

          <div className="nav-actions">
            <a className="button button-dark nav-cta" href="#trial">
              Book Consultation
            </a>
            <button
              className="menu-button"
              type="button"
              aria-label="Toggle navigation menu"
              aria-controls="mobile-navigation"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((open) => !open)}
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-inner">
          <div className="info-badge">
            <Clapperboard size={17} />
            Premium Post-Production Studio
          </div>
          <h1>Video Editing for Brands Building Momentum</h1>
          <p>
            Sterling Studio transforms your raw footage into high-retention
            visual assets. From viral short-form clips to cinematic YouTube
            content and corporate brand campaigns, we lead the entire
            post-production engine so you can dominate your market.
          </p>
          <div className="hero-actions">
            <a className="button button-dark primary-button" href="#trial">
              Book Consultation
              <ArrowRight size={18} />
            </a>
            <a className="showreel-link" href="#portfolio">
              <Play size={18} fill="currentColor" />
              View Our 2026 Showreel
            </a>
          </div>
        </div>
      </section>

      <section className="proof-strip section" aria-label="Sterling Studio proof">
        {proofItems.map((item) => (
          <div className="proof-item" key={item}>
            <ShieldCheck size={18} />
            <span>{item}</span>
          </div>
        ))}
      </section>

      <section className="bottleneck-section section" id="about">
        <div className="section-heading split-heading">
          <span>The Sterling Studio Operation</span>
          <h2>Spend less time editing and more time growing your brand.</h2>
        </div>

        <div className="comparison-grid">
          <div className="comparison-column pain-column">
            <div className="comparison-heading">
              <Scissors size={20} />
              <h3>What Slows You Down</h3>
            </div>
            {bottlenecks.map((item) => (
              <p key={item.pain}>{item.pain}</p>
            ))}
          </div>
          <div className="comparison-column solution-column">
            <div className="comparison-heading">
              <Clock size={20} />
              <h3>How Sterling Studio Helps</h3>
            </div>
            {bottlenecks.map((item) => (
              <p key={item.solution}>{item.solution}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="services-section section" id="services">
        <div className="section-heading">
          <h2>Video Editing Services</h2>
          <p>Simple, professional edits for the content your brand needs most.</p>
        </div>

        <div className="service-tabs-card">
          <div className="service-tabs" role="tablist" aria-label="Video editing service types">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isActive = activeServiceIndex === index;

              return (
                <button
                  aria-controls="service-tab-panel"
                  aria-selected={isActive}
                  className={["service-tab", isActive ? "active" : ""]
                    .filter(Boolean)
                    .join(" ")}
                  id={`service-tab-${index}`}
                  key={service.title}
                  onClick={() => setActiveServiceIndex(index)}
                  role="tab"
                  type="button"
                >
                  <Icon size={18} />
                  <span>{service.tabLabel}</span>
                </button>
              );
            })}
          </div>

          <div
            aria-labelledby={`service-tab-${activeServiceIndex}`}
            className="service-tab-panel"
            id="service-tab-panel"
            key={activeService.title}
            role="tabpanel"
          >
            <div className="service-panel-copy">
              <div className="service-panel-kicker">
                <ActiveServiceIcon size={18} />
                <span>{activeService.format}</span>
              </div>
              <h3>{activeService.heading}</h3>
              <p>{activeService.description}</p>
              <div className="service-prompt">{activeService.example}</div>
            </div>

            <div className="service-panel-output">
              <div>
                <span>How we edit</span>
                <p>{activeService.process}</p>
              </div>
              <div>
                <span>You get</span>
                <strong>{activeService.result}</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="portfolio-section" id="portfolio">
        <div className="section portfolio-layout">
          <div className="portfolio-copy">
            <span>Portfolio Interaction Preview</span>
            <h2>Video case studies built around inputs, intervention, and metric lift.</h2>
            <p>
              Every portfolio element is designed to explain what raw assets
              arrived, how Sterling intervened, and which performance metric
              improved after the final edit.
            </p>
          </div>
          <div className="portfolio-board" aria-label="Portfolio performance samples">
            {portfolioTiles.map((tile) => (
              <article className="portfolio-tile" key={tile.label}>
                <span>{tile.label}</span>
                <strong>{tile.value}</strong>
                <p>{tile.meta}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="pipeline-section section">
        <div className="section-heading">
          <h2>The Frictionless 4-Step Video Pipeline</h2>
          <p>Built to reduce outsourcing anxiety around speed, security, and review clarity.</p>
        </div>

        <div className="pipeline-grid">
          {pipeline.map((item) => {
            const Icon = item.icon;
            return (
              <article className="pipeline-card" key={item.step}>
                <span className="step-number">{item.step}</span>
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

      <section className="testimonial-section section">
        <div className="section-heading">
          <h2>Performance Reviews</h2>
          <p>Metric-backed confirmation from creators and corporate stakeholders.</p>
        </div>

        <div className="testimonial-grid">
          {testimonials.map((testimonial) => (
            <figure className="testimonial-card" key={testimonial.author}>
              <blockquote>{testimonial.quote}</blockquote>
              <figcaption>
                <strong>{testimonial.author}</strong>
                <span>{testimonial.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="closing-section" id="trial">
        <div className="section closing-layout">
          <div>
            <span>Free Video Trial</span>
            <h2>Ready to reclaim your time and scale your video presence?</h2>
          </div>
          <div className="closing-copy">
            <p>
              Book a quick consultation and tell us what you need edited. We
              will review your footage, suggest the best approach, and show you
              how Sterling Studio can help.
            </p>
            <a className="button button-dark closing-button" href="mailto:hello@sterlingstudio.com">
              Book Consultation
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-shell">
          <div>
            <h2>Sterling Studio</h2>
            <p>
              Premium post-production for creators, companies, entrepreneurs,
              and personal brands.
            </p>
          </div>
          <div>
            <h3>Studio Navigation</h3>
            <a href="/">Home</a>
            <a href="#services">Premium Services</a>
            <a href="#portfolio">Video Portfolio</a>
            <a href="#about">Meet the Editors</a>
            <a href="#trial">Start a Trial</a>
          </div>
          <div>
            <h3>Legal & Media</h3>
            <a href="#privacy">Privacy Statement</a>
            <a href="#terms">Terms of Post-Production</a>
            <a href="#rights">Media Release & Usage Rights</a>
          </div>
          <div>
            <h3>Social Sync</h3>
            <a href="#linkedin">LinkedIn</a>
            <a href="#youtube">YouTube</a>
            <a href="#social">TikTok / Instagram</a>
            <form className="newsletter-form">
              <label htmlFor="newsletter">Weekly Breakdown</label>
              <input
                id="newsletter"
                type="email"
                placeholder="Get our weekly breakdown of high-retention video hooks. Zero fluff."
              />
            </form>
          </div>
        </div>
      </footer>
    </main>
  );
}
