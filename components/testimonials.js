import Image from "next/image";
import React from "react";
import Container from "./container";

import userOneImg from "../public/img/user1.jpg";
import userTwoImg from "../public/img/user2.jpg";
import userThreeImg from "../public/img/user3.jpg";

export default function Testimonials() {
  return (
    <section id="testimonials" aria-label="What our customers are saying" className="testbox py-10 sm:py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto  max-w-2xl md:text-center">
          <span className="hiring123 hiring">TESTIMONIALS</span>
          <h2 className="font-display hiringtest text-3xl tracking-tight text-slate-900 sm:text-4xl">Loved by businesses worldwide.</h2>
          <p className="mt-4 font-Lexend text-lg tracking-tight text-slate-700">Webure designs websites with simplicity in mind, which means you spend less time managing your content and more time on higher value work. With our intuitive user interface and help from your dedicated Implementation Manager, you&apos;ll start seeing results in days - not months.</p>
        </div>
        <ul role="list" className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mt-20 lg:max-w-none lg:grid-cols-3">
          <li>
            <ul role="list" className="flex flex-col gap-y-6 sm:gap-y-8">
              <li>
                <figure className="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10 border border-[#581C87]">
                  <svg aria-hidden="true" width="105" height="78" className="absolute top-6 left-6 fill-slate-200">
                    <path d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z"></path>
                  </svg>
                  <blockquote className="relative">
                    <p className="text-lg tracking-tight text-slate-900 font-Lexend pt-8 pl-5">Through their high-level execution, flawless customer support, and responsive approach, Webure Technologies delivered a website that effectively generates income.</p>
                  </blockquote>
                  <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                    <div>
                      <div className="font-display text-lg text-slate-900 font-Lexend">Sheryl Berge</div>
                      <div className="mt-1 text-sm text-slate-500 font-Lexend leading-3">CEO at Lynch LLC</div>
                    </div>
                    <div className="overflow-hidden rounded-full bg-slate-50">
                      <img alt="" srcSet="https://salient.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar-1.c78616b7.png&amp;w=64&amp;q=75  1x, https://salient.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar-1.c78616b7.png&amp;w=128&amp;q=75 2x" src="https://salient.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar-1.c78616b7.png&w=64&q=75" width="56" height="56" decoding="async" data-nimg="future" className="h-14 w-14 object-cover" loading="lazy"/>
                    </div>
                  </figcaption>
                </figure>
              </li>
              <li>
                <figure className="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10 border border-[#581C87]">
                  <svg aria-hidden="true" width="105" height="78" className="absolute top-6 left-6 fill-slate-200">
                    <path d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z"></path>
                  </svg>
                  <blockquote className="relative">
                    <p className="text-lg tracking-tight text-slate-900 font-Lexend pt-8 pl-5">Their responsiveness complemented their project management style. Expect a team receptive to feedback and dedicated to fulfilling needs and give your idea a life.</p>
                  </blockquote>
                  <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                    <div>
                      <div className="font-display text-lg text-slate-900 font-Lexend">Amy Hahn</div>
                      <div className="mt-1 text-sm text-slate-500 font-Lexend leading-3">Director at Varacode</div>
                    </div>
                    <div className="overflow-hidden rounded-full bg-slate-50">
                      <img alt="" srcSet="https://salient.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar-4.16b4e29e.png&amp;w=64&amp;q=75  1x, https://salient.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar-4.16b4e29e.png&amp;w=128&amp;q=75 2x" src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar-4.16b4e29e.png&amp;w=128&amp;q=75" width="56" height="56" decoding="async" data-nimg="future" className="h-14 w-14 object-cover" loading="lazy"/>
                    </div>
                  </figcaption>
                </figure>
              </li>
            </ul>
          </li>
          <li>
            <ul role="list" className="flex flex-col gap-y-6 sm:gap-y-8">
              <li>
                <figure className="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10 border border-[#581C87]">
                  <svg aria-hidden="true" width="105" height="78" className="absolute top-6 left-6 fill-slate-200">
                    <path d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z"></path>
                  </svg>
                  <blockquote className="relative">
                    <p className="text-lg tracking-tight text-slate-900 font-Lexend pt-8 pl-5">After taking some time to understand each other’s working style, the teams have collaborated effectively, with Webure’s team producing excellent results.</p>
                  </blockquote>
                  <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                    <div>
                      <div className="font-display text-lg text-slate-900 font-Lexend">Leland Kiehn</div>
                      <div className="mt-1 text-sm text-slate-500 font-Lexend leading-3">Founder of Kiehn and Sons</div>
                    </div>
                    <div className="overflow-hidden rounded-full bg-slate-50">
                      <img alt="" srcSet="https://salient.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar-5.e7f7faf2.png&amp;w=64&amp;q=75  1x, https://salient.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar-5.e7f7faf2.png&amp;w=128&amp;q=75 2x" src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar-5.e7f7faf2.png&amp;w=128&amp;q=75" width="56" height="56" decoding="async" data-nimg="future" className="h-14 w-14 object-cover" loading="lazy"/>
                    </div>
                  </figcaption>
                </figure>
              </li>
              <li>
                <figure className="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10 border border-[#581C87]">
                  <svg aria-hidden="true" width="105" height="78" className="absolute top-6 left-6 fill-slate-200">
                    <path d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z"></path>
                  </svg>
                  <blockquote className="relative">
                    <p className="text-lg tracking-tight text-slate-900 font-Lexend pt-8 pl-5">Webure Team navigate offshore coordination problems skillfully and provide prompt responses. Customers can expect an experience strategic partner with valuable project insights.</p>
                  </blockquote>
                  <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                    <div>
                      <div className="font-display text-lg text-slate-900 font-Lexend">Erin Powlowski</div>
                      <div className="mt-1 text-sm text-slate-500 font-Lexend leading-3">COO at Home Storage Company</div>
                    </div>
                    <div className="overflow-hidden rounded-full bg-slate-50">
                      <img alt="" srcSet="https://salient.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar-2.c72e5a40.png&amp;w=64&amp;q=75  1x, https://salient.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar-2.c72e5a40.png&amp;w=128&amp;q=75 2x" src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar-2.c72e5a40.png&amp;w=128&amp;q=75" width="56" height="56" decoding="async" data-nimg="future" className="h-14 w-14 object-cover" loading="lazy"/>
                    </div>
                  </figcaption>
                </figure>
              </li>
            </ul>
          </li>
      <li>
        <ul role="list" className="flex flex-col gap-y-6 sm:gap-y-8">
          <li>
            <figure
              className="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10 border border-[#581C87]"
            >
              <svg
                aria-hidden="true"
                width="105"
                height="78"
                className="absolute top-6 left-6 fill-slate-200"
              >
                <path
                  d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z"
                ></path>
              </svg>
              <blockquote className="relative">
                <p className="text-lg tracking-tight text-slate-900 font-Lexend pt-8 pl-5">
                Webure Technologies delivers solid code within tight deadlines. I’m impressed by their speed. They also offer affordable pricing and easy collaboration.
                </p>
              </blockquote>
              <figcaption
                className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6"
              >
                <div>
                  <div className="font-display text-lg text-slate-900 font-Lexend">
                    Peter Renolds
                  </div>
                  <div className="mt-1 text-sm text-slate-500 font-Lexend leading-3">
                    Founder of FranklinCovey
                  </div>
                </div>
                <div className="overflow-hidden rounded-full bg-slate-50">
                  <img
                    alt=""
                    srcSet="
                    https://salient.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar-3.eaa9ef6f.png&amp;w=64&amp;q=75  1x,
                    https://salient.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar-3.eaa9ef6f.png&amp;w=128&amp;q=75 2x
                    "
                    src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar-3.eaa9ef6f.png&amp;w=128&amp;q=75"
                    width="56"
                    height="56"
                    decoding="async"
                    data-nimg="future"
                    className="h-14 w-14 object-cover"
                    loading="lazy"
                  />
                </div>
              </figcaption>
            </figure>
          </li>
          <li>
            <figure
              className="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10 border border-[#581C87]"
            >
              <svg
                aria-hidden="true"
                width="105"
                height="78"
                className="absolute top-6 left-6 fill-slate-200"
              >
                <path
                  d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z"
                ></path>
              </svg>
              <blockquote className="relative">
                <p className="text-lg tracking-tight text-slate-900 font-Lexend pt-8 pl-5">
                Through their high-level execution, flawless customer support, and responsive approach, Webure delivered a website that effectively generates income.
                </p>
              </blockquote>
              <figcaption
                className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6"
              >
                <div>
                  <div className="font-display text-lg text-slate-900 font-Lexend">
                    Amy Hahn
                  </div>
                  <div className="mt-1 text-sm text-slate-500 font-Lexend leading-3">
                    Director at Liguori Publications
                  </div>
                </div>
                <div className="overflow-hidden rounded-full bg-slate-50">
                  <img
                    alt=""
                    srcSet="
                    https://salient.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar-4.16b4e29e.png&amp;w=64&amp;q=75  1x,
                    https://salient.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar-4.16b4e29e.png&amp;w=128&amp;q=75 2x
                    "
                    src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar-4.16b4e29e.png&amp;w=128&amp;q=75"
                    width="56"
                    height="56"
                    decoding="async"
                    data-nimg="future"
                    className="h-14 w-14 object-cover"
                    loading="lazy"
                  />
                </div>
              </figcaption>
            </figure>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</section>
  );
}

function Avatar(props) {
  return (
    <div className="flex items-center mt-8 space-x-3">
      <div className="flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
        <Image
          src={props.image}
          width="40"
          height="40"
          alt="Avatar"
          layout="responsive"
          placeholder="blur"
        />
      </div>
      <div>
        <div className="text-lg font-medium">{props.name}</div>
        <div className="text-gray-600 dark:text-gray-400">{props.title}</div>
      </div>
    </div>
  );
}

function Mark(props) {
  return (
    <>
      {" "}
      <mark className="text-indigo-800 bg-indigo-100 rounded-md ring-indigo-100 ring-4 dark:ring-indigo-900 dark:bg-indigo-900 dark:text-indigo-200">
        {props.children}
      </mark>{" "}
    </>
  );
}
