import jwtDecode from "jwt-decode";
import Head from "next/head";
import React from "react";
import { Profile } from "../../../components/admin";
import { withAuth } from "../../../hooks";
import { AdminLayout } from "../../../layouts";

const AdminProfile = ({ accessToken }) => {
  const { user } = jwtDecode(accessToken);

  return (
    <>
      <Head>
        <title>Webure Technologies - Admin Profile</title>
        <meta
          name="description"
          content="Full service agency for complete IT Solution"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Admin Layout */}
      <AdminLayout>
        <Profile {...{ user }} />
      </AdminLayout>
    </>
  );
};

export default AdminProfile;

export const getServerSideProps = withAuth(async (ctx) => {
  const { req } = ctx || {};

  const accessToken = req.cookies._user_;



  // let accessToken;
  // if (typeof window !== "undefined") {
  //   try {
  //     accessToken = JSON.parse(window.localStorage.getItem("_user_"));
  //   } catch (e) {
  //     console.error("Failed to parse token from localStorage", e);
  //   }
  // }


  return {
    props: { accessToken },
  };
});
