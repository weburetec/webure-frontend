import Head from "next/head";
import React from "react";
import { Vacancy } from "../../../components/admin";
import { withAuth } from "../../../hooks";
import { AdminLayout } from "../../../layouts";

const AdminAddVacancy = () => {
  return (
    <>
      <Head>
        <title>Webure Technologies - Vacancy</title>
        <meta
          name="description"
          content="Full service agency for complete IT Solution"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Admin Layout */}
      <AdminLayout>
        <Vacancy />
      </AdminLayout>
    </>
  );
};

export default AdminAddVacancy;

export const getServerSideProps = withAuth(async (ctx) => {
  return {
    props: {},
  };
});
