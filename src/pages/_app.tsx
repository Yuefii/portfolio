import "@/styles/globals.css";
import Navbar from "@/components/Navbar/Navbar";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main>
      <ThemeProvider attribute="class">
        <Navbar />
        <Component {...pageProps} />;
        <Analytics />
      </ThemeProvider>
    </main>
  );
}
