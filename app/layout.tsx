import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@vercel/analytics/react"
import { inject } from '@vercel/analytics';
 
inject();

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  display: "swap"
});

export const metadata: Metadata = {
	metadataBase: new URL("https://chubko.design/"),
	
	title: {
		default: 'CHUBKO - Creative Graphic Design Studio',
		template: '%s | CHUBKO Design Studio'
	},
	
	description: "CHUBKO is a modern graphic design studio creating bold, innovative visual solutions. We specialize in branding, web design, and creative digital experiences that help businesses stand out.",
	
	keywords: [
		"graphic design", "branding", "web design", "creative studio", 
		"logo design", "visual identity", "digital design", "CHUBKO", 
		"design agency", "creative services", "brand development", 
		"modern design", "portfolio website", "UI/UX design",
		"print design", "digital marketing", "creative consultation"
	],
	
	authors: [{ name: "CHUBKO Design Studio" }],
	creator: "CHUBKO Design Studio",
	publisher: "CHUBKO Design Studio",
	
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
	
	openGraph: {
		type: "website",
		locale: "en_US",
		url: "https://chubko.design/",
		siteName: "CHUBKO Design Studio",
		title: "CHUBKO - Creative Graphic Design Studio",
		description: "Modern graphic design studio creating bold, innovative visual solutions. Specializing in branding, web design, and creative digital experiences.",
		images: [
			{
				url: "/chubko-og.png",
				width: 1200,
				height: 630,
				alt: "CHUBKO - Creative Graphic Design Studio",
			},
		],
	},
	
	twitter: {
		card: "summary_large_image",
		title: "CHUBKO - Creative Graphic Design Studio",
		description: "Modern graphic design studio creating bold, innovative visual solutions.",
		images: ["/chubko-og.png"],
		creator: "@chubkodesign",
	},
	
	alternates: {
		canonical: "https://chubko.design/",
	},
	
	category: "Design",
	
	verification: {
		google: "your-google-verification-code",
		yandex: "your-yandex-verification-code",
	},
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={`${inter.variable} ${poppins.variable} font-sans antialiased`}>
      <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
			<Analytics />
          </ThemeProvider>
        </body>
    </html>
  );
}
