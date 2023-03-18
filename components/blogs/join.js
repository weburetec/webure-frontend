import React, { useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import { Switch } from "@headlessui/react";

const Join = () => {
  const [switchValue, setSwitchValue] = useState(false);
  return (
    <div className="container">
    <div className="w-full bg-black px-3">
      <div className="bg-yellow-300">
        <div className="md:flex justify-around px-3 md:p-8">
          <div className="tracking-[0.015em] md:w-1/2">
            <p className="text-2xl md:text-4xl uppercase font-bold">
              join our{" "}
              <Typewriter
                words={["574,181 subscribers", "701,569 followers"]}
                loop={true}
                delaySpeed={1000}
                cursor
                cursorStyle="_"
                typeSpeed={70}
              />
            </p>
            <p className="text-xl md:text-2xl uppercase font-semibold">
              Get exclusive access to freebies and news
            </p>
          </div>
          {/* input */}
          <div className="mt-3 md:mt-0 md:w-1/2">
            <div className="flex">
              <input
                type="text"
                className="px-6 py-4 outline-none w-full rounded-l-md font-semibold"
              />
              <button className="px-6 py-4 bg-black text-white font-bold tracking-wide">
                Submit
              </button>
            </div>
            <div className="inline-flex pb-1 md:pb-0 mt-1">
              <Switch.Group as="div" className="flex items-center space-x-4">
                <Switch
                  as="button"
                  checked={switchValue}
                  onChange={setSwitchValue}
                  className={`${
                    switchValue ? "bg-green-600" : "bg-black"
                  } relative inline-flex flex-shrink-0 h-5 transition-colors duration-200 ease-in-out border-2 border-transparent rounded-full cursor-pointer w-11 focus:outline-none focus:shadow-outline`}
                >
                  {({ checked }) => (
                    <span
                      className={`${
                        checked ? "translate-x-5" : "translate-x-0"
                      } inline-block w-4 h-4 transition duration-200 ease-in-out transform bg-white rounded-full`}
                    />
                  )}
                </Switch>
              </Switch.Group>
              {/* <input type="checkbox" name="term" className="" /> */}
              <p className="pl-1 font-semibold text-lg font-Ubuntu">
                I agree to subscriber to the newsletter, See our{" "}
                <span className="underline">privacy policy</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Join;
