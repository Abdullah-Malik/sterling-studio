export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-shell">
        <div>
          <h2>Sterling Studio</h2>
          <p>
            Content creation, branding, and video support for growing brands,
            founders, businesses, and creative teams.
          </p>
        </div>
        <div>
          <h3>Studio Navigation</h3>
          <a href="/">Home</a>
          <a href="/#services">Services</a>
          <a href="/#portfolio">Portfolio</a>
          <a href="/#process">Process</a>
          <a href="/#about">About the Studio</a>
          <a href="/#trial">Book Consultation</a>
        </div>
        <div>
          <h3>Legal & Media</h3>
          <a href="#privacy">Privacy Statement</a>
          <a href="#terms">Terms of Service</a>
          <a href="#rights">Media Release & Usage Rights</a>
        </div>
        <div>
          <h3>Social Sync</h3>
          <a href="#linkedin">LinkedIn</a>
          <a href="#youtube">YouTube</a>
          <a href="#social">TikTok / Instagram</a>
          <form className="newsletter-form">
            <label htmlFor="newsletter">Creative Notes</label>
            <input
              id="newsletter"
              type="email"
              placeholder="Get ideas on content, branding, and video. Zero fluff."
            />
          </form>
        </div>
      </div>
    </footer>
  );
}
