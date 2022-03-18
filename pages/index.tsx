import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import config from "../next-i18next.config";

function Home(): JSX.Element {
  const { t } = useTranslation("common");

  return (
    <>
      <Head>
        <title>Soccer</title>
      </Head>
      <main>
        <h1 className="font-sans text-2xl text-red-500">{t("hello")}</h1>
      </main>
    </>
  );
}

export const getStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"], config)),
  },
});

export default Home;
