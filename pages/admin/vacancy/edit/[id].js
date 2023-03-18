import Head from "next/head";
import React from "react";
import { AddOrEditVacancy } from "../../../../components/admin";
import { withAuth } from "../../../../hooks";
import { AdminLayout } from "../../../../layouts";

const AdminAddVacancy = () => {
  return (
    <>
      <Head>
        <title>Webure Technologies - Edit Vacancy</title>
        <meta
          name="description"
          content="Full service agency for complete IT Solution"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Admin Layout */}
      <AdminLayout>
        <AddOrEditVacancy />
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
