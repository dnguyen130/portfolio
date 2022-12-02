import AppProvider from "../utils/provider";
import "../styles/globals.css";

import { useEffect } from "react";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
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
      <Component {...pageProps} />
    </AppProvider>
  );
}

export default MyApp;
