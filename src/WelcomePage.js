import React from "react";
import { Link } from "react-router-dom";
import welcomeImg from "./welcome.png";

function WelcomePage() {
  return (
    <div className="flex lg:flex-row flex-col w-full p-10 bg-gradient-to-tl from-green-300 to-purple-400 font-secular">
      <div className="flex flex-col basis-1/2 self-center lg:pl-10 pl-2">
        <div>
          <div className=" lg:text-6xl text-3xl text-white">Be more productive</div>
          <div className=" lg:text-6xl text-3xl text-white">every day!</div>
          <div className="lg:text-2xl text-lg text-white mt-8 flex gap-2 flex-col">
            <p>Focus on the right to-do task at the right time</p>
            <p>Keep track of everything with simple grouping</p>
          </div>
        </div>

        <div className="flex flex-row gap-3 pt-10 md:ml-0 ml-[1em] ">
          <div>
            <Link to="todo"><button
              type="button"
              className="text-sm text-white mb-8 rounded-xl box-border p-3 transition-all duration-250 bg-[#218aa6] hover:bg-[#22a8cc] sm:text-xl m-2 "
            >
              SEE DEMO
            </button></Link>
          </div>
          <div>
            <Link to="login">
            <button
              type="button"
              className="text-sm text-white mb-8 rounded-xl box-border p-3 transition-all duration-250 bg-[#ff8500] hover:bg-[#fca016] sm:text-xl m-2"
            >
              SIGNUP / LOGIN
            </button></Link>
          </div>
        </div>

        <a href="https://www.eisenhower.me/eisenhower-matrix/" target="_blank" rel="noreferrer"> <div className="underline text-blue-800 lg:text-base text-smcursor-pointer lg:mt-10 mt-4">For more information about the grouping philosophy used in task manager</div></a>
      </div>

      <div className="basis-1/2 self-center lg:pr-10 pr-4 pt-10 mb-20">
        <img src={welcomeImg} alt="welcomeImage" />
      </div>
    </div>
  );
}

export default WelcomePage;
