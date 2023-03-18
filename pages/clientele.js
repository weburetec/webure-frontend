import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Testimonials from "../components/testimonials";
import Cta from "../components/cta";
import ClientLogo from "../components/clientlogo";
import LeadForm from "../components/leadgeneration";

export default function Clientele() {
  return (
    <>
      <Head>
        <title>Webure Technologies - Global Full Service Agency</title>
        <meta name="description" content="Full service agency for complete IT Solution"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Hero />
      <ClientLogo />
      <LeadForm />
      <Footer />
    </>
  );
}
