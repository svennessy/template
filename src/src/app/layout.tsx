import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

// transform google fonts to woff files
// https://transfonter.org/
// in div use "font-[AtmaRegular]" in className

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

const RalewayThin = localFont({
  src: "./fonts/Raleway-Thin.woff",
  variable: "--font-raleway-thin",
  weight: "100 900",
});

const AtmaRegular = localFont({
  src: "./fonts/Atma-Regular.woff",
  variable: "--font-atma-regular",
  weight: "400",
  style: "normal",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Example",
    default: "Example",
  },
  description: "Example",
  applicationName: "Template",
  // icons: "/images/favicon.ico",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // hydration warning: error where component mismatches between client and server

    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${RalewayThin.variable} ${AtmaRegular.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
