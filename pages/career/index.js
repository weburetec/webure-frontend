import React from "react";
import Head from "next/head";

import Navbar from "../../components/navbar";
import {
  BlogBanner,
  BlogTestimonial,
} from "../../components/blogs";
import ContactForm from"../../components/contact_form";
import Footer from "../../components/footer";
import { CareerPage, JobsCareer, ShapeIcons } from "../../components/career";
import HiringProcess from "../../components/career/hiringprocess";

const Careers = () => {
  return (
    <>
      <Head>
        <title>Webure Technologies - Careers</title>
        <meta
          name="description"
          content="Full service agency for complete IT Solution"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <BlogBanner careers />
      {/*  */}
      <ShapeIcons />
      <CareerPage />
      <HiringProcess />
      <BlogTestimonial />
      <ContactForm />
      <Footer />
    </>
  );
};

export default Careers;
