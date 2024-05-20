import "@/styles/globals.css";
import "react-toastify/dist/ReactToastify.css";

import type { AppProps } from "next/app";
import { ToastContainer } from "react-toastify";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className="h-screen bg-[#111111]">
      <ToastContainer
        toastStyle={{ background: "black" }}
        position="bottom-left"
        className="w-auto text-sm"
        autoClose={2000}
      />
      <Component {...pageProps} />
    </main>
  );
}
