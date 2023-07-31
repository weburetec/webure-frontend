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
                              <ul role="list" class="divide-y divide-gray-100 rounded-md px-10">
                                <li class="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                                  <div class="flex w-0 flex-1 items-center">
                                    <svg class="h-5 w-5 flex-shrink-0 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                      <path fill-rule="evenodd" d="M15.621 4.379a3 3 0 00-4.242 0l-7 7a3 3 0 004.241 4.243h.001l.497-.5a.75.75 0 011.064 1.057l-.498.501-.002.002a4.5 4.5 0 01-6.364-6.364l7-7a4.5 4.5 0 016.368 6.36l-3.455 3.553A2.625 2.625 0 119.52 9.52l3.45-3.451a.75.75 0 111.061 1.06l-3.45 3.451a1.125 1.125 0 001.587 1.595l3.454-3.553a3 3 0 000-4.242z" clip-rule="evenodd" />
                                    </svg>
                                    <div class="ml-4 flex min-w-0 flex-1 gap-2">
                                      <span class="font-Lexend text-base truncate font-medium">Best-suited for highly defined requirements</span>
                                    </div>
                                  </div>
                                </li>
                                <li class="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                                  <div class="flex w-0 flex-1 items-center">
                                    <svg class="h-5 w-5 flex-shrink-0 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                      <path fill-rule="evenodd" d="M15.621 4.379a3 3 0 00-4.242 0l-7 7a3 3 0 004.241 4.243h.001l.497-.5a.75.75 0 011.064 1.057l-.498.501-.002.002a4.5 4.5 0 01-6.364-6.364l7-7a4.5 4.5 0 016.368 6.36l-3.455 3.553A2.625 2.625 0 119.52 9.52l3.45-3.451a.75.75 0 111.061 1.06l-3.45 3.451a1.125 1.125 0 001.587 1.595l3.454-3.553a3 3 0 000-4.242z" clip-rule="evenodd" />
                                    </svg>
                                    <div class="ml-4 flex min-w-0 flex-1 gap-2">
                                      <span class="font-Lexend text-base truncate font-medium">Client pays a fixed price</span>
                                    </div>
                                  </div>
                                </li>
                                <li class="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                                  <div class="flex w-0 flex-1 items-center">
                                    <svg class="h-5 w-5 flex-shrink-0 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                      <path fill-rule="evenodd" d="M15.621 4.379a3 3 0 00-4.242 0l-7 7a3 3 0 004.241 4.243h.001l.497-.5a.75.75 0 011.064 1.057l-.498.501-.002.002a4.5 4.5 0 01-6.364-6.364l7-7a4.5 4.5 0 016.368 6.36l-3.455 3.553A2.625 2.625 0 119.52 9.52l3.45-3.451a.75.75 0 111.061 1.06l-3.45 3.451a1.125 1.125 0 001.587 1.595l3.454-3.553a3 3 0 000-4.242z" clip-rule="evenodd" />
                                    </svg>
                                    <div class="ml-4 flex min-w-0 flex-1 gap-2">
                                      <span class="font-Lexend text-base truncate font-medium">Minimum exposure to risk</span>
                                    </div>
                                  </div>
                                </li> 
                                <li class="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                                  <div class="flex w-0 flex-1 items-center">
                                    <svg class="h-5 w-5 flex-shrink-0 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                      <path fill-rule="evenodd" d="M15.621 4.379a3 3 0 00-4.242 0l-7 7a3 3 0 004.241 4.243h.001l.497-.5a.75.75 0 011.064 1.057l-.498.501-.002.002a4.5 4.5 0 01-6.364-6.364l7-7a4.5 4.5 0 016.368 6.36l-3.455 3.553A2.625 2.625 0 119.52 9.52l3.45-3.451a.75.75 0 111.061 1.06l-3.45 3.451a1.125 1.125 0 001.587 1.595l3.454-3.553a3 3 0 000-4.242z" clip-rule="evenodd" />
                                    </svg>
                                    <div class="ml-4 flex min-w-0 flex-1 gap-2">
                                      <span class="font-Lexend text-base truncate font-medium">Highly transparent development process</span>
                                    </div>
                                  </div>
                                </li>    
                              </ul>    
                              <p className="font-Lexend text-base leading-6 text-justify -mt-15 px-10">The fixed cost and time project model is best suited to projects where there is absolute clarity about the project requirements and specifications. We invite our clients to discuss and define the expected deliverables and timelines for this low risk project execution model and determine the mutually agreed fixed price and timeline. Our processes have been perfectly primed so as to ensure reliability and peak performance that is timely and budget bound.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-full md:w-1/2 xl:w-1/2 px-1">
                      <img className="px-5" alt="Webure Digital Transformation" srcset="https://res.cloudinary.com/weburetec/image/upload/v1690822035/ahgmowguyamfhyelivkt.png" src="https://res.cloudinary.com/weburetec/image/upload/v1690822035/ahgmowguyamfhyelivkt.png" decoding="async" data-nimg="future" loading="lazy" />
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
                      <img className="px-5" alt="Webure Digital Transformation" srcset="https://res.cloudinary.com/weburetec/image/upload/v1690822035/ahgmowguyamfhyelivkt.png" src="https://res.cloudinary.com/weburetec/image/upload/v1690822035/ahgmowguyamfhyelivkt.png" decoding="async" data-nimg="future" loading="lazy" />
                  </div>
                  <div className='col-lg-6 pt-5'>
                    <p className='font-Lexend font-bold text-xl text-start'>Dedicated Development Engagement Model</p>
                    <image className="-mt-2" src="https://res.cloudinary.com/weburetec/image/upload/v1661627664/LineDesign_e1wjte.svg" sizes="(max-width: 90px) 100vw, 47px" alt="Webure Digital Transformation"/>                    
                    <br />
                    <p className="font-Lexend text-base leading-6 text-justify -mt-15">The dedicated development facility model  is an excellent solution if you need a complete control over human and technical resources involved into the development process. DTM features a high level of transparency, security, flexibility and scalability.</p>
                    <br />
                    <p className="font-Lexend text-base leading-6 text-justify">Dedicated facility will be your extension of engineering / development center. Through such dedicated facilities, we offer the best skill sets, resources, flexibility and time-to-market advantages to the customers, taking all necessary efforts to protect the Intellectual Property Rights (IPR) of the customers. All rights to the IPR developed in the Development Facility vests with the Customer.</p>
                    <br />
                    <p className="font-Lexend text-base leading-6 text-justify">Dedicated Facility also provides a cost effective solution to customers requiring continuous offshore support. For such dedicated relationships, we also implement customer specific quality/process frameworks and teams are trained for the specific needs of a Client. Resources are paid on a retainer basis which is per month billing for resource.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
                              <p className='font-Lexend font-bold text-xl text-start ml-10'>Hybrid Engagement Model</p>
                              <p className="font-Lexend text-base leading-6 text-justify -mt-15 px-10">The hybrid engagement model is a combination of Dedicated Development and Fixed Price Model. The Business Analysis (BA) Team works with end customer on Dedicated Development Model in freezing the requirements. BA paid on retainer basis. Following this, a detailed scope document prepared. Based on scope document, price and timelines are provided.</p>
                              <br />
                              <p className="font-Lexend text-base leading-6 text-justify -mt-15 px-10"><strong>Project Commencement</strong> – If the quote is agreeable to you, we start with the project development as per the agreement. For any changes during the development process, there is a standard change procedure that is handled through a change control mechanism. The project is divided into multiple phases for ease of monitoring by the client. Payments are also phased out accordingly.</p>
                              <br />
                              <p className="font-Lexend text-base leading-6 text-justify -mt-15 px-10"><strong>Project Completion</strong> – Once the project is completed, our QA team tests its features and functionalities. After your approval on the same and the final payment, we transfer files to your server and close the project.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-full md:w-1/2 xl:w-1/2 px-1">
                      <img className="px-5" alt="Webure Digital Transformation" srcset="https://res.cloudinary.com/weburetec/image/upload/v1690822035/ahgmowguyamfhyelivkt.png" src="https://res.cloudinary.com/weburetec/image/upload/v1690822035/ahgmowguyamfhyelivkt.png" decoding="async" data-nimg="future" loading="lazy" />
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
                    <img className="px-5" alt="Webure Digital Transformation" srcset="https://res.cloudinary.com/weburetec/image/upload/v1690822035/ahgmowguyamfhyelivkt.png" src="https://res.cloudinary.com/weburetec/image/upload/v1690822035/ahgmowguyamfhyelivkt.png" decoding="async" data-nimg="future" loading="lazy" />
                  </div>
                  <div className='col-lg-6 pt-5'>
                    <p className='font-Lexend font-bold text-xl text-start'>Offshore Delivery Model</p>
                    <image className="-mt-2" src="https://res.cloudinary.com/weburetec/image/upload/v1661627664/LineDesign_e1wjte.svg" sizes="(max-width: 90px) 100vw, 47px" alt="Webure Digital Transformation"/>                    
                    <br />
                    <p className="font-Lexend text-base leading-6 text-justify -mt-15">The offshore delivery model entails that all project development, from initial study to testing, is done at Webure’s premises. This particular model works well in scenarios where the project goals are well defined and deviation from the same is unlikely.</p>
                    <br />
                    <p className="font-Lexend text-base leading-6 text-justify">Management and communication during the course of the project is the responsibility of our program managers – the internal clients, who work with tried and tested methodologies to ensure that delivery is as per schedule.</p>
                    <br />
                    <p className="font-Lexend text-base leading-6 text-justify">Offshore dedicated project team, works within predefined processes, thereby making this model the most cost effective.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
                              <p className='font-Lexend font-bold text-xl text-start ml-10'>Onsite Delivery Model</p>
                              <p className="font-Lexend text-base leading-6 text-justify -mt-15 px-10">Onsite delivery model entails that skilled Webure’s professionals are deployed on the client’s premises.</p>
                              <br />
                              <p className="font-Lexend text-base leading-6 text-justify -mt-15 px-10">This delivery model is viable only if fluidity is required in a project, if there is need for a specific resource type or if post-deployment support is imperative.</p>
                              <br />
                              <p className="font-Lexend text-base leading-6 text-justify -mt-15 px-10">From initial consultation to maintenance and support, our representatives are highly qualified and combine excellent business acumen and strong interpersonal skills.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-full md:w-1/2 xl:w-1/2 px-1">
                      <img className="px-5" alt="Webure Digital Transformation" srcset="https://res.cloudinary.com/weburetec/image/upload/v1690822035/ahgmowguyamfhyelivkt.png" src="https://res.cloudinary.com/weburetec/image/upload/v1690822035/ahgmowguyamfhyelivkt.png" decoding="async" data-nimg="future" loading="lazy" />
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
                    <img className="px-5" alt="Webure Digital Transformation" srcset="https://res.cloudinary.com/weburetec/image/upload/v1690822035/ahgmowguyamfhyelivkt.png" src="https://res.cloudinary.com/weburetec/image/upload/v1690822035/ahgmowguyamfhyelivkt.png" decoding="async" data-nimg="future" loading="lazy" />
                  </div>
                  <div className='col-lg-6 pt-5'>
                    <p className='font-Lexend font-bold text-xl text-start'>Hybrid Delivery Model</p>
                    <image className="-mt-2" src="https://res.cloudinary.com/weburetec/image/upload/v1661627664/LineDesign_e1wjte.svg" sizes="(max-width: 90px) 100vw, 47px" alt="Webure Digital Transformation"/>                    
                    <br />
                    <p className="font-Lexend text-base leading-6 text-justify -mt-15">This model, a combination of both onsite and offshore, is the best of both worlds, and results in optimized costs and maximized efficiency.</p>
                    <br />
                    <p className="font-Lexend text-base leading-6 text-justify">Onsite team will directly interact with the clients and will serve as consultants, program managers and developers, depending on project requirements. They will do requirement studies, design and development, while interfacing directly with clients.</p>
                    <br />
                    <p className="font-Lexend text-base leading-6 text-justify">Offshore outsourcing team will interact only with the onsite team and will provide additional crucial support, thereby reducing costs and implementation time.</p>
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
