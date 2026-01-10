import Script from 'next/script'; // Import Script for GTM noscript and other external scripts
import './globals.css';
import Navbar from './_components/navbar';
// --- A. METADATA: Handles <title>, <meta> tags, and verification ---
// This replaces all your <meta> tags and <title> from the old <head>.
export const metadata = {
  // Primary Meta Tags
  title: 'Spectrum – Sustainable & Zero-Waste Agriculture in India',
  description:
    'Spectrum Agriculture is a renovating agricultural and new-age agri-enterprise committed to leading sustainable agriculture and organic farming in Odisha, offering zero-waste farming solutions, farm-to-market services, guidance on how to start organic farming, agriculture startup support, connecting farmers with buyers and investors, farmer empowerment programs, and growing with a trusted agriculture enterprise in India.',
  keywords:
    'Sustainable agriculture, sustainable agriculture India, regenerative farming India, zero-waste farming, zero-waste farming India, zero-waste organic farming, organic farming, organic farming company in Odisha, how to start organic farming, organic farm solutions, farm-to-market solutions, farm-to-market solutions odisha, Agri business India, agriculture enterprise India, low-cost sustainable farming, farmer empowerment, rural entrepreneurship odisha, agriculture startup, investment & partnership, Spectrum agriculture',
  
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
        <Navbar/>
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