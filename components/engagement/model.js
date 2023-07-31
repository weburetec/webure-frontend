import Image from "next/image";
import React from "react";
import Container from "../container";
import { Player, Controls } from '@lottiefiles/react-lottie-player';

export default function EngageModels(props) {  
  return (
    <section className="aboutus-section clearfix">
      <Container>
        <div className='justify-center items-center content-center'>
          <p className='font-Lexend font-bold text-2xl text-center'>Award Winning development company located in India</p>
          <p className=' text-purple-900 text-center font-Lexend text-xl'>We create design and develop solutions for all types of <span className="bg-pink-100 text-pink-800 text-lg font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-pink-200 dark:text-pink-900">web</span> and <br /><span className="bg-yellow-100 text-yellow-800 text-lg font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-yellow-200 dark:text-yellow-900">mobile</span> products with <span className="bg-purple-100 text-purple-800 text-lg font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-purple-200 dark:text-purple-900">digital marketing solution</span></p>
        </div>
        <div>
          <div className='relative'>
            <div className="max-w-screen-xl bg-white dark:bg-gray-800 mx-auto relative px-30">
              <div className='justify-center items-center content-center'>
                <div className='items-center justify-center py-6 md:justify-center md:space-x-10'>
                  <div className="flex flex-wrap justify-center -mx-4">
                    <div className="w-full md:w-1/2 xl:w-1/2 px-1">
                      <div className="w-full mx-auto mb-10">
                        <div className="relative rounded-lg overflow-hidden">
                          <div className='justify-center items-center content-center'>
                            <div className='ml-5 justify-center items-center content-center col-span-2'>
                              <span className="font-Lexend bg-green-100 text-green-800 text-sm font-medium ml-10 mr-2 px-2.5 py-0.5 rounded dark:bg-green-200 dark:text-green-900 uppercase">Engagement Models</span>
                              <p className='font-Lexend font-bold text-xl text-start ml-10'>Fixed Cost Engagement Model</p>
                              <p className="font-Lexend text-base leading-6 text-justify -mt-15 px-10">Benefits:-</p>
                              <ul className="font-Lexend text-base leading-6 text-justify -mt-15 px-10">
                                <li>Best-suited for frozen and highly defined requirements</li>
                                <li>Client pays a fixed price</li>
                                <li>Minimum exposure to risk</li>
                                <li>Highly transparent development process</li>
                              </ul>
                              <p className="font-Lexend text-base leading-6 text-justify -mt-15 px-10">The fixed cost and time project model is best suited to projects where there is absolute clarity about the project requirements and specifications. We invite our clients to discuss and define the expected deliverables and timelines for this low risk project execution model and determine the mutually agreed fixed price and timeline. Our processes have been perfectly primed so as to ensure reliability and peak performance that is timely and budget bound.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-full md:w-1/2 xl:w-1/2 px-1">
                      <image src="https://www.weburetech.com/static/about-img-6-429b32c76fc0e486eda635ad9c82e84b.webp" alt="Webure Digital Transformation"/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='relative -mt-12'>
          <div className="max-w-screen-xl bg-white dark:bg-gray-800 mx-auto relative px-30">
            <div className='justify-center items-center content-center'>
              <div className='items-center justify-center py-6 md:justify-center md:space-x-10'>
                <div className='row-fluid -mt-5'>
                  <div className='col-lg-6'>
                    <image src="https://res.cloudinary.com/weburetec/image/upload/v1661625213/digital_transformation_yiqxsf.svg" alt="Webure Digital Transformation"/>                    
                  </div>
                  <div className='col-lg-6 pt-5'>
                    <p className='font-Lexend font-bold text-3xl text-start'>We Drive Transformation</p>
                    <image className="-mt-2" src="https://res.cloudinary.com/weburetec/image/upload/v1661627664/LineDesign_e1wjte.svg" sizes="(max-width: 90px) 100vw, 47px" alt="Webure Digital Transformation"/>                    
                    <br />
                    <p className="font-Lexend text-base leading-6 text-justify -mt-15">In our client&apos;s businesses by embracing a bold spirit of innovation with an unwavering commitment. Our multidisciplinary team implement a dynamic formula of an unmatched combination of perspectives, technology, data, operational know-how to deliver capabilities across sectors globally for a more sustainable tomorrow.</p>
                    <br />
                    <p className="font-Lexend text-base leading-6 text-justify">Sincere at work, crazy at workplace – we are a bunch of creative people, passionate about technology and curious what we can do with it. Our passion to build great things brought us together and a decade long professional journey has taught us how to build cutting-edge web projects & deliver them on time.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>       
       </Container>
    </section>
  );
}
