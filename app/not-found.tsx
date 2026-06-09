import { SiteFooter } from "./components/site-footer";
import { SiteHeader } from "./components/site-header";

export default function NotFound() {
  return (
    <main className="project-page">
      <SiteHeader />
      <section className="project-gallery-section">
        <div className="project-gallery-heading">
          <span>Not Found</span>
          <h2>This page is not available.</h2>
          <p>Head back to the portfolio or return to the homepage.</p>
        </div>
        <a className="button button-dark primary-button" href="/#portfolio">
          View Portfolio
        </a>
      </section>
      <SiteFooter />
    </main>
  );
}
