import AppProvider from "../utils/provider";
import "../styles/globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { useEffect } from "react";
import { useRouter } from "next/router";
import { AnimatePresence } from "framer-motion";
import { NavBarStatic } from "@/components/Shared/NavBar";
import { useInitialLoad } from "../utils/provider";

function MyApp({ Component, pageProps, router }) {
  function useNormalScrollRoutes() {
    const router = useRouter();

    useEffect(() => {
      router.events.on("routeChangeStart", () => {
        document.documentElement.classList.add("normal-scroll");
      });
      router.events.on("routeChangeComplete", () => {
        document.documentElement.classList.remove("normal-scroll");
      });
    });
  }

  useNormalScrollRoutes();

  return (
    <AppProvider>
      <AnimatePresence
        mode="wait"
        onExitComplete={() => window.scrollTo(0, 0)}
        exitBeforeEnter
      >
        <Component {...pageProps} key={router.asPath} />
      </AnimatePresence>
    </AppProvider>
  );
}

export default MyApp;
