import Head from "next/head";
import ContactForm from "../components/contactform";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Testimonials from "../components/testimonials";
import Cta from "../components/cta";
import Locations from "../components/location";
import CRM from "../components/crm";

export default function ContactUs() {
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
      <ContactForm />
      <CRM />
      <Locations />
      <Testimonials />
      <Cta />
      <Footer />
    </>
  );
}
