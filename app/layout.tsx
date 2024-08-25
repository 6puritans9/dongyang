import Link from "next/link"
import 'bootstrap/dist/css/bootstrap.css'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="d-flex flex-column min-vh-100">
          <header className="sticky-top">
            <nav className="navbar navbar-expand-md navbar-light bg-light">
              <div className="container">
                <Link href="/" className="navbar-brand">Company Name</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <Link href="/" className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/product" className="nav-link">Product</Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/introduction" className="nav-link">Introduction</Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/contact" className="nav-link">Contact</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </header>

          <main className="flex-grow-1">
            <div className="container py-4">
              {children}
            </div>
          </main>

          <footer className="bg-light py-4">
            <div className="container">
              <div className="row">
                <div className="col-md-6 text-center text-md-start">
                  <p className="mb-0">© 2023 Company Name. All rights reserved.</p>
                </div>
                <div className="col-md-6 text-center text-md-end">
                  <Link href="/terms" className="text-decoration-none me-3">Terms</Link>
                  <Link href="/privacy" className="text-decoration-none">Privacy</Link>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}