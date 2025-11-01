import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import MainHeader from "@/components/Layout/MainHeader";
import { ThemeProvider } from "@/components/theme-provider";

const font = Roboto({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Job-Way",
  description: "Description",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${font.className} antialiased `}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange>
          <MainHeader />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
