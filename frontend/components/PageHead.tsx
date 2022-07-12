import Head from "next/head";

const PageHead = ({ title = "" }) => {
  return (
    <>
      <Head>
        <title>{`Styled | ${title}`}</title>
      </Head>
    </>
  );
};

export default PageHead;
