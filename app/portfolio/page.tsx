import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { SiteFooter } from "../components/site-footer";
import { SiteHeader } from "../components/site-header";
import { assetUrl, portfolioProjects } from "../project/portfolio-data";

export const metadata: Metadata = {
  title: "Portfolio | Neo Cut Media",
  description:
    "Explore Neo Cut Media portfolio projects across social content, motion graphics, brand assets, video editing, and campaign creative.",
};

export default function PortfolioPage() {
  return (
    <main className="content-page">
      <SiteHeader />

      <section className="page-hero section">
        <span>Portfolio</span>
        <h1>Selected projects across content, branding, motion, and video.</h1>
        <p>
          A focused look at the creative work Neo Cut Media can support, from
          social media campaigns and motion graphics to brand assets and edited
          video content.
        </p>
      </section>

      <section className="portfolio-index section">
        {portfolioProjects.map((project) => (
          <article className="portfolio-row" key={project.slug}>
            <a className="portfolio-row-media" href={`/project/${project.slug}`}>
              <img src={assetUrl(project.cover)} alt={`${project.title} portfolio preview`} />
            </a>
            <div className="portfolio-row-copy">
              <span>{project.category}</span>
              <h2>{project.title}</h2>
              <p>{project.summary}</p>
              <div className="project-service-list">
                {project.services.map((service) => (
                  <span key={service}>{service}</span>
                ))}
              </div>
              <a className="button button-dark primary-button" href={`/project/${project.slug}`}>
                View Project
                <ArrowRight size={18} />
              </a>
            </div>
          </article>
        ))}
      </section>

      <SiteFooter />
    </main>
  );
}
