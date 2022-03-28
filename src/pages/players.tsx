import { GetServerSidePropsContext } from "next";
import Head from "next/head";

function Players(): JSX.Element {
  return (
    <>
      <Head>
        <title>Players</title>
      </Head>
      <main>
        <h1 className="font-sans text-2xl text-blue-500">Hello</h1>
      </main>
    </>
  );
}

export async function getServerSideProps(props: GetServerSidePropsContext) {
  const { locale } = props;
  const { default: messages } = await import(`../../messages/${locale}.json`);
  return { props: { messages } };
}

export default Players;
