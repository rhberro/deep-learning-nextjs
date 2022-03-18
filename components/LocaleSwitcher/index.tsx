import Link from "next/link";
import { useRouter } from "next/router";
import * as React from "react";

function LocaleSwitcher(): JSX.Element {
  const { asPath, locales = [], pathname, query } = useRouter();

  const renderer = React.useCallback(
    function rendererWrapper(locale: string) {
      const href = { pathname, query };
      const onClick = () => {
        document.cookie = "NEXT_LOCALE=" + locale;
      };
      return (
        <li key={locale} onClick={onClick}>
          <Link href={href} as={asPath} locale={locale}>
            <a>{locale}</a>
          </Link>
        </li>
      );
    },
    [pathname, query, asPath]
  );

  const rendered = React.useMemo(
    function renderedWrapper() {
      return locales.map(renderer);
    },
    [locales, renderer]
  );

  return (
    <div>
      <p>Locale switcher:</p>
      <ul>{rendered}</ul>
    </div>
  );
}

export default LocaleSwitcher;
