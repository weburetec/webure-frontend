import Head from "next/head";
import React from "react";
import { AddOrEditBlog } from "../../../components/admin";
import { withAuth } from "../../../hooks";
import { AdminLayout } from "../../../layouts";

const AdminBlog = () => {
  return (
    <>
      <Head>
        <title>Webure Technologies - Admin Add Blog</title>
        <meta
          name="description"
          content="Full service agency for complete IT Solution"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Admin Layout */}
      <AdminLayout>
        <AddOrEditBlog />
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
