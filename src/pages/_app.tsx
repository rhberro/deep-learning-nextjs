import "styles/globals.css";

import type { AppProps, NextWebVitalsMetric } from "next/app";
import { NextIntlProvider } from "next-intl";

import Page from "src/components/Page";
import PageHeader from "src/components/PageHeader";

if (process.env.NODE_ENV === "development") {
  require("src/mocks");
}

export function reportWebVitals(metric: NextWebVitalsMetric) {
  if (metric.label === "web-vital") {
    console.log(metric);
  }
}

function App(props: AppProps): React.ReactElement<AppProps> {
  const {
    Component,
    pageProps,
    pageProps: { messages },
  } = props;

  return (
    <NextIntlProvider messages={messages}>
      <Page>
        <PageHeader />
        <Component {...pageProps} />
      </Page>
    </NextIntlProvider>
  );
}

export default App;
