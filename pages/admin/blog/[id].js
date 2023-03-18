import Head from "next/head";
import React from "react";

import { withAuth } from "../../../hooks";
import { AdminLayout } from "../../../layouts";
import { SingleBlog } from "../../../components/admin";

const AdminBlog = () => {
  return (
    <>
      <Head>
        <title>Webure Technologies - Admin Blog</title>
        <meta
          name="description"
          content="Full service agency for complete IT Solution"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Admin Layout */}
      <AdminLayout>
        <SingleBlog />
      </AdminLayout>
    </>
  );
};

export default AdminBlog;

export const getServerSideProps = withAuth(async (ctx) => {
  return {
    props: {},
  };
});
