import Head from "next/head";

function Error(): JSX.Element {
  return (
    <>
      <Head>
        <title>500</title>
      </Head>
      <main>
        <h1 className="font-sans text-2xl text-red-500">That&apos;s a 500!</h1>
      </main>
    </>
  );
}

export default Error;
