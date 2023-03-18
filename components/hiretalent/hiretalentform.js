import React from "react";

const Tabs = ({ color }) => {
  const [openTab, setOpenTab] = React.useState(1);
  return (
    <>
    <br />
    <br />
    <br />
    <div className="container px-20 flex flex-wrap">

    <div className="toggle-box">
      <div className="sunsetred">
        <div className="cont-btns sunsetred"> 
          <a className="cta-button myanchor sunsetred font-Lexend text-2xl font-normal" data-sec="talent" onClick={e => {e.preventDefault();setOpenTab(1);}} data-toggle="tab" href="#link1" role="tablist">Hire a Talent</a>
        </div>
      </div>
      <div className="sunsetred">
        <div className="app-btns sunsetred"> 
          <a className="cta-button myanchor sunsetred font-Lexend text-2xl font-normal" data-sec="apply" onClick={e => {e.preventDefault(); setOpenTab(2);}} data-toggle="tab" href="#link2" role="tablist">Apply for a Job</a>
        </div>
      </div>
      <div className="sunsetred">
        <div className="st-btns sunsetred"> 
          <a className="cta-button myanchor sunsetred font-Lexend text-2xl font-normal" data-sec="project" onClick={e => { e.preventDefault(); setOpenTab(3);}} data-toggle="tab" href="#link3" role="tablist">Start A Project</a>
        </div>
      </div>
    </div>



      <div className="container px-10">
          <div className="relative flex flex-col min-w-0 break-words border border-[#c3bebc] bg-white w-full mb-6">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? "block px-10" : "hidden"} id="link1">
                  <div className="font-Lexend">
                    <form id="hire-talent-form" method="post" encType="multipart/form-data"> 
                      <input type="hidden" name="action" value="upl_new_homepage_schedule_a_call" /> 
                      <input type="hidden" name="home_action" value="upl_new_homepage_schedule_a_call" /> 
                      <input type="hidden" name="page_title" value="Hire Top Indian Talent from India's Largest Talent Network | Uplers" />
                      <div className="col-12 col-sm-12">
                        <p className="font-Lexend text-2xl text-center font-semibold">Hire a Talent</p>
                        <p className="font-Lexend text-xl text-center font-normal text-gray-500">One of the Tech Experts from Webure Technologies will reach out to you within the next 48 business hours.</p>
                      </div>
                      <br />
                      <br />
                      <div className="row justify-content-center">
                        <div className="col-sm-12 col-md-4">
                          <div className="form-group"> 
                            <input type="text" name="full_name" placeholder="Name*" />
                          </div>
                        </div>
                        <div className="col-sm-12 col-md-4">
                          <div className="form-group"> 
                            <input type="Email" name="email" placeholder="Work Email*" />
                          </div>
                        </div>
                        <div className="col-sm-12 col-md-4">
                          <div className="form-group"> 
                            <input type="text" name="phone" placeholder="Phone*" />
                          </div>
                        </div>
                        <div className="col-md-655 col-md-6 pad-adjs-r"> 
                          <label className="btm-lbl">What role are you looking to hire?*</label>
                          <div className="form-group input-multi"> 
                            <input type="text" name="talent_role" placeholder="Enter Talent role*" className="multi-search ui-autocomplete-input" autoComplete="off" />
                          </div>
                        </div>
                        <div className="col-md-655 col-md-6 pad-adjs-l"> 
                          <label className="btm-lbl">How experienced should the talent be?*</label>
                          <div className="form-group"> 
                            <div className="rev-select">
                              <select name="select-seniority-level" className="select-hidden align-text-bottom">
                                <option value="Junior level (1-3 Years of experience)">Junior level (1-3 Years of experience)</option>
                                <option value="Mid level (3-5 Years of experience)">Mid level (3-5 Years of experience)</option>
                                <option value="Senior level (5-8 Exp. Years) ">Senior level (5-8 Exp. Years)</option> 
                              </select>
                              <ul className="select-options align-text-bottom" style={{display:"none"}}>
                                <li rel="Junior level (1-3 Years of experience)">Junior level (1-3 Years of experience)</li>
                                <li rel="Mid level (3-5 Years of experience)">Mid level (3-5 Years of experience)</li>
                                <li rel="Senior level (5-8 Exp. Years) ">Senior level (5-8 Exp. Years)</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className=" col-md-655  col-md-6 pad-adjs-r"> 
                          <label className="btm-lbl">Share the job description*</label>
                          <div className="form-group input03 or-adjs">
                            <div className="filemain">
                              <div className="fileupload"> 
                                <image className="mr-2" src="https://www.uplers.com/wp-content/themes/uplers/assets/images/hire-a-talent/file-icon.svg" alt="Webure Technologies" /> 
                                <div className="file-upload-wrapper">
                                  <input type="file" id="certifications_docs" name="certifications_docs" className="custom-file-upload-hidden" style= {{position:"absolute", left:"-9999px"}}  tabIndex="-1" />
                                  <input type="text" className="file-upload-input" placeholder="Drag and drop to browse your files*" style= {{position:"absolute"}} disabled="" />
                                  <button type="button" className="file-upload-button" tabIndex="-1">Select a File</button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-655 col-md-6 pad-adjs-l"> 
                          <label className="btm-lbl txt-fc" style={{visibility:"hidden"}}>placeholder text</label>
                          <div className="form-group">
                            <textarea name="message" style={{height:"85px"}} placeholder="Add links to the job posts or a brief description of the roles and responsibilities*"></textarea>
                          </div>
                        </div>
                        <div className="col-sm-12">
                          <div className="submit-btn text-center"> 
                            <button className="w-full text-lg p-5 text-justify text-gray-500 font-Lexend btn btn-deep-pink float-center sm-float-none">Submit</button>
                          </div>
                          <div className="form-loader" style={{display:"none"}}>
                            <image src="https://www.uplers.com/wp-content/themes/uplers/assets/images/loader.svg" alt="loader" />
                          </div>
                        </div>
                        <div className="ajax-message"></div>
                      </div>
                      <input type="hidden" name="hubspot_portal" value="UTS" />
                      <input type="hidden" name="current_shift_time" value="4:01 AM - 6:00 PM" />
                    </form>
                  </div>
                </div>
                <div className={openTab === 2 ? "block px-10" : "hidden"} id="link2">
                  <div className="font-Lexend">
                    <form id="apply_form" method="post" encType="multipart/form-data"> 
                      <input type="hidden" name="action" value="upl_new_homepage_schedule_a_call" /> 
                      <input type="hidden" name="home_action" value="upl_new_homepage_schedule_a_call" /> 
                      <input type="hidden" name="page_title" value="Hire Top Indian Talent from India's Largest Talent Network | Uplers" />
                      <div className="col-12 col-sm-12">
                        <p className="font-Lexend text-2xl text-center font-semibold">Submit your resume</p>
                        <p className="font-Lexend text-xl text-center font-normal text-gray-500">Fill in the form to join India&apos;s largest talent Network of 50,000+ Tech professionals. Share your resume with us today</p>
                      </div>
                      <br />
                      <br />
                      <div className="row justify-content-center">
                        <div className="col-sm-12 col-md-4">
                          <div className="form-group"> 
                            <input type="text" name="full_name" placeholder="Name*" />
                          </div>
                        </div>
                        <div className="col-sm-12 col-md-4">
                          <div className="form-group"> 
                            <input type="Email" name="email" placeholder="Work Email*" />
                          </div>
                        </div>
                        <div className="col-sm-12 col-md-4">
                          <div className="form-group"> 
                            <input type="text" name="phone" placeholder="Phone*" />
                          </div>
                        </div>
                        <div className="col-md-655 col-md-6 pad-adjs-r"> 
                          <label className="btm-lbl">What role are you looking to hire?*</label>
                          <div className="form-group input-multi"> 
                            <input type="text" name="talent_role" placeholder="Enter Talent role*" className="multi-search ui-autocomplete-input" autoComplete="off" />
                          </div>
                        </div>
                        <div className="col-md-655 col-md-6 pad-adjs-l"> 
                          <label className="btm-lbl">How experienced should the talent be?*</label>
                          <div className="form-group"> 
                            <div className="rev-select">
                              <select name="select-seniority-level" className="select-hidden align-text-bottom">
                                <option value="Junior level (1-3 Years of experience)">Junior level (1-3 Years of experience)</option>
                                <option value="Mid level (3-5 Years of experience)">Mid level (3-5 Years of experience)</option>
                                <option value="Senior level (5-8 Exp. Years) ">Senior level (5-8 Exp. Years)</option> 
                              </select>
                              <ul className="select-options align-text-bottom" style={{display:"none"}}>
                                <li rel="Junior level (1-3 Years of experience)">Junior level (1-3 Years of experience)</li>
                                <li rel="Mid level (3-5 Years of experience)">Mid level (3-5 Years of experience)</li>
                                <li rel="Senior level (5-8 Exp. Years) ">Senior level (5-8 Exp. Years)</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className=" col-md-655  col-md-6 pad-adjs-r"> 
                          <label className="btm-lbl">Share the job description*</label>
                          <div className="form-group input03 or-adjs">
                            <div className="filemain">
                              <div className="fileupload"> 
                                <image className="mr-2" src="https://www.uplers.com/wp-content/themes/uplers/assets/images/hire-a-talent/file-icon.svg" alt="webure" /> 
                                <div className="file-upload-wrapper">
                                  <input type="file" id="certifications_docs" name="certifications_docs" className="custom-file-upload-hidden" style= {{position:"absolute", left:"-9999px"}}  tabIndex="-1" />
                                  <input type="text" className="file-upload-input" placeholder="Drag and drop to browse your files*" style= {{position:"absolute"}} disabled="" />
                                  <button type="button" className="file-upload-button" tabIndex="-1">Select a File</button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-655 col-md-6 pad-adjs-l"> 
                          <label className="btm-lbl txt-fc" style={{visibility:"hidden"}}>placeholder text</label>
                          <div className="form-group">
                            <textarea name="message" style={{height:"85px"}} placeholder="Add links to the job posts or a brief description of the roles and responsibilities*"></textarea>
                          </div>
                        </div>
                        <div className="col-sm-12">
                          <div className="submit-btn text-center"> 
                            <button className="w-full text-lg p-5 text-justify text-gray-500 font-Lexend btn btn-deep-pink float-center sm-float-none">Submit</button>
                          </div>
                          <div className="form-loader" style={{display:"none"}}>
                            <image src="https://www.uplers.com/wp-content/themes/uplers/assets/images/loader.svg" alt="loader" />
                          </div>
                        </div>
                        <div className="ajax-message"></div>
                      </div>
                      <input type="hidden" name="hubspot_portal" value="UTS" />
                      <input type="hidden" name="current_shift_time" value="4:01 AM - 6:00 PM" />
                    </form>
                  </div>
                </div>
                <div className={openTab === 3 ? "block px-10" : "hidden"} id="link3">
                  <div className="font-Lexend">
                    <form id="apply_form" method="post" encType="multipart/form-data"> 
                      <input type="hidden" name="action" value="upl_new_homepage_schedule_a_call" /> 
                      <input type="hidden" name="home_action" value="upl_new_homepage_schedule_a_call" /> 
                      <input type="hidden" name="page_title" value="Hire Top Indian Talent from India's Largest Talent Network | Uplers" />
                      <div className="col-12 col-sm-12">
                        <p className="font-Lexend text-2xl text-center font-semibold">Start a Project</p>
                        <p className="font-Lexend text-xl text-center font-normal text-gray-500">Engage with us for your project or campaign requirements. Please share all the details, and we&apos;ll reach out to you with the next steps</p>
                      </div>
                      <br />
                      <br />
                      <div className="row justify-content-center">
                        <div className="col-sm-12 col-md-4">
                          <div className="form-group"> 
                            <input type="text" name="full_name" placeholder="Name*" />
                          </div>
                        </div>
                        <div className="col-sm-12 col-md-4">
                          <div className="form-group"> 
                            <input type="Email" name="email" placeholder="Work Email*" />
                          </div>
                        </div>
                        <div className="col-sm-12 col-md-4">
                          <div className="form-group"> 
                            <input type="text" name="phone" placeholder="Phone*" />
                          </div>
                        </div>
                        <div className="col-md-655 col-md-6 pad-adjs-r"> 
                          <label className="btm-lbl">What role are you looking to hire?*</label>
                          <div className="form-group input-multi"> 
                            <input type="text" name="talent_role" placeholder="Enter Talent role*" className="multi-search ui-autocomplete-input" autoComplete="off" />
                          </div>
                        </div>
                        <div className="col-md-655 col-md-6 pad-adjs-l"> 
                          <label className="btm-lbl">How experienced should the talent be?*</label>
                          <div className="form-group"> 
                            <div className="rev-select">
                              <select name="select-seniority-level" className="select-hidden align-text-bottom">
                                <option value="SEO">SEO</option>
                                <option value="SEM">SEM</option>
                                <option value="Wordpress Development">Wordpress Development</option>
                                <option value="Hubspot Development">Hubspot Development</option>
                                <option value="Design">Design</option>
                                <option value="Other">Other</option> 
                              </select>
                              <ul className="select-options align-text-bottom" style={{display:"none"}}>
                                <li rel="SEO">SEO</li>
                                <li rel="SEM">SEM</li>
                                <li rel="Wordpress Development">Wordpress Development</li>
                                <li rel="Hubspot Development">Hubspot Development</li>
                                <li rel="Design">Design</li>
                                <li rel="Other">Other</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className=" col-md-655  col-md-6 pad-adjs-r"> 
                          <label className="btm-lbl">Share the job description*</label>
                          <div className="form-group input03 or-adjs">
                            <div className="filemain">
                              <div className="fileupload"> 
                                <image className="mr-2" src="https://www.uplers.com/wp-content/themes/uplers/assets/images/hire-a-talent/file-icon.svg" alt="Webure" /> 
                                <div className="file-upload-wrapper">
                                  <input type="file" id="certifications_docs" name="certifications_docs" className="custom-file-upload-hidden" style= {{position:"absolute", left:"-9999px"}}  tabIndex="-1" />
                                  <input type="text" className="file-upload-input" placeholder="Drag and drop to browse your files*" style= {{position:"absolute"}} disabled="" />
                                  <button type="button" className="file-upload-button" tabIndex="-1">Select a File</button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-655 col-md-6 pad-adjs-l"> 
                          <label className="btm-lbl txt-fc" style={{visibility:"hidden"}}>placeholder text</label>
                          <div className="form-group">
                            <textarea name="message" style={{height:"85px"}} placeholder="Add links to the job posts or a brief description of the roles and responsibilities*"></textarea>
                          </div>
                        </div>
                        <div className="col-sm-12">
                          <div className="submit-btn text-center"> 
                            <button className="w-full text-lg p-5 text-justify text-gray-500 font-Lexend btn btn-deep-pink float-center sm-float-none">Submit</button>
                          </div>
                          <div className="form-loader" style={{display:"none"}}>
                            <image src="https://www.uplers.com/wp-content/themes/uplers/assets/images/loader.svg" alt="loader" />
                          </div>
                        </div>
                        <div className="ajax-message"></div>
                      </div>
                      <input type="hidden" name="hubspot_portal" value="UTS" />
                      <input type="hidden" name="current_shift_time" value="4:01 AM - 6:00 PM" />
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default function TabsRender() {
  return (
    <>
      <Tabs color="#581C87" />;
    </>
  );
}