import Script from 'next/script'; // Import Script for GTM noscript and other external scripts
import './globals.css';
// --- A. METADATA: Handles <title>, <meta> tags, and verification ---
// This replaces all your <meta> tags and <title> from the old <head>.
export const metadata = {
  // Primary Meta Tags
  title: 'Spectrum – Sustainable & Zero-Waste Agriculture in India',
  description: 'Spectrum is a Renovating agricultral and new-age agri-enterprise committed to zero-waste farming, sustainable cultivation, and connecting farmers with buyers and investors.',
  keywords: 'sustainable agriculture, zero-waste farming, organic, invest, partner, sustainable agriculture India, zero-waste farming, organic farming company, farm-to-market solutions, agriculture enterprise India, farmer empowerment, agri business India, Spectrum agriculture',
  
  // Google Search Console Verification
  verification: {
    // This generates the <meta name="google-site-verification" content="..."> tag
    google: 'fFIQhpkpgqQeo-tj8Leftj6nrx297WWT3josD7oVnNc', 
  },

  // Open Graph / Facebook (og:)
  openGraph: {
    type: 'website',
    title: 'Spectrum – Sustainable & Zero-Waste Agriculture in India',
    description: 'Spectrum is a Renovating agricultral and new-age agri-enterprise committed to zero-waste farming, sustainable cultivation, and connecting farmers with buyers and investors.',
  },

  // Twitter
  twitter: {
    card: 'summary_large_image',
    title: 'Spectrum – Sustainable & Zero-Waste Agriculture in India',
    description: 'Spectrum is a Renovating agricultral and new-age agri-enterprise committed to zero-waste farming, sustainable cultivation, and connecting farmers with buyers and investors.',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* B. FAVICON & STYLESHEETS: External CSS links are placed directly here */}
        <link rel="icon" type="image/svg+xml" href="/assets/logo/fav2.png" />
        
        {/* Slick Carousel Styles */}
        
        
        {/* C. GTM HEAD SCRIPT: Using the Next.js Script component for optimal loading */}
        <Script 
            id="google-tag-manager"
            strategy="afterInteractive" // Loads after the page content is visible
            dangerouslySetInnerHTML={{
              __html: `
                (function (w, d, s, l, i) {
                    w[l] = w[l] || []; w[l].push({
                        'gtm.start': new Date().getTime(), event: 'gtm.js'
                    }); 
                    var f = d.getElementsByTagName(s)[0],
                    j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : ''; 
                    j.async = true; 
                    j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl; 
                    f.parentNode.insertBefore(j, f);
                })(window, document, 'script', 'dataLayer', 'GTM-NM73RXTG');
              `,
            }}
          />

        {/* D. AHREFS SCRIPT: Can be placed in the <head> or later in the body */}
        <Script 
            src="https://analytics.ahrefs.com/analytics.js" 
            data-key="8BZWII8rPyjnlsqXBzzo3w" 
            strategy="lazyOnload" // Loads only when the browser is idle
            async
          />
        
      </head>
      
      <body>
        {/* E. GTM NOSCRIPT: Remains at the very top of the <body> */}
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-NM73RXTG" 
            height="0" 
            width="0"
            style={{display:'none', visibility:'hidden'}}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}

        {/* The main content of your pages will be rendered here */}
        {children}
      </body>
    </html>
  );
}