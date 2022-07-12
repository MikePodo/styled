import Head from "next/head";

const PageHead = ({ title = "" }) => {
  return (
    <div>
      <Head>
        <title>{`Styled | ${title}`}</title>
      </Head>
    </div>
  );
};

export default PageHead;
