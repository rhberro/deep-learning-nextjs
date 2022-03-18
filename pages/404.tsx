import Head from "next/head";

function NotFound(): JSX.Element {
  return (
    <>
      <Head>
        <title>404</title>
      </Head>
      <main>
        <h1 className="font-sans text-2xl text-red-500">That&apos;s a 404!</h1>
      </main>
    </>
  );
}

export default NotFound;
