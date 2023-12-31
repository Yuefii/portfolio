import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Sidebar from "./components/sidebar";
import Footer from "./components/Footer";
import { Roboto } from 'next/font/google'
 
const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Yuefii | Portfolio",
  description: "this is my personal portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={roboto.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="dark:bg-slate-950">
            <div className="min-h-screen sm:container mx-auto md:px-28 pt-6">
              <div className="h-full md:flex">
                <Sidebar />
                <main className="flex-1 ml-3 h-full overflow-y-auto">
                  {children}
                </main>
              </div>
            </div>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
