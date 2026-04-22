export default function Footer() {
  return (
    <footer className="site-footer">
      <p className="site-footer__inner">
        <span>© {new Date().getFullYear()} Carlos Rodrigues</span>
        <span aria-hidden="true">·</span>
        <span>All rights reserved</span>
      </p>
    </footer>
  )
}
