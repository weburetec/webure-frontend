//import React from "react";
import Container from "./container";
import Link from "next/link";

export default function Cta() {
  return (
      <div className="mx-auto max-w-7xl ctabox">
        <div className="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_module" style={{}} data-hs-cos-general-type="widget" data-hs-cos-type="module">
          <section className="banner cta section-orange ">
            <div className="page-center white-text">
              <div className="row-fluid flex-wrap flex-middle">
                <div className="span8 content">
                  <div className="content-inner">
                    <h3 className="font-Lexend text-2xl"><strong>Ready to take control of your contracts?</strong></h3>
                    <p className="font-Lexend text-xl">Start your free trial of Webure Technologies today and see how easy it is to take to your idea to a profitable business.</p>
                  </div>
                </div>
                <div className="span4 buttons text-right">        
                  <a className="button font-Lexend text-lg" href="/contactus">Start Your Free Trial</a>  
                  <br />
                  <br />       
                  <a className="button font-Lexend text-xl ghost calendar" href="/contactus">Request a Demo</a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
  );
}
