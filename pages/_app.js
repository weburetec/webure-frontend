import React from "react";
import "../css/tailwind.css";
import "react-multi-carousel/lib/styles.css";
import axios from "axios";
import { Provider } from "react-redux";
import { ToastContainer, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import Script from 'next/script';
import Router from 'next/router';

import { store } from "../store";

// baseURL is the url that will be used for all requests
import "./index.css"
axios.defaults.baseURL = process.env.NEXT_PUBLIC_APP_BASEURL;
axios.defaults.withCredentials = true;

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
     <Script strategy="lazyOnload" src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`} />
      <Script strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
            page_path: window.location.pathname,
          });
        `}
     </Script>
     <script>
        {`
          window.intercomSettings = {
            api_base: "https://api-iam.intercom.io",
            app_id: "tc2t1dfe"
          };
        `}
      </script>
      <script>
        (function(){var w=window;var ic=w.Intercom;if(typeof ic==="function"){ic('reattach_activator');ic('update',w.intercomSettings);}else{var d=document;var i=function(){i.c(arguments);};i.q=[];i.c=function(args){i.q.push(args);};w.Intercom=i;var l=function(){var s=d.createElement('script');s.type='text/javascript';s.async=true;s.src='https://widget.intercom.io/widget/tc2t1dfe';var x=d.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);};if(document.readyState==='complete'){l();}else if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}})();
      </script>
      
      <Component {...pageProps} />
      <ToastContainer
        theme="colored"
        autoClose={3000}
        limit={2}
        transition={Zoom}
        hideProgressBar={true}
        position="top-right"
      />
    </Provider>
  );
}

export default MyApp;
