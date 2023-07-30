import Head from "next/head";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Testimonials from "../components/testimonials";
import Cta from "../components/cta";
import Locations from "../components/location";
import AboutUs from "../components/aboutus/aboutus";
import Hero from "../components/hero";
import Industries from "../components/aboutus/industries";
import WhyWebure from "../components/aboutus/whywebure";
import ValuetabCTA from "../components/aboutus/valuetab";
import CoreValues from "../components/aboutus/values";

export default function EngagementPage() {
  return (
    <>
      <Head>
        <title>Webure Technologies - Global Full Service Agency</title>
        <meta
          name="description"
          content="Full service agency for complete IT Solution"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Hero />
      <AboutUs />
      <CoreValues />
      <ValuetabCTA />
      <WhyWebure />
      <Industries />
      <Locations />
      <Testimonials />
      <Cta />
      <Footer />
    </>
  );
}
