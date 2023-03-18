import React from "react";

// styles
const styles = {
  title: "font-notoSans font-bold text-md lg:text-xl text-[#767479] text-left",
  subTitle: "font-notoSans font-semibold text-md text-[#767479] text-left",
  toolsDimension: "h-[35px] w-[35px]",
  serviceDimension: "h-[30px] w-[30px]",
  // sub
  chalangeTitle: "text-lg md:text-xl font-semibold font-notoSans",
  chalangeSubTitle: "text-md md:text-xl font-notoSans text-[#606263]",
};

const BlogDetail = () => {
  return (
    <div className="relative">
      {/*  */}
      <svg
        width="244"
        height="236"
        viewBox="0 0 244 236"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute -z-50 px-2 lg:px-6"
      >
        <path
          d="M2.8217 48.4826C-7.45712 22.5979 15.1468 -4.34053 42.4232 1.28729L215.71 37.0407C241.658 42.3945 252.479 73.5202 235.449 93.8163L127.464 222.508C110.433 242.805 77.9012 237.552 68.1229 212.928L2.8217 48.4826Z"
          fill="#FFF1B9"
        />
      </svg>
      <div className="md:flex md:justify-between lg:gap-4 px-2 lg:px-6">
        <div className="">
          <h2 className="text-2xl lg:text-4xl font-OpenSans font-bold text-[#606263]">
            Introducing <br /> Srijan Technologies
          </h2>
          <p className="text-lg lg:text-2xl font-notoSans text-[#606263]">
            Microservices architecture has been rapidly adopted by different
            organizations on account of its scalability. APIs are its key
            elements that enable this flexibility via its exposable endpoints.
            However, to achieve this, businesses should be able to expose APIs
            quickly and in accordance with industry standards.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 mt-4 gap-2 lg:gap-4">
            {[
              {
                title: "CHALLENGES",
                desc: `The client wanted to redesign their old website without
                    changing the CMS or the way they do their web presence. So
                    how the CMS they are using is structured. It has a modular
                    library of components, which are used in a drag and drop
                    interface.`,
              },
              {
                title: "SOLUTIONS",
                desc: `After we kicked off the process with some mood boards and
                  wireframes we settled on a direction. Because they needed the
                  design to be entire “MODULAR” we started design process with
                  standalone components. So the design process at some point
                  became puzzle pieces.`,
              },
            ].map((chalange, index) => (
              <div key={index}>
                <UnderLineSvg />
                <p className={styles.chalangeTitle}>{chalange.title}</p>
                <p className={styles.chalangeSubTitle}>{chalange.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full">
          <div className="mt-3 lg:w-full h-full lg:pl-4 bg-gray-100 rounded-[20px] p-4 md:float-right">
            <h3 className={styles.title}>OVERVIEW</h3>

            <p className={styles.title}>INDUSRY</p>
            <p className={styles.subTitle}>Manufacturing</p>
            <br />
            <p className={styles.title}>NO OF EMPLOYEES</p>

            <p className={styles.subTitle}>600+</p>
            <br />
            {/* tools */}
            <p className={styles.title}>TOOLS USED</p>
            <div className="grid grid-cols-5 gap-2 mt-2">
              {/*  */}
              {[
                {
                  name: "javaScript",
                  src: "js.png",
                },
                {
                  name: "HTML",
                  src: "html.png",
                },
                {
                  name: "CSS",
                  src: "css.png",
                },
                {
                  name: "c#",
                  src: "csharp.png",
                },
                {
                  name: "development",
                  src: "development.png",
                },
                {
                  name: "API",
                  src: "api.png",
                },
                {
                  name: "htmllCssJs",
                  src: "htmllCssJs.png",
                },
                {
                  name: "PHP",
                  src: "php.png",
                },
                {
                  name: "CODE",
                  src: "code.png",
                },
                {
                  name: "mobile",
                  src: "mobile.png",
                },
              ].map((item, index) => (
                <div key={index}>
                  <image
                    src={"/img/" + item.src}
                    alt={item.name}
                    className={styles.toolsDimension}
                  />
                </div>
              ))}
            </div>
            <br />
            {/* services */}
            <p className={styles.title}>SERVICE PROVIDED </p>
            <div className="grid grid-cols-7 mt-2">
              {[
                {
                  name: "tool1",
                  src: "tool1.png",
                },
                {
                  name: "tool2",
                  src: "tool2.png",
                },
                {
                  name: "tool3",
                  src: "tool3.png",
                },
                {
                  name: "tool4",
                  src: "tool4.png",
                },
                {
                  name: "tool5",
                  src: "tool5.png",
                },
                {
                  name: "tool6",
                  src: "tool6.png",
                },
                {
                  name: "tool7",
                  src: "tool7.png",
                },
              ].map((item, index) => (
                <div key={index}>
                  <image
                    src={"/img/" + item.src}
                    alt={item.name}
                    className={styles.serviceDimension}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;

const UnderLineSvg = () => (
  <svg
    width="100"
    height="8"
    viewBox="0 0 132 8"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="rounded-full"
  >
    <line y1="4" x2="132" y2="4" stroke="#B197FA" strokeWidth={"8"} />
  </svg>
);
