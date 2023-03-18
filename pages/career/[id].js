import React from "react";
import Head from "next/head";

import Navbar from "../../components/navbar";
import {
  BlogBanner,
  BlogTestimonial,
} from "../../components/blogs";
import ContactForm from"../../components/contact_form";
import Footnote from "../../components/footer";
import { CareerPage, SingleCareer } from "../../components/career";

const Careers = () => {
  return (
    <>
      <Head>
        <title>Webure Technologies - Career</title>
        <meta
          name="description"
          content="Full service agency for complete IT Solution"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <BlogBanner careers />
      {/*  */}
      <SingleCareer />
      <CareerPage />
      <BlogTestimonial />
      <ContactForm />
      <Footnote />
    </>
  );
};

export default Careers;
