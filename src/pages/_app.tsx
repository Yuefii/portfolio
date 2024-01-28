import "@/styles/globals.css";
import Navbar from "@/components/Navbar/Navbar";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main>
      <ThemeProvider attribute="class">
        <Navbar />
        <Component {...pageProps} />;
      </ThemeProvider>
    </main>
  );
}
