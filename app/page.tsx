import {
  ArrowRight,
  Building2,
  Clapperboard,
  Clock,
  Film,
  Layers,
  MessageSquare,
  Play,
  Rocket,
  Scissors,
  Sparkles,
} from "lucide-react";
import { SiteFooter } from "./components/site-footer";
import { SiteHeader } from "./components/site-header";
import { assetUrl, portfolioProjects } from "./project/portfolio-data";

const bottlenecks = [
  {
    pain:
      "You have ideas, but turning them into consistent content takes too much time across planning, design, filming, editing, and posting.",
    solution:
      "We help shape the strategy, create the assets, edit the videos, and prepare content that is ready to share.",
  },
  {
    pain:
      "Your brand can feel scattered when every post, video, graphic, and campaign looks like it came from a different place.",
    solution:
      "We build a clear creative direction so your content looks connected, polished, and easy for your audience to recognize.",
  },
];

const services = [
  {
    title: "Content Strategy",
    format: "Ideas, Hooks, Campaign Planning",
    heading: "Plan content with a clear direction",
    description:
      "We help you decide what to create, how it should sound, where it should live, and how each piece supports your brand goals.",
    example: '"Build a content plan for our next product launch"',
    process:
      "We clarify your goals, define the audience, shape strong ideas, and turn them into a practical content plan.",
    result: "A focused content roadmap with ideas your team can actually use",
    icon: Sparkles,
  },
  {
    title: "Branding & Creative Direction",
    format: "Visual Style, Messaging, Design",
    heading: "Give your brand a consistent look and voice",
    description:
      "We shape the look, feel, tone, and creative direction behind your content so every asset feels like it belongs to the same brand.",
    example: '"Help our content look more polished and consistent"',
    process:
      "We review your current brand, set the visual direction, refine the messaging, and define the style for your assets.",
    result: "Clear creative guidance for videos, graphics, posts, and campaigns",
    icon: Building2,
  },
  {
    title: "Video Production & Editing",
    format: "Short Form, Long Form, Ads",
    heading: "Create videos that feel sharp and easy to watch",
    description:
      "We edit short-form videos, long-form content, ads, demos, and brand stories with clean pacing, captions, sound, and platform-ready exports.",
    example: '"Turn this footage into polished content for our channels"',
    process:
      "We review the footage, build the edit, add captions and sound, then prepare final exports for the right platforms.",
    result: "Professional videos ready for social, websites, ads, or sales",
    icon: Film,
  },
  {
    title: "Brand Content Management",
    format: "Ongoing Content Support",
    heading: "Keep your brand content moving",
    description:
      "We help manage the content flow from idea to delivery, keeping your brand supplied with polished assets without making your team chase every detail.",
    example: '"Help us keep content moving every month"',
    process:
      "We plan the calendar, organize asset needs, coordinate production, and keep content moving toward delivery.",
    result: "A steady content workflow with fewer bottlenecks and clearer output",
    icon: Layers,
  },
];

const pipeline = [
  {
    step: "01",
    title: "Discovery & Strategy",
    description:
      "We learn about your brand, audience, goals, current content, and what you want your content to accomplish.",
    icon: MessageSquare,
  },
  {
    step: "02",
    title: "Creative Planning",
    description:
      "We map out content ideas, hooks, scripts, visual direction, brand assets, and the best formats for each platform.",
    icon: Layers,
  },
  {
    step: "03",
    title: "Production & Editing",
    description:
      "We create the visuals, edit the videos, design supporting assets, refine the details, and keep everything aligned with your brand.",
    icon: Clapperboard,
  },
  {
    step: "04",
    title: "Delivery & Launch",
    description:
      "You receive platform-ready content with the right exports, captions, thumbnails, and guidance to publish with confidence.",
    icon: Rocket,
  },
];

