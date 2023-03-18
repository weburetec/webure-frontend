import React from "react";
import Container from "../container";

export default function Howhire() {
  return (
    <section className="overflow-hidden">
      <div className="container mx-auto px-4 gap-2 p-10">
        <div className="mx-auto max-w-2xl md:text-center">
          <span className="hiring">WHY WEBURE TECHNOLOGIES</span>
          <h4 className="w-full text-4xl font-Lexend font-bold text-gray-500 leading-snug">How to get started</h4>
          <p className="contactsectiondescription font-base text-justify text-gray-500 font-Lexend text-25 font-weight-400">We at Webure Technologies takes care of everything beforehand. We source vets, matches and manages all talents</p>
        </div>
      </div>
      <br />
      <div className="manage-section container">
        <div className="row">
          <div className="hirecol6 pt-2">
            <div className="manage-acc">    
              <ul className="manage-boxes active">
                <li className="manage-box font-Lexend text-base">
                  <p className="manage-head">Share the Job Description</p>
                  <p className="manage-desc" style={{display:"block"}}>Share complete roles and responsibilities, must-have skills, necessary market experience and budget.</p>
                </li>
                <li className="manage-box font-Lexend text-base">
                  <p className="manage-head">Review &amp; Shortlist the Matches</p>
                  <p className="manage-desc" style={{display:"block"}}>We&apos;ll match the best-fitted profile(s) in the next 48 hours for your review. You shortlist and share the time slots for us to schedule interviews.</p>
                </li>
                <li className="manage-box font-Lexend text-base">
                  <p className="manage-head">Interview &amp; Hire</p>
                  <p className="manage-desc" style={{display:"block"}}>Assess them until you are confident and provide feedback.</p>
                </li>
                <li className="manage-box font-Lexend text-base">
                  <p className="manage-head">Onboard &amp; Manage</p>
                  <p className="manage-desc" style={{display:"block"}}>We&apos;ll sort all the legalities and contracts with the talent, ensure a smooth onboarding and help you manage the talent.</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="hirecol6">
            <div className="manage-lists font-Lexend text-base">
              <ul>
                <li className="manage-list">
                  <figure> <img src="https://www.uplers.com/wp-content/themes/uplers/assets/images//home-new/correct.svg" alt="correct" /></figure>
                  <p>Top 3.5% Talent Network</p>
                </li>
                <li className="manage-list">
                  <figure> <img src="https://www.uplers.com/wp-content/themes/uplers/assets/images//home-new/correct.svg" alt="correct" /></figure>
                  <p>100+ High-in-demand Tech Skills</p>
                </li>
                <li className="manage-list">
                  <figure> <img src="https://www.uplers.com/wp-content/themes/uplers/assets/images//home-new/correct.svg" alt="correct" /></figure>
                  <p>70% First Interview Selection Ratio</p>
                </li>
                <li className="manage-list">
                  <figure> <img src="https://www.uplers.com/wp-content/themes/uplers/assets/images//home-new/correct.svg" alt="correct" /></figure>
                  <p>98% Job Acceptance Ratio</p>
                </li>
                <li className="manage-list">
                  <figure> <img src="https://www.uplers.com/wp-content/themes/uplers/assets/images//home-new/correct.svg" alt="correct" /></figure>
                  <p>2X Employee Retention Rate</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

  );
}