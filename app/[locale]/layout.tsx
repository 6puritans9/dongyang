import Link from "next/link"
import 'bootstrap/dist/css/bootstrap.css'
import { useTranslations } from 'next-intl'
import { NextIntlClientProvider } from 'next-intl'
import { notFound } from 'next/navigation'

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'ko' }, { locale: 'ja' }]
}

export default async function LocaleLayout({ children, params: { locale } }: { children: React.ReactNode, params: { locale: string } }) {
  let messages;
  try {
    messages = (await import(`../../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <LocaleLayoutContent>{children}</LocaleLayoutContent>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}

function LocaleLayoutContent({ children }: { children: React.ReactNode }) {
  const t = useTranslations('Layout');

  return (
    <div className="d-flex flex-column min-vh-100">
      <header className="sticky-top">
        <nav className="navbar navbar-expand-md navbar-light bg-light">
          <div className="container">
            <Link href="/" className="navbar-brand">{t('companyName')}</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link href="/" className="nav-link">{t('home')}</Link>
                </li>
                <li className="nav-item">
                  <Link href="/product" className="nav-link">{t('product')}</Link>
                </li>
                <li className="nav-item">
                  <Link href="/introduction" className="nav-link">{t('introduction')}</Link>
                </li>
                <li className="nav-item">
                  <Link href="/contact" className="nav-link">{t('contact')}</Link>
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
              <p className="mb-0">{t('copyright', { year: new Date().getFullYear() })}</p>
            </div>
            <div className="col-md-6 text-center text-md-end">
              <Link href="/terms" className="text-decoration-none me-3">{t('terms')}</Link>
              <Link href="/privacy" className="text-decoration-none">{t('privacy')}</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}