import React from "react";
import "../css/tailwind.css";
import "react-multi-carousel/lib/styles.css";
import axios from "axios";
import { Provider } from "react-redux";
import { ToastContainer, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import Script from 'next/script';
import {useEffect} from 'react';
import {useRouter} from 'next/router';
import * as gtag from '../lib/gtag';
import { Router, Switch, Route, Link } from "react-router-dom";
import {
  load as loadIntercom,
  boot as bootIntercom,
  update as updateIntercom
} from "./intercom";

import { store } from "../store";

// baseURL is the url that will be used for all requests
import "./index.css"
axios.defaults.baseURL = process.env.NEXT_PUBLIC_APP_BASEURL;
axios.defaults.withCredentials = true;

function MyApp({ Component, pageProps }) {
    loadIntercom()
    bootIntercom()
    
    const router = useRouter()

    useEffect(() => {
      const handleRouteChange = (url) => {
        ga.pageview(url)
      }

      router.events.on('routeChangeComplete', handleRouteChange)
      return () => {
        router.events.off('routeChangeComplete', handleRouteChange)
      }
    }, [router.events])
  return (
    <Provider store={store}>
      <>
        <meta name="google-site-verification" content="qEhm8fazg24i0-X_AyqYDjLn-gLGWioqvW44ad_kySw" />
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_ANALYTICS_ID}`} strategy='afterInteractive' />
        <Script id="google-analytics" strategy='afterInteractive'>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', '${process.env.GOOGLE_ANALYTICS_ID}');
          `}
        </Script>
        <script id="cookieyes" type="text/javascript" src={'https://cdn-cookieyes.com/client_data/bace53ed40481e0ff17df74c/script.js'}></script>
        <Component {...pageProps} />
      </>
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
