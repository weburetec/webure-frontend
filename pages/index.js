import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
//import SectionTitle from "../components/sectionTitle";
import Script from 'next/script';
//import { benefitOne, benefitTwo } from "../components/data";
//import Video from "../components/video";
//import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Testimonials from "../components/testimonials";
import Cta from "../components/cta";
import Stats from "../components/stats";
//import Products from "../components/products";
import Services from "../components/services";
import Process from "../components/process";
import Autoscroll from "../components/faqcomponent";
import Footnote from "../components/footer";

//import dynamic from "next/dynamic";

// const Video = dynamic(() => import("../components/video"));

// const Benefits = dynamic(() => import("../components/benefits"));
// const Footer = dynamic(() => import("../components/footer"));
// const Testimonials = dynamic(() => import("../components/testimonials"));
// const Cta = dynamic(() => import("../components/cta"));
// const Faq = dynamic(() => import("../components/faq"));

// const PopupWidget = dynamic(() => import("../components/popupWidget"));

export default function Home() {
  return (
    <>
      <Head>
        <title>Webure Technologies - Global Full Service Agency</title>
        <meta
          name="description"
          content="Full service agency for complete IT Solution"
        />
        <meta name="google-site-verification" content="qEhm8fazg24i0-X_AyqYDjLn-gLGWioqvW44ad_kySw" />    
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Hero />
      <Services />
      <Process />
      <Stats />
      <Autoscroll />
      <Testimonials />
      <Cta />
      <Footnote />
    
    <script>
  window.intercomSettings = {
    api_base: "https://api-iam.intercom.io",
    app_id: "tc2t1dfe"
  };
</script>

<script>
(function(){var w=window;var ic=w.Intercom;if(typeof ic==="function"){ic('reattach_activator');ic('update',w.intercomSettings);}else{var d=document;var i=function(){i.c(arguments);};i.q=[];i.c=function(args){i.q.push(args);};w.Intercom=i;var l=function(){var s=d.createElement('script');s.type='text/javascript';s.async=true;s.src='https://widget.intercom.io/widget/tc2t1dfe';var x=d.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);};if(document.readyState==='complete'){l();}else if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}})();
</script>
    
    
    </>
  );
}
