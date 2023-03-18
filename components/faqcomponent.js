import React from "react";
import Faq from "../components/faq";
import SectionTitle from "../components/sectionTitle";
import Script from 'next/script';

export default function Process(props) {
    return (
        <div className="container">
            <div className="container pt-8">
		        <div className="font-Lexend text-4xl font-bold text-center">Digital<span className="font-Lexend text-4xl font-bold"> Transformations</span></div>
                <p className="font-Lexend text-base text-center text-gray-500">Our mission is to help you create human-centric digital experiences that capture the hearts and minds of your customers.</p>
				<p className=" sub_innovative_sec text-center"> </p>
		        <div className="row pt-8">
			        <div className="col-sm-6 transform_col">
			            <div className="row">
					        <div className="col-sm-6 -mt-10">
                                <div className="p-5 choose_color_bg">
                                    <h4 className="font-Lexend text-base text-center font-semibold">IT Staff Augmentation</h4>
                                    <p className="font-Lexend text-sm text-justify">With Webure Technologies, achieving your goals is no longer blocked by talent gaps. From web development to system administration to business analysis—here you&apos;ll find experts in all of today&apos;s hottest skillsets on contract or full-time staff at affordable rates so you can get the most out of every dollar.</p>
                                </div>
				            </div>
				            <div className="col-sm-6">
                                <div className="p-5 choose_color_bg2 text-center">
                                    <h4 className="font-Lexend text-base font-semibold">Mobile App Development</h4>
                                    <p className="font-Lexend text-sm text-justify">Build strong digital connections with our meticulous user-centred design approach underpinned by years of experience in mobile app development. We’re passionate about giving your business exceptional apps.</p>
                                </div>
                                <br />
                                <br />
                                <div className="p-5 choose_color_bg3 text-center">
                                    <h4 className="font-Lexend text-base font-semibold">Web Designing</h4>
                                    <p className="font-Lexend text-sm text-justify">We have deep experience designing everything from simple static one-page sites to large, enterprise-level web applications that create measurable value for our customers.</p>
                                </div>
                            </div>
		                </div>
				    </div>
			        <div className="col-sm-6 transform_col pt-10">
    					<div className="choose_us pl-10">
					        <div className="row border1">
					            <div className="p-5 col-sm-6 border-right">
			                        <h5 className="font-Lexend text-base font-semibold">Digital Transformation</h5>
				                    <p className="font-Lexend text-sm text-justify">You’ve got an idea for a completely new product, service, or business model. We can help you turn that into a real solution—with lean product development and digital transformation services from the ground up.</p>	 
						        </div>
						        <div className="p-5 col-sm-6">
					                <h5 className="font-Lexend text-base font-semibold">Enterprise Application</h5>
					                <p className="font-Lexend text-sm text-justify">Through offshore agile development methods, we ensure high-quality productivity hence reducing the development and maintenance cost of the applications by 30% or more.</p> 
				                </div>
					        </div>
					        <div className="row">
				                <div className="p-5 col-sm-6 border-right">
					                <h5 className="font-Lexend text-base font-semibold">Automation &amp; DevOps</h5>
						            <p className="font-Lexend text-sm text-justify">We are devops experts. Our team is agile, automates the entire development lifecycle with a focus on continuous integration and continuous delivery of products.</p>
						        </div>
                                <div className="p-5 col-sm-6">
                                    <h5 className="font-Lexend text-base font-semibold">Process Automation</h5>
                                    <p className="font-Lexend text-sm text-justify">Automate data-centric, time-consuming, and repetitive processes to increase overall productivity and reduce operational expenses.</p>
                                </div>
					        </div>
				        </div>
		            </div>
                </div>
            </div>
        </div>
    );
}