import React from "react";
// styles
const styles = {
  mainTitle: "font-notoSans font-bold text-[#606263] text-2xl lg:text-3xl",
  desc: "h-auto font-normal text-md w-full p-2",
};
const BlogWorkProcess = () => {
  return (
    <div className="px-2 lg:px-6 mt-4 lg:mt-6">
      <h3 className={styles.mainTitle}>WORK PROCESS:-</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <div className="flex gap-4 font-semibold">
            <div className="h-[40px] w-full lg:w-1/3 bg-[#578EF5] rounded-[10px] bg-opacity-40 text-[#3E6EC3] text-center p-2 hover:bg-gray-100 cursor-pointer duration-200">
              Wireframe
            </div>
            <div className="h-[40px] w-full lg:w-1/3 bg-[#FDFF99] rounded-[10px] bg-opacity-40 text-[#61614a] text-center p-2 hover:bg-gray-100 cursor-pointer duration-200">
              Design Prototype
            </div>
          </div>
          <br />
          <h3 className={styles.mainTitle}>OUR ROLE:-</h3>
          {/* role */}
          <div className="flex gap-4">
            {/*  */}
            {[
              {
                name: "role1",
                src: "role1.png",
              },
              {
                name: "role2",
                src: "role2.png",
              },
              {
                name: "role3",
                src: "role3.png",
              },
              {
                name: "role4",
                src: "role4.png",
              },
              {
                name: "role5",
                src: "role5.png",
              },
              {
                name: "role6",
                src: "role6.png",
              },
            ].map((item, index) => (
              <div key={index}>
                <image
                  src={"/img/" + item.src}
                  alt={item.name}
                  className="w-14 h-14 md:w-16 md:h-16"
                />
              </div>
            ))}
          </div>
        </div>
        <div>
          {/* main */}
          <div className="mx-0 lg:mx-4">
            <div className="my-3 h-auto w-full bg-[#0F0000] rounded-[10px] text-white p-2">
              <span className="font-bold"> User Story:</span> As a user, I
              should be able (Order fixer) to satisfy the need
            </div>
            {/* sub */}
            <div className="flex">
              <div className="my-3 font-bold w-52 md:text-left lg:w-1/3 bg-[#0F0000] rounded-[10px] text-white p-5 lg:p-2">
                Scenario 1
              </div>
              <p className={styles.desc}>
                As a user using search bar to navigate and select my need then
                select craft man and book it.
              </p>
            </div>
            {[
              {
                buttonTitle: "Scenario 2",
                desc: `As a user, user will be able to order a craftman by selecting
                offers from home page`,
              },
              {
                buttonTitle: "Scenario 3",
                desc: `As a user, User will be able to order craftman by navigating
                through high demanded services and book a craftsman.`,
              },
              {
                buttonTitle: "Scenario 4",
                desc: `User will be able to order a craftsman by selecting category
                from the homepage.`,
              },
            ].map((item, index) => (
              <div className="flex" key={index}>
                <div className="my-3 font-bold w-52 md:text-left lg:w-1/3 bg-[#F6BA3E] rounded-[10px] text-black p-5 lg:p-2">
                  {item.buttonTitle}
                </div>
                <p className={styles.desc}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogWorkProcess;
