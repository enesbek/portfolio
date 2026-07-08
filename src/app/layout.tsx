import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Enes Bek | Frontend & Full Stack Engineer",
  description: "Portfolio of Enes Bek, Frontend Engineer with 4+ years of experience specializing in React, TypeScript, scalable UI architecture, HarmonyOS, and AWS cloud solutions.",
  keywords: ["Enes Bek", "Frontend Engineer", "Full Stack Engineer", "React Developer", "TypeScript", "HarmonyOS", "AWS", "Node.js", "Istanbul", "Turkey"],
  authors: [{ name: "Enes Bek" }],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <meta name="color-scheme" content="light dark" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const storedTheme = localStorage.getItem("color-scheme");
                  if (storedTheme) {
                    document.documentElement.setAttribute('data-theme', storedTheme);
                    const metaColor = document.querySelector('meta[name="color-scheme"]');
                    if (metaColor) {
                      metaColor.content = storedTheme === 'system' ? 'light dark' : storedTheme;
                    }
                  }
                } catch (e) {}
              })()
            `,
          }}
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
