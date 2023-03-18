import React from "react";
import Head from "next/head";

import Navbar from "../../components/navbar";
import {
  BlogBanner,
  BlogContract,
  BlogTestimonial,
} from "../../components/blogs";
import {
  BlogDetail,
  BlogWorkProcess,
  Scenario,
  TagsKeywords,
} from "../../components/blog";
import Footnote from "../../components/footer";

const Blog = () => {
  return (
    <>
      <Head>
        <title>Webure Technologies - Blog</title>
        <meta
          name="description"
          content="Full service agency for complete IT Solution"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <BlogBanner />
      <TagsKeywords />
      <BlogDetail />
      <BlogWorkProcess />
      <Scenario />
      <BlogTestimonial />
      <BlogContract />
      <Footnote />
    </>
  );
};

export default Blog;
