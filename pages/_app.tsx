import "styles/globals.css";

import type { AppProps, NextWebVitalsMetric } from "next/app";
import { appWithTranslation } from "next-i18next";
import LocaleSwitcher from "components/LocaleSwitcher";

export function reportWebVitals(metric: NextWebVitalsMetric) {
  if (metric.label === "web-vital") {
    console.log(metric);
  }
}

function MyApp(props: AppProps): React.ReactElement<AppProps> {
  const { Component, pageProps } = props;
  return (
    <>
      <Component {...pageProps} />
      <LocaleSwitcher />
    </>
  );
}

export default appWithTranslation(MyApp);
