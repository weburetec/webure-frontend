import React from "react";
import Head from "next/head";

import Navbar from "../../components/navbar";

import {
  BlogBanner,
  BlogCard,
  BlogContract,
  BlogTestimonial,
  CaseStudyPost,
} from "../../components/blogs";

import Footnote from "../../components/footer";

const Blogs = () => {
  return (
    <>
      <Head>
        <title>Webure Technologies - Blogs</title>
        <meta
          name="description"
          content="Full service agency for complete IT Solution"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <BlogBanner blogs />
      <BlogCard />
      <CaseStudyPost />
      <BlogTestimonial />
      <BlogContract />
      <Footnote />
    </>
  );
};

export default Blogs;
