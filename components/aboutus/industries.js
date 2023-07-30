import Link from "next/link";
import Image from "next/image";
import React from "react";
import Container from "../container";

export default function Industries() {
  return (
    
    <div className="relative">

      <div className="relative" style={{backgroundColor:"#ffffff"}}>
        <Container>
          <div>         
            <div className="p-5">
                <p className="font-bold font-Lexend text-lg leading-6 text-center">INDUSTRIES WE SERVE</p>
                <p className="font-Lexend text-lg leading-6 text-center">As a leader of our domain we help clients become one in theirs!</p>
                <p className="font-Lexend text-lg leading-6 text-center">At Webure, we successfully worked with clients of every type whether big business or small startups and belonging to diverse industries. When working with any client we start by understanding what the business is all about, the challenges faced and the competitors, Backed by our knowledge of different industries and their nitty-gitty aspects, we help you become the leaders of your domain.</p>
            </div>
          </div>
          <div>
            <div className="flex">
              <div className="col-md-6">
                <div>
                  <span>
                    <image className="content-center text-center" src="https://res.cloudinary.com/ds8lbdapq/image/upload/v1677098839/finans_pi8gjb.png" alt="Microfinance and NBFCs" />
                  </span>
                  <p className="font-Lexend text-base leading-6 text-justify">Owing to the rise in global customers, brands and competition to sustain, companies of every industry must strengthen themselves by being innovative, technologically updated in order to serve its customers in the best way. Serving its customers in multiple languages, 24 * 7 * 365 customer service, and various time zones and contact channels has become a mandate for any company to sustain the field.<br />Webure, supported by its Technology, Analytical power and Process Excellence methodologies, caters to outsourcing needs of vast array of industries with customized solutions to arrive at better and fruitful results.</p>
                </div>
              </div>
              <div className="col-md-3">
                <div className="ind_item_1">
                  <span className="img-containercy">
                    <image src="https://res.cloudinary.com/ds8lbdapq/image/upload/v1677098839/finans_pi8gjb.png" alt="Microfinance and NBFCs" />
                  </span>
                  <p className="justify-center font-Lexend font-medium">Microfinance and NBFCs</p>
                </div>
                <div className="ind_item_1">
                  <span className="img-containercy">
                    <image src="https://res.cloudinary.com/ds8lbdapq/image/upload/v1677098839/finans_pi8gjb.png" alt="Microfinance and NBFCs" />
                  </span>
                  <p className="justify-center font-Lexend font-medium">Microfinance and NBFCs</p>
                </div> 
                <div className="ind_item_1">
                  <span className="img-containercy">
                    <image src="https://res.cloudinary.com/ds8lbdapq/image/upload/v1677098839/finans_pi8gjb.png" alt="Microfinance and NBFCs" />
                  </span>
                  <p className="justify-center font-Lexend font-medium">Microfinance and NBFCs</p>
                </div>  
              </div>
              <div className="col-md-3">
                <div className="ind_item_1">
                  <span>
                    <image src="https://res.cloudinary.com/ds8lbdapq/image/upload/v1677098839/finans_pi8gjb.png" alt="Microfinance and NBFCs" />
                  </span>
                  <p className="text-center font-Lexend font-medium">Microfinance and NBFCs</p>
                </div>
              </div>

              <div className="col-md-3">
                <div className="ind_item_1">
                  <span>
                    <image src="https://res.cloudinary.com/ds8lbdapq/image/upload/v1677098839/finans_pi8gjb.png" alt="Microfinance and NBFCs" />
                  </span>
                  <p className="text-center font-Lexend font-medium">Microfinance and NBFCs</p>
                </div>
              </div> 

              <div className="col-md-3">
                <div className="ind_item_1">
                  <span>
                    <image src="https://res.cloudinary.com/ds8lbdapq/image/upload/v1677098839/finans_pi8gjb.png" alt="Microfinance and NBFCs" />
                  </span>
                  <p className="text-center font-Lexend font-medium">Microfinance and NBFCs</p>
                </div>
              </div>  
            </div>                          
          </div>
        </Container>
      </div>
    </div>
  );
}

//https://vindhyainfo.com/industries/
//https://www.konstantinfo.com/industries-we-serve.php
//https://www.krishaweb.com/industries-we-serve/
