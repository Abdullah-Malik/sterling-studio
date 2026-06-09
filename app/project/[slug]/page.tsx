import { notFound } from "next/navigation";
import { SiteFooter } from "../../components/site-footer";
import { SiteHeader } from "../../components/site-header";
import {
  assetUrl,
  getPortfolioProject,
  portfolioProjects,
} from "../portfolio-data";
import { ProjectMediaGallery } from "./project-media-gallery";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return portfolioProjects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getPortfolioProject(slug);

  if (!project) {
    return {};
  }

  return {
    title: `${project.title} | Sterling Studio`,
    description: project.summary,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getPortfolioProject(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="project-page">
      <SiteHeader />

      <section className="project-hero">
        <div className="project-hero-copy">
          <span>{project.category}</span>
          <h1>{project.title}</h1>
          <p>{project.summary}</p>
          <div className="project-service-list">
            {project.services.map((service) => (
              <span key={service}>{service}</span>
            ))}
          </div>
        </div>
        <div className="project-cover">
          <img src={assetUrl(project.cover)} alt={`${project.title} cover`} />
        </div>
      </section>

      <section className="project-gallery-section">
        <div className="project-gallery-heading">
          <span>Portfolio</span>
          <h2>Project visuals and video samples.</h2>
          <p>{project.media.length} images and videos are included in this project.</p>
        </div>

        <ProjectMediaGallery media={project.media} projectTitle={project.title} />
      </section>

      <SiteFooter />
    </main>
  );
}
