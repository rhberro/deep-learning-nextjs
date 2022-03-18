import Head from "next/head";

function Home(): JSX.Element {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <main>
        <h1 className="font-sans text-2xl text-red-500">Home</h1>
      </main>
    </>
  );
}

export default Home;