const testimonials = [
  {
    quote:
      "The content felt active, polished, and ready for launch. The social posts, motion graphics, and video assets helped the brand stay consistent across channels.",
    author: "Shiba Wings",
    role: "Social Content & Motion",
  },
  {
    quote:
      "The motion work gave our visuals more energy. The edits were clean, branded, and easy to use across our marketing and social content.",
    author: "Wingers UK",
    role: "Motion Graphics",
  },
  {
    quote:
      "The brand visuals and promotional assets made the product content feel clearer and more professional, from packaging support to motion-led creative.",
    author: "The Nutritionists",
    role: "Brand Design & Motion",
  },
];

export default function Home() {
  return (
    <main>
      <SiteHeader />

      <section className="hero">
        <div className="hero-inner">
          <div className="info-badge">
            <Clapperboard size={17} />
            Content, Branding & Video Studio
          </div>
          <h1>The Content Studio Behind Growing Brands</h1>
          <p>
            Neo Cut Media helps brands, founders, and businesses plan,
            create, edit, and manage polished content. From brand direction and
            social assets to short-form videos, campaigns, and launch-ready
            creative, we support the full content pipeline.
          </p>
          <div className="hero-actions">
            <a className="button button-dark primary-button" href="/contact">
              Book Consultation
              <ArrowRight size={18} />
            </a>
            <a className="showreel-link" href="#services">
              <Play size={18} fill="currentColor" />
              Explore Our Services
            </a>
          </div>
        </div>
      </section>

      <section className="bottleneck-section section" id="about">
        <div className="section-heading split-heading">
          <span>The Neo Cut Media Operation</span>
          <h2>Spend less time chasing content and more time growing your brand.</h2>
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
              <h3>How Neo Cut Media Helps</h3>
            </div>
            {bottlenecks.map((item) => (
              <p key={item.solution}>{item.solution}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="services-section section" id="services">
        <div className="section-heading">
          <h2>Content Creation Services</h2>
          <p>Strategy, branding, video, and ongoing support for the content your brand needs most.</p>
        </div>

        <div className="service-stack" aria-label="Content creation service types">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <article className="service-window" key={service.title}>
                <span className="service-number">{String(index + 1).padStart(2, "0")}</span>
                <div className="service-panel-copy">
                  <div className="service-panel-kicker">
                    <Icon size={18} />
                    <span>{service.title}</span>
                  </div>
                  <h3>{service.heading}</h3>
                  <p>{service.description}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="pipeline-section section" id="process">
        <div className="section-heading">
          <h2>The 4-Step Content Growth Pipeline</h2>
          <p>Built to take your brand from scattered ideas to polished, ready-to-share content.</p>
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

      <section className="work-section section" id="portfolio">
        <div className="section-heading">
          <span>Selected Work</span>
          <h2>Portfolio</h2>
          <p>
            Projects across content, branding, motion, video, and film craft.
          </p>
        </div>

        <div className="work-grid">
          {portfolioProjects.map((project) => (
            <a className="work-card" href={`/project/${project.slug}`} key={project.slug}>
              <div className="work-card-media">
                <img src={assetUrl(project.cover)} alt={`${project.title} portfolio preview`} loading="lazy" />
              </div>
              <div className="work-card-copy">
                <span>{project.category}</span>
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
              </div>
            </a>
          ))}
        </div>
        <div className="section-action">
          <a className="button button-dark primary-button" href="/portfolio">
            View Full Portfolio
            <ArrowRight size={18} />
          </a>
        </div>
      </section>

      <section className="testimonial-section section">
        <div className="section-heading">
          <h2>Testimonials</h2>
          <p>What creators and business teams say about working with us.</p>
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
            <h2>Ready to create content your audience remembers?</h2>
          </div>
          <div className="closing-copy">
            <p>
              Book a quick consultation and tell us what you want to create. We
              will review your goals, map the right content workflow, and show
              how Neo Cut Media can support your brand.
            </p>
            <a className="button button-dark closing-button" href="/contact">
              Book Consultation
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
