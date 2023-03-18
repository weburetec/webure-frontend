import Head from "next/head";
import React from "react";
import { withAuth } from "../../../hooks";
import { AdminLayout } from "../../../layouts";
import { MainPage } from "../../../components/admin";
// import AdminLayout from "../../../layouts/AdminLayout";

const AdminDashboard = () => {
  return (
    <>
      <Head>
        <title>Webure Technologies - Dashboard</title>
        <meta
          name="description"
          content="Full service agency for complete IT Solution"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Admin Layout */}
      <AdminLayout>
        <MainPage />
      </AdminLayout>
    </>
  );
};

export default AdminDashboard;

export const getServerSideProps = withAuth(async (ctx) => {
  return {
    props: {},
  };
});
