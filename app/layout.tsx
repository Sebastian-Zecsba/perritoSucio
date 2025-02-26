import type { Metadata } from "next";
import Script from "next/script"; 
import "./globals.css";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

// Reemplaza con tu Pixel real
const FB_PIXEL_ID = "996373986005786";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <Script
          id="fb-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}
              (window, document,'script','https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '996373986005786');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <Image
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=996373986005786&ev=PageView&noscript=1"
            alt="facebook pixel"
          />
        </noscript>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
