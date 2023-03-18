import Head from "next/head";
import React from "react";
import { ActiveVacancy, VacanciesTab } from "../../../components/admin";
import { withAuth } from "../../../hooks";
import { AdminLayout } from "../../../layouts";

const AdminVacancies = () => {
  return (
    <>
      <Head>
        <title>Webure Technologies - Active Vacancies</title>
        <meta
          name="description"
          content="Full service agency for complete IT Solution"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Admin Layout */}
      <AdminLayout>
        <VacanciesTab />
        <ActiveVacancy />
      </AdminLayout>
    </>
  );
};

export default AdminVacancies;

export const getServerSideProps = withAuth(async (ctx) => {
  return {
    props: {},
  };
});
