import {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetStaticPropsContext,
} from "next";
import Head from "next/head";

function Home(): JSX.Element {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <main>
        <h1 className="font-sans text-2xl text-blue-500">Hello</h1>
      </main>
    </>
  );
}

// export async function getStaticProps(props: GetStaticPropsContext) {
//   const { locale } = props;
//   const { default: messages } = await import(`../../messages/${locale}.json`);
//   return { props: { messages } };
// }

export async function getServerSideProps(props: GetServerSidePropsContext) {
  const { locale } = props;
  const playersRequests = await fetch(`http://localhost:3001/players`);
  const players = await playersRequests.json();
  const { default: messages } = await import(`../../messages/${locale}.json`);
  return { props: { messages, players } };
}

export default Home;
