import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "First Arb - Tree Surgery Services in Cheltenham",
  description: "Professional tree surgery services in Cheltenham and surrounding areas. Covering all aspects of tree care.",
  keywords: "tree surgery, arborist, tree removal, tree care, Cheltenham, tree services, tree maintenance, tree pruning, stump removal",
  authors: [{ name: "First Arb Tree Services Cheltenham" }],
  creator: "First Arb Tree Services Cheltenham",
  publisher: "First Arb Tree Services Cheltenham",
  metadataBase: new URL("https://firstarb.co.uk"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "First Arb Tree Services Cheltenham",
    description: "Professional tree surgery services in Cheltenham and surrounding areas. Covering all aspects of tree care.",
    url: "https://firstarb.co.uk",
    siteName: "First Arb Tree Services Cheltenham",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "First Arb Tree Services Cheltenham",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "First Arb Tree Services Cheltenham",
    description: "Professional tree surgery services in Cheltenham and surrounding areas. Covering all aspects of tree care.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
